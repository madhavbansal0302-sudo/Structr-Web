import os
import re

dir_path = r'f:\Website'

for root, dirs, files in os.walk(dir_path):
    if 'node_modules' in root or '.git' in root or 'scratch' in root:
        continue
    for file in files:
        if file.endswith('.html') or file.endswith('.js'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # replace href="index.html" with href="/"
            new_content = re.sub(r'href="index\.html"', 'href="/"', content)
            new_content = re.sub(r"href='index\.html'", "href='/'", new_content)
            
            # replace href="name.html" with href="/name"
            # Note: ?slug=xyz might follow the .html in blog.js
            new_content = re.sub(r'href="([a-zA-Z0-9_-]+)\.html(\?[^"]*)?"', r'href="/\1\2"', new_content)
            new_content = re.sub(r"href='([a-zA-Z0-9_-]+)\.html(\?[^']*)?'", r"href='/\1\2'", new_content)

            # replace .html in OG tags like content="https://structr.in/services.html"
            new_content = re.sub(r'content="([^"]+)\.html"', r'content="\1"', new_content)

            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f'Updated {filepath}')
