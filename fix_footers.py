#!/usr/bin/env python3
import os
import re

def fix_footer(file_path):
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Pattern 1: Simple footer
    content = re.sub(
        r'<footer class="footer">\s*<p>&copy; 2026 Free Online Tools\.?</p>\s*</footer>',
        '''<footer class="footer">
    <p>&copy; 2026 Free Online Tools.</p>
    <p style="margin-top: 10px;">
      <a href="../../tool-privacy.html" style="color: var(--text-secondary); margin: 0 10px;">Privacy Policy</a>
    </p>
  </footer>''',
        content
    )
    
    # Pattern 2: Messy footer
    content = re.sub(
        r'<footer class="footer">.*?</footer>',
        '''<footer class="footer">
    <p>&copy; 2026 Free Online Tools.</p>
    <p style="margin-top: 10px;">
      <a href="../../tool-privacy.html" style="color: var(--text-secondary); margin: 0 10px;">Privacy Policy</a>
    </p>
  </footer>''',
        content,
        flags=re.DOTALL
    )
    
    with open(file_path, 'w') as f:
        f.write(content)
    
    print(f'Fixed: {file_path}')

# Find all HTML files in tools directory
for root, dirs, files in os.walk('tools'):
    for file in files:
        if file.endswith('.html'):
            file_path = os.path.join(root, file)
            fix_footer(file_path)

print('\nAll pages fixed!')
