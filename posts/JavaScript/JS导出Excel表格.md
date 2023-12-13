---
title: JS导出Excel表格
date: 2021-07-10 21:00:15
author: RuiLin Dong
categories:
  - JavaScript
tags:
  - JavaScript
---

最近遇到一个需求，是需要将数据导出为 Excel 表格，在 GitHub 上找了很久，找到一个比较好用的库，做下记录。
<!-- more -->

库的名字叫 ['sheetjs'](https://github.com/SheetJS/sheetjs) ,在 React 中的使用方法如下：
```JSX
import XLSX from 'xlsx'
const exportExcel = (data:Array<Array<any>>) => {
    const toXlsx = XLSX.utils.aoa_to_sheet(data)
    const new_workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(new_workbook, toXlsx, "SheetJS");
    XLSX.writeFile(new_workbook, `excelName.xlsx`);
}      
```
上面演示中 data 的数据结构是 `Array<Array<any>>` 所以要使用 `aoa_to_sheet` 方法，官方也给出了其他数据结构对应的方法，可以在官方库中找到[说明文档](https://github.com/SheetJS/sheetjs#readme)。
