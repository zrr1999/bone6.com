---
title: "有理分式分解的一种快捷方法"
author: "六个骨头"
description: "在学习信号与系统等学科时，我们经常会遇到有理分式分解的问题，这里介绍一种有理分式分解的一种快捷方法"
pubDatetime: 2021-12-30
tags: ["数学"]
---

# 有理分式分解的一种快捷方法

在学习信号与系统等学科时，我们经常会遇到有理分式分解的问题。
通常情况下，对于分母为若干一次式的乘积的情况，我们可以通过留数法快速分解，
然而，对于分母含有二次式的情况，教科书上却鲜有提及。
我在多次遇到次此类问题后，认为可能会存在更快速的方法，通过几天的研究，总结一种快捷方法，并对其进行了证明。

## 简单问题

首先，我先来介绍一些比较简单的情况。设

$$
F(s)=\frac{s^3+s+1}{(s-1)(s-2)(s-3)}
$$

通过留数法我们可以分解为

$$
F(s)=1+\frac{s^3+s+1}{(s-2)(s-3)}|_{s=1} \cdot \frac{1}{s-1}
+\frac{s^3+s+1}{(s-1)(s-3)}|_{s=2}\cdot \frac{1}{s-2}
+\frac{s^3+s+1}{(s-1)(s-2)}|_{s=3}\cdot \frac{1}{s-3}
$$

未完待续
