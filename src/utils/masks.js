export function mTel(tel) {
  tel = tel.replace(/\D/g, "");
  tel = tel.replace(/^(\d)/, "($1");
  tel = tel.replace(/(.{3})(\d)/, "$1)$2");
  if (tel.length == 9) {
    tel = tel.replace(/(.{1})$/, "-$1");
  } else if (tel.length == 10) {
    tel = tel.replace(/(.{2})$/, "-$1");
  } else if (tel.length == 11) {
    tel = tel.replace(/(.{3})$/, "-$1");
  } else if (tel.length == 12) {
    tel = tel.replace(/(.{4})$/, "-$1");
  } else if (tel.length > 12) {
    tel = tel.replace(/(.{4})$/, "-$1");
  }
  return tel;
}

export function mCNPJ(cnpj) {
  cnpj = cnpj.replace(/\D/g, "");
  cnpj = cnpj.replace(/^(\d{2})(\d)/, "$1.$2");
  cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
  cnpj = cnpj.replace(/\.(\d{3})(\d)/, ".$1/$2");
  cnpj = cnpj.replace(/(\d{4})(\d)/, "$1-$2");
  return cnpj;
}

export function mCPF(cpf) {
  cpf = cpf.replace(/\D/g, "");
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  return cpf;
}

export function mCEP(cep) {
  cep = cep.replace(/\D/g, "");
  cep = cep.replace(/^(\d{2})(\d)/, "$1.$2");
  cep = cep.replace(/\.(\d{3})(\d)/, ".$1-$2");
  return cep;
}

export function mMoney(money) {
  money = mNum(money.toString());
  let tmp = money + "";
  tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
  if (tmp.replace(/[^0-9]/g, "").length > 6) tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

  return `R$ ${tmp}`;
}

export function mNum(num) {
  num = num.replace(/[^0-9\-]/g, "");
  return num;
}

export function roudHalf($num) {
  return (Math.round($num * 10) / 10).toFixed(2);
}
