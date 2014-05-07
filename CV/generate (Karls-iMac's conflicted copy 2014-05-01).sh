#!/bin/bash
pandoc -s --template ../../Pandoc\ Templates/default.latex -o cv.pdf CV.md
pandoc -s --self-contained --css=cv.css -o cv.html CV.md
pandoc -s --reference-docx=template.docx -o cv.docx CV.md
pandoc -s --epub-stylesheet=cv.css -o cv.epub CV.md


