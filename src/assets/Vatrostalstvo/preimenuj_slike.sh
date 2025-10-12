#!/bin/bash

# Početni brojač
i=1

# Prolazak kroz sve slike sa najčešćim ekstenzijama (možeš dodati još ako treba)
for file in *.{jpg,jpeg,png,gif,bmp,JPEG,PNG,JPG,BMP,webp}; do
    # Provjera da li fajl postoji (da se izbjegne greška ako ne postoji npr. *.webp)
    if [[ -f "$file" ]]; then
        # Ekstenzija
        ext="${file##*.}"
        # Novi naziv
        newname="slika$i.$ext"
        # Preimenovanje
        mv "$file" "$newname"
        ((i++))
    fi
done

