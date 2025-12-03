from PIL import Image, ImageDraw, ImageFont
import os

input_folder = "Vatrostalstvo"
output_folder = "Vatro2"
os.makedirs(output_folder, exist_ok=True)

text = "www.izolater.net"

for filename in os.listdir(input_folder):
    if filename.lower().endswith(".jpg"):
        image_path = os.path.join(input_folder, filename)
        img = Image.open(image_path)
        draw = ImageDraw.Draw(img)

        # Dinamički font size – 3% širine slike
        font_size = int(img.width * 0.03)
        if font_size < 20:
            font_size = 20  # minimum da ne bude premali

        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
                                  font_size)

        # Izračun veličine teksta
        bbox = draw.textbbox((0, 0), text, font=font)
        text_width = bbox[2] - bbox[0]
        text_height = bbox[3] - bbox[1]

        # Gornji desni ćošak
        x = img.width - text_width - 20
        y = 20

        # Dodaj tekst sa sjenkom
        draw.text((x+2, y+2), text, font=font, fill=(0, 0, 0))
        draw.text((x, y), text, font=font, fill=(255, 255, 255))

        output_path = os.path.join(output_folder, filename)
        img.save(output_path)

        print(f"Obrađena {filename} (font size: {font_size})")

print("DONE ✔️")

