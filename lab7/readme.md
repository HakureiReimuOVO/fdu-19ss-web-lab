# Lab7设计文档
> 19302010009 钱麒丹

## 困难与解决方法
出现了getElementsByClassName()方法无法指定到目标元素的问题。随后通过观察该方法发现其返回的是同一类元素自上往下排列的数组，需要在后面加上[0]以指定第一个元素。  
  
出现了设定元素高宽无效的问题。原因是用style设置高宽时，赋予的值应当是字符串类型。用img元素举例，在JAVAScript中，直接设定img元素的witdth与height值时，数值没有单位。而通过style设定img元素的witdth与height值时，数值为带单位的字符串。