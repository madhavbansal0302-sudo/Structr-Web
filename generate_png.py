from PIL import Image, ImageDraw, ImageFont
import os

def create_placeholder(path, text, size=(120, 32)):
    # Create a new image with a transparent background
    img = Image.new('RGBA', size, (255, 255, 255, 0))
    d = ImageDraw.Draw(img)
    
    # Draw simple border or background if needed (optional)
    d.rectangle([0, 0, size[0]-1, size[1]-1], outline=(200, 200, 200, 100), width=2)
    
    # Try to load a font, otherwise use default
    font = None # Default
    
    # Draw text in the middle
    # Center text manually for default font
    # default font size is around 10px tall
    text_w = 6 * len(text)
    text_h = 10
    d.text(((size[0] - text_w) / 2, (size[1] - text_h) / 2), text, fill=(200, 200, 200, 255), font=font)
    
    os.makedirs(os.path.dirname(path), exist_ok=True)
    img.save(path)
    print(f"Created {path}")

create_placeholder(r"h:\Website\assets\clients\placeholder.png", "Logo")
create_placeholder(r"h:\Website\assets\tools\placeholder.png", "Tool")
