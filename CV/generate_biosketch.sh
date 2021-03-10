#!/bin/bash
pandoc -s --latex-engine=xelatex --template=./default.latex -o biosketch_2pg.pdf biosketch_2pg.md
pandoc -s --reference-doc=template.docx -o biosketch_2pg.docx biosketch_2pg.md

git add .

if [ -z "$1" ]; then
    git commit -a -m "no message"
else
    git commit -a -m "$1"
fi

git push origin