// 判断是否是excel文件
export const isExcel = (file) => {
  return /\.(xlsx|xls|csv)$/.test(file.name);
};
