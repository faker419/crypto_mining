import os
from PIL import Image

def convert_png_to_jpeg(directory):
    """
    Recursively converts all PNG images in a directory (and subdirectories) to JPEG format.
    Skips files that are not PNG and preserves the original folder structure.
    """
    for root, _, files in os.walk(directory):
        for file in files:
            if file.lower().endswith('.png'):
                png_path = os.path.join(root, file)
                jpeg_path = os.path.join(root, os.path.splitext(file)[0] + '.jpg')
                
                try:
                    # Open the PNG image and convert to RGB (JPEG doesn't support alpha)
                    with Image.open(png_path) as img:
                        if img.mode in ('RGBA', 'LA', 'P'):
                            img = img.convert('RGB')
                        img.save(jpeg_path, 'JPEG', quality=95)  # Adjust quality as needed
                    
                    # Delete the original PNG after successful conversion
                    os.remove(png_path)
                    print(f"Converted & Deleted: {png_path} → {jpeg_path}")
                    # Optional: Remove the original PNG after conversion
                    # os.remove(png_path)
                    
                except Exception as e:
                    print(f"Error converting {png_path}: {e}")


target_directory = r"C:\wamp64\www\crypto_mining\assets\pilot_images"
if os.path.isdir(target_directory):
    convert_png_to_jpeg(target_directory)
    print("Conversion complete!")
else:
    print("Invalid directory path. Please try again.")
