import re
import json
import time
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from bs4 import BeautifulSoup

def extract_blog_items():
    with open('raw_readme.md', 'r', encoding='utf-8') as f:
        text = f.read()

    current_step = None
    items = []
    
    for line in text.splitlines():
        line_s = line.strip()
        if line_s.startswith('### Step '):
            current_step = line_s.replace('### ', '')
        elif line_s.startswith('Supporting reads'):
            current_step = 'Step 16: Supporting reads for AI System Design'
        
        matches = re.findall(r'- \[(.*?)\]\((https?://[^\)]+)\)', line)
        for title, url in matches:
            if not current_step:
                continue
            # Ignore youtube videos and interview-questions repository
            if 'youtube.com' in url or 'youtu.be' in url or 'interview-questions' in url:
                continue
            if 'outcomeschool.com' in url or 'substack.com' in url:
                items.append({
                    'step': current_step,
                    'title': title.strip(),
                    'url': url.strip()
                })
    return items

def analyze_blog(item, index):
    url = item['url']
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
    
    for attempt in range(3):
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=15) as resp:
                html = resp.read().decode('utf-8', errors='ignore')
            
            soup = BeautifulSoup(html, 'html.parser')
            
            # Find published date
            time_tag = soup.find('time')
            pub_date = time_tag.get_text(strip=True) if time_tag else None
            
            # Find body content
            content_elem = None
            if 'substack.com' in url:
                content_elem = soup.find('div', class_='available-content') or soup.find('article') or soup.body
            else:
                content_elem = soup.find(class_=lambda x: x and 'prose' in x)
                if not content_elem:
                    content_elem = soup.find('article') or soup.find('main') or soup.body

            if content_elem:
                # Clone or remove script/style
                for tag in content_elem(['script', 'style', 'nav', 'footer', 'noscript', 'svg', 'button']):
                    tag.decompose()
                
                # Stats
                code_blocks_count = len(content_elem.find_all('pre'))
                headings_count = len(content_elem.find_all(['h1', 'h2', 'h3', 'h4']))
                paragraphs = content_elem.find_all('p')
                paragraphs_count = len(paragraphs)
                images_count = len(content_elem.find_all('img'))
                
                raw_text = content_elem.get_text(separator=' ', strip=True)
                
                # First non-empty paragraph as clean excerpt
                excerpt = ""
                for p in paragraphs:
                    p_text = p.get_text(strip=True)
                    if len(p_text) > 40 and not p_text.startswith("Author"):
                        excerpt = p_text
                        break
                if not excerpt:
                    excerpt = raw_text[:200]
            else:
                raw_text = soup.get_text(separator=' ', strip=True)
                code_blocks_count = 0
                headings_count = 0
                paragraphs_count = 0
                images_count = 0
                excerpt = raw_text[:200]
            
            cleaned_text = re.sub(r'\s+', ' ', raw_text).strip()
            words = [w for w in cleaned_text.split() if len(w) > 0]
            word_count = len(words)
            char_count = len(cleaned_text)
            
            # Standard reading speed: 200 words per minute
            reading_time_mins = max(1, round(word_count / 200))
            
            # Read length categories
            if reading_time_mins <= 4:
                category = "Quick Read"
                category_desc = "≤ 4 mins"
                badge_class = "badge-emerald"
            elif reading_time_mins <= 8:
                category = "Standard Read"
                category_desc = "5 - 8 mins"
                badge_class = "badge-blue"
            elif reading_time_mins <= 15:
                category = "Deep Dive"
                category_desc = "9 - 15 mins"
                badge_class = "badge-purple"
            else:
                category = "Comprehensive Guide"
                category_desc = "16+ mins"
                badge_class = "badge-amber"

            # Step number extraction
            step_match = re.search(r'Step (\d+)', item['step'])
            step_num = int(step_match.group(1)) if step_match else 0
            
            return {
                'id': index + 1,
                'step': item['step'],
                'step_number': step_num,
                'title': item['title'],
                'url': url,
                'word_count': word_count,
                'reading_time_mins': reading_time_mins,
                'reading_time_display': f"{reading_time_mins} min read",
                'char_count': char_count,
                'category': category,
                'category_desc': category_desc,
                'badge_class': badge_class,
                'headings_count': headings_count,
                'paragraphs_count': paragraphs_count,
                'code_blocks_count': code_blocks_count,
                'images_count': images_count,
                'author': "Amit Shekhar",
                'published_date': pub_date,
                'excerpt': excerpt[:280] + ("..." if len(excerpt) > 280 else ""),
                'status': 'success'
            }
        except Exception as e:
            if attempt == 2:
                print(f"Error fetching {url}: {e}")
                step_match = re.search(r'Step (\d+)', item['step'])
                step_num = int(step_match.group(1)) if step_match else 0
                return {
                    'id': index + 1,
                    'step': item['step'],
                    'step_number': step_num,
                    'title': item['title'],
                    'url': url,
                    'word_count': 0,
                    'reading_time_mins': 0,
                    'reading_time_display': "Unknown",
                    'char_count': 0,
                    'category': "Unknown",
                    'category_desc': "-",
                    'badge_class': "badge-gray",
                    'headings_count': 0,
                    'paragraphs_count': 0,
                    'code_blocks_count': 0,
                    'images_count': 0,
                    'author': "Amit Shekhar",
                    'published_date': None,
                    'excerpt': "Failed to load content.",
                    'status': f"error: {str(e)}"
                }
            time.sleep(1)

def main():
    items = extract_blog_items()
    print(f"Extracting & analyzing {len(items)} blog articles...")
    
    results = [None] * len(items)
    start_time = time.time()
    with ThreadPoolExecutor(max_workers=14) as executor:
        future_to_index = {
            executor.submit(analyze_blog, item, idx): idx 
            for idx, item in enumerate(items)
        }
        completed = 0
        for future in as_completed(future_to_index):
            idx = future_to_index[future]
            results[idx] = future.result()
            completed += 1
            if completed % 25 == 0 or completed == len(items):
                print(f"Processed {completed}/{len(items)} ({time.time() - start_time:.1f}s)")
    
    with open('blogs_analysis.json', 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
        
    total_words = sum(r['word_count'] for r in results if r['status'] == 'success')
    total_time = sum(r['reading_time_mins'] for r in results if r['status'] == 'success')
    print("\n================ Analysis Complete ================")
    print(f"Total Blogs Analyzed: {len(results)}")
    print(f"Total Word Count: {total_words:,} words")
    print(f"Total Reading Time: {total_time:,} minutes (~{total_time/60:.1f} hours)")
    avg_words = total_words // len(results) if results else 0
    print(f"Average Words/Blog: {avg_words:,} words (~{round(avg_words/200)} mins)")
    print("====================================================")

if __name__ == '__main__':
    main()
