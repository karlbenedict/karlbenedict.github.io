#!/bin/bash
pandoc -s --pdf-engine=xelatex --template=./default.latex -o NSF_biosketch_2pg.pdf NSF_biosketch_2pg.md
pandoc -s --reference-doc=template.docx -o NSF_biosketch_2pg.docx NSF_biosketch_2pg.md

git add .

if [ -z "$1" ]; then
    git commit -a -m "no message"
else
    git commit -a -m "$1"
fi

git push origin