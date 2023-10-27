/* Alex Santos - 11030349
  Turma: 1C    Data:2019 */ 
function Combina(Tab, Le) {
  var Comb = '';
  var C = 0;
  while (C < Tab.length) {
    var CC = 0;
    while (CC < Tab.length) {
      Comb += Le[C] + (CC + 1) + '-';
      CC++
    }
    C++;
  }
  return Comb;
}
function MosTab(Tab, S) {
  var A = [];
  var C = 0;
  while (C < Tab.length) {
    A.push(Le.charAt(C) + " |" + Tab[C].join("|"));
    C++;
  }
  C = 0;
  var AX = "";
  while (C < Tab.length) {
    AX += '|\n' + A[C];
    C++;
  }
  if (Tab.length == 8) {
    return "     1  2  3  4  5  6  7  8      " + S + AX.replace('|', '') + "|";
  } else {
    return "     1  2  3  4  5  6        " + S + AX.replace('|', '') + "|";
  }
}
function Invert(Tab) {
  var IA = [];
  var C = 0;
  var CC = Tab.length - 1;
  while (C < (Tab.length / 2)) {
    IA[CC] = Tab[C].reverse();
    IA[C] = Tab[CC].reverse();
    C++;
    CC--;
  }
  return IA;
}
function Bot(Comb) {
  var JX = Comb.split('-');
  JX.pop();
  var Ran = Math.floor(Math.random() * JX.length);
  return JX[Ran];
}
var Cont = 0;
do {
  var OP = parseInt(prompt("Bem vindo ao jogo da Dama \nO que você deseja fazer \n1 - Começar o Jogo \n2 - Regras \n3 - Sair do jogo"));
  switch (OP) {
    case 1:
      Cont = 0;
      break;
    case 2:
      alert("Este jogo é basicamente um Jogo de Damas 8x8 onde você será as peças brancas [◎] e deverá comer as peças pretas [◉] do computador. \nEscolha a letra e o número da peça que quer jogar e logo a posição onde botar. \nCaso você consiga eliminar todas as peças do inimigo você vence");
      break;
    case 3:
      alert("até mais jogue outra hora ._.");
      Cont = 1;
      break;
  }
} while (OP != 1 && OP != 3);
var S = "";
var Le = "ABCDEFGH";
while (Cont == 0) {
  do {
    OP = parseInt(prompt("Qual o tamanho do tabuleiro?\n1- Tabuleiro 6x6\n2- Tabuleiro 8x8"));
  } while (OP != 1 && OP != 2);
  do {
    var OPP = parseInt(prompt("você deseja jogar em que modo\n1 - singleplayer\n2 - multiplayer"));
  } while (OPP != 1 && OPP != 2);
  if (OP == 1) {
    var Tab = [['◉', '⬜', '◉', '⬜', '◉', '⬜'], ["⬜", "◉", "⬜", "◉", "⬜", '◉'], ["■", "⬜", "■", "⬜", "■", '⬜'], ['⬜', "■", "⬜", "■", "⬜", "■"], ['◎', "⬜", "◎", "⬜", "◎", "⬜"], ["⬜", '◎', '⬜', '◎', '⬜', "◎"]];
  } else {
    var Tab = [['⬜', '◉', '⬜', '◉', '⬜', '◉', '⬜', "◉"], ["◉", "⬜", "◉", "⬜", "◉", "⬜", '◉', "⬜"], ['⬜', "■", '⬜', "■", "⬜", "■", "⬜", "■"], ["■", '⬜', "■", "⬜", "■", "⬜", "■", "⬜"], ['⬜', "■", "⬜", "■", "⬜", "■", '⬜', "■"], ["■", '⬜', "■", "⬜", "■", "⬜", "■", "⬜"], ['⬜', '◎', "⬜", "◎", "⬜", "◎", "⬜", "◎"], ["◎", "⬜", '◎', '⬜', '◎', '⬜', "◎", '⬜']];
  }
  var NPB = Tab.length;
  var NPP = Tab.length;
  var Comb = Combina(Tab, Le);
  alert("Para realizar os movimentos das peças você devera digitar primeiramente a letra logo após o número(horizontal). \nLogo após você irá fazer a mesma ação para realizar o movimento em questão");
  while (NPP != 0 || NPB != 0 && Cont == 0) {
    do {
      do {
        S = 'Peça que vai mover:'
        var LC = prompt(MosTab(Tab, S) + "     Vez do branco").toUpperCase();
        if (Comb.indexOf(LC) == -1) {
          LC = "";
        }
        if (LC == "") {
          break;
        }
        var L = Le.indexOf(LC[0]);
        var C = parseInt(LC[1]) - 1;
      } while (Tab[L][C] != "◎" && Tab[L][C] != '♕');
      if (LC == "") {
        var BC = true;
        continue;
      }
      do {
        S = "Onde por a peça";
        var LCM = prompt(MosTab(Tab, S) + "     Vez do branco").toUpperCase();
        if (Comb.indexOf(LCM) == -1) {
          LCM = "";
        }
        if (LCM == "") {
          break;
        }
        var LM = Le.indexOf(LCM[0]);
        var CM = parseInt(LCM[1]) - 1;
      } while (Tab[LM][CM] != "■" || Math.abs(L - LM) > 2 || Math.abs(C - CM) > 2);
      if (LCM == '') {
        BC = true;
        continue;
      }
      if (Tab[L][C] == '♕') {
        var JG = Math.abs(L - LM);
      } else {
        var JG = L - LM;
      }
      //movimentos de ataque 
	  if ((L - LM) == 2) {
        if (Tab[LM + 1][(C + CM) / 2] == "◉" || Tab[LM + 1][(C + CM) / 2] == "♛") {
          Tab[LM][CM] = Tab[L][C];
          Tab[L][C] = "■";
          Tab[LM + 1][(C + CM) / 2] = "■";
          NPP--;
          BC = false;
        } else {
          BC = true;
        }
      } else if (L - LM == -2) {
        if (Tab[LM - 1][(C + CM) / 2] == "◉" || Tab[LM - 1][(C + CM) / 2] == "♛") {
          Tab[LM][CM] = Tab[L][C];
          Tab[L][C] = "■";
          Tab[LM - 1][(C + CM) / 2] = "■";
          NPP--;
          BC = false;
        } else {
          BC = true;
        }
      } else if (JG == 1) {
        Tab[LM][CM] = Tab[L][C];
        Tab[L][C] = "■";
        BC = false;
      } else {
        BC = true;
      }
      if (LM == 0) {
        Tab[LM][CM] = '♕';
      }
    } while (BC != false);
    if (NPP == 0) {
      break;
    }
    switch (OPP) {
      case 1:
        S = "";
        alert(MosTab(Tab, S));
        S = "Vez do preto";
        Tab = Invert(Tab);
        alert(MosTab(Tab, S));
        break;
      case 2:
        S = "Vez do preto";
        alert(MosTab(Tab, S));
        Tab = Invert(Tab);
        break;
    }
    do {
      do {
        if (OPP == 1) {
          LC = Bot(Comb);
        } else {
          S = 'Peça que vai mover:';
          LC = prompt(MosTab(Tab, S) + "     Vez do preto").toUpperCase();
        }
        if (Comb.indexOf(LC) == -1) {
          LC = "";
        }
        if (LC == "") {
          break;
        }
        L = Le.indexOf(LC[0]);
        C = parseInt(LC[1]) - 1;
      } while (Tab[L][C] != "◉" && Tab[L][C] != "♛");
      if (LC == "") {
        BC = true;
        continue;
      }
      do {
        if (OPP == 1) {
          LCM = Bot(Comb);
        } else {
          S = 'Onde por a peça';
          LCM = prompt(MosTab(Tab, S) + "     Vez do preto").toUpperCase();
        }
        if (Comb.indexOf(LCM) == -1) {
          LCM = "";
        }
        if (LCM == "") {
          break;
        }
        LM = Le.indexOf(LCM[0]);
        CM = parseInt(LCM[1]) - 1;
      } while (Tab[LM][CM] != "■" || Math.abs(L - LM) > 2 || Math.abs(C - CM) > 2);
      if (LCM == '') {
        BC = true;
        continue;
      }
      if (Tab[L][C] == '♛') {
        JG = Math.abs(L - LM);
      } else {
        JG = L - LM;
      }
      if ((L - LM) == 2) {
        if (Tab[LM + 1][(C + CM) / 2] == "◎" || Tab[LM + 1][(C + CM) / 2] == "♕") {
          Tab[LM][CM] = Tab[L][C];
          Tab[L][C] = "■";
          Tab[LM + 1][(C + CM) / 2] = "■";
          NPB--;
          BC = false;
        } else {
          BC = true;
        }
      } else if (L - LM == -2) {
        if (Tab[LM - 1][(C + CM) / 2] == "◎" || Tab[LM - 1][(C + CM) / 2] == "♕") {
          Tab[LM][CM] = Tab[L][C];
          Tab[L][C] = "■";
          Tab[LM - 1][(C + CM) / 2] = "■";
          NPB--;
          BC = false;
        } else {
          BC = true;
        }
      } else if (JG == 1) {
        Tab[LM][CM] = Tab[L][C];
        Tab[L][C] = "■";
        BC = false;
      } else {
        BC = true;
      }
      if (LM == 0) {
        Tab[LM][CM] = '♛';
      }
    } while (BC != false);
    alert(MosTab(Tab, S));
    Tab = Invert(Tab, S);
    if (NPB == 0) {
      break;
    }
  }
  if (NPP == 0) {
    alert("Parabéns, Branco venceu!");
  }
  if (NPB == 0) {
    alert("Parabéns, Preto venceu!");
  }
  do {
    OP = parseInt(prompt("Gostaria de jogar novamente?\n1 - SIM\n2 - NÃO"));
  } while (OP != 1 && OP != 2);
  if (OP == 1) {
    continue;
  } else {
    break;
  }
}