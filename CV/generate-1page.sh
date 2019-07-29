#!/bin/bash
pandoc -s --pdf-engine=xelatex --template=./default.latex -o cv-1page.pdf CV-1page.md
# pandoc -s  -o cv.pdf CV.md
pandoc -s --reference-doc=template.docx -o cv-1page.docx cv-1page.docx.md

git add cv-1page*
git add generate-1page.sh

if [ -z "$1" ]; then
    git commit -a -m "no message"
else
    git commit -a -m "$1"
fi

git push origin
