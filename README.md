# Project Instructions

## Table of Contents

* [Explain](#Explain)
* [function](#function)
* [Testing](#Testing)
* [technology](#technology)

## Explain

This project is evaluate you feeling page.</br>
このプロジェクトは、英語で文章を入力すると、その文章からあなたの今の感情がどうであるか？をmeaningcloud.comのAPIを用いて判定するものです。

## function
- you can know your feeling condition by your input text<br>入力された文章から今のあなたの感情を分析しそれを画面上に描画します（ニコニコアイコンなどで）
- this project has validation, so you don't input any, input area will be red</br>入力時にはバリデーションチェックが走ります

## Testing
### Jest
- 単体テストをjestにて実装しています

### Cypress
- i use Cypress for e2e testing<br>e2eテストにCypressを使用しています

## technology
### front end
- native Javascript
- HTML5
- Sass(CSS) and bootstrap5

### server side
- node.js

### CI
- GitHub ActionsによりCIを導入しています