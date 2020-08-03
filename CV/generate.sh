#!/bin/bash
pandoc -s --latex-engine=xelatex --template=./default.latex -o cv.pdf CV.md
# pandoc -s  -o cv.pdf CV.md
pandoc -s --self-contained --css=cv.css -o index.html CV.md
pandoc -s --self-contained --css=cv.css -o cv.html CV.md
pandoc -s --reference-doc=template.docx -o cv.docx CV.md
pandoc -s --css=cv.css -o cv.epub CV.md

git add .

if [ -z "$1" ]; then
    git commit -a -m "no message"
else
    git commit -a -m "$1"
fi

git push origin
