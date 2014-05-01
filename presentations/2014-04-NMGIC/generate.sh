#!/bin/bash

echo
echo "Generating Lecture Materials"
date

echo "Lecture slides.html";find . -iname "*.md" | sort -r | xargs -I \{\} /usr/local/bin/pandoc --section-divs --slide-level 3 -c slides.css -c slidesSpecific.css --self-contained --standalone -t dzslides \{\} -o \{\}.slides.html
echo "Lecture slides.linked.html";find . -iname "*.md" | sort -r | xargs -I \{\} /usr/local/bin/pandoc --section-divs --slide-level 3 -c slides.css -c slidesSpecific.css --standalone -t dzslides \{\} -o \{\}.slides.linked.html
echo "Lecture webpage.html";find . -iname "*.md" | sort -r | xargs -I \{\} /usr/local/bin/pandoc --toc -c ./page.css --self-contained --standalone \{\} -o \{\}.html
echo "Lecture webpage.linked.html";find . -iname "*.md" | sort -r | xargs -I \{\} /usr/local/bin/pandoc --toc -c ./page.css --standalone \{\} -o \{\}.linked.html
echo "Lecture index.html";find . -iname "*.md" | sort -r | xargs -I \{\} /usr/local/bin/pandoc --toc -c ./page.css --standalone \{\} -o index.html
echo "Lecture PDF";find . -iname "*.md" | sort -r | xargs -I \{\} /usr/local/bin/pandoc --toc --template ~/Dropbox/Active/Repos/Pandoc\ Templates/default_endFloat.latex --latex-engine=xelatex --self-contained --standalone \{\} -o \{\}.pdf
echo "Lecture LATeX";find . -iname "*.md" | sort -r | xargs -I \{\} /usr/local/bin/pandoc --toc --template ~/Dropbox/Active/Repos/Pandoc\ Templates/default_endFloat.latex --latex-engine=xelatex --self-contained --standalone \{\} -o \{\}.tex


date
echo

git add .
git commit -a --allow-empty-message -m $1
git push origin