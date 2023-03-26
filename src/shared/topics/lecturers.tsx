import STEPAN_KUYBIDA from "assets/stepan_kuybida.png";
import TarasKytsmey from "assets/people/Softserve.png";
import AndriyDligach from "assets/people/AndriyDligach.png";
import AnnaPetrova from "assets/people/AnnaPetrova.png";
import ArthurLupashko from "assets/people/ArthurLupashko.png";
import LidiaBilas from "assets/people/LidiaBilas.png";
import OlegSamchuk from "assets/people/OlegSamchuk.png";
import Unbroken from "assets/unbroken.png";
import TarasBorshovskyi from "assets/people/TarasBorshovskyi.jpg";
import VolodymyrNovyi from "assets/people/VolodymyrNovyi.png";
import styled from "styled-components";

export const Photo = styled.img`
  width: 200px;
  height: 200px;
  flex-shrink: 0;
  object-fit: contain;
  object-position: center;

  @media (max-width: 650px) {
    border-radius: 0;
    width: 100%;
    height: 100%;
  }
`;

export const LECTURERS = {
  "економіка майбутнього": [
    {
      description:
        "президент корпорації SoftServe, заслужений економіст України, голова правління Асоціації «Інформаційні технології України».",
      title: "Тарас Кицмей",
      photo: TarasKytsmey,
      subDescription: "Цифрова трансформація бізнесу",
    },
    {
      description:
        "стратег, футуролог, професор економіки, інвестор, підприємець, засновник найбільшої бізнес-спільноти. 30+ років проривних проектів в ІТ, маркетингу, розбудові країни. \n",
      title: "Андрій Длігач",
      photo: AndriyDligach,
      subDescription: "Перспективні напрями розвитку України",
    },
    {
      description: 'засновниця і генеральний директор "Startup Ukraine"',
      title: "Анна Петрова",
      photo: AnnaPetrova,
      subDescription: "Як створити бізнес під час війни",
    },
    {
      description:
        "засновник та СЕО мережі готелів Ribas Hotels. Готельний девелопер.",
      title: "Артур Лупашко",
      photo: ArthurLupashko,
      subDescription:
        "Немає часу думати повільно! Розвиток інвестиційних можливостей на ринку готельної нерухомості України. Досвід Ribas Hotels Group",
    },
  ],
  "Бізнес та інвестиції": [
    {
      description: "засновник компанії T.B. Fruit та Galicia",
      title: "Тарас Барщовський",
      photo: TarasBorshovskyi,
      subDescription:
        "Побудова міцного українського бренду - виклики та перспективи",
    },
    {
      description:
        "автор інноваційної технології, співвласник та керівник компанії GREEN WAVE ORGANIC",
      title: "Володимир Новий",
      photo: VolodymyrNovyi,
      subDescription:
        "Сучасне овочівництво, як успішний бізнес: що для цього потрібно. Жорсткі вимоги часу: змінюйся, або помри",
    },
  ],
  "соціальний блок": [
    {
      description: "голова економічного департаменту ЛОДА",
      title: "Степан Куйбіда",
      photo: STEPAN_KUYBIDA,
      subDescription: "Успішні кейси релокованого бізнесу",
    },
    {
      description:
        "засновниця мережі освітніх проектів MRIYDIY, співзасновниця мережі шкіл КМДШ",
      title: "Лідія Білас",
      photo: LidiaBilas,
      subDescription: "Інноваційні системи освіти",
    },
    {
      description:
        "Генеральний директор Першого медоб’єднання Львова - найбільшої медичної установи України, до якої входять дві дорослі лікарні та одна дитяча",
      title: "Олег Самчук",
      photo: OlegSamchuk,
      subDescription: "Розвиток української медицини: зміни, які вражають",
    },
    {
      description:
        "Національний реабілітаційний центр “Незламні“ (“Unbroken”) - це унікальне місце, де дорослі та діти, які постраждали від війни, отримують комплексну кваліфіковану медичну допомогу. Це реконструктивна хірургія, ортопедія і роботичне протезування. Постраждалим не лише встановлюють протези, тут їх виготовлятють",
      title: null,
      photo: () => <Photo src={Unbroken} />,
      subDescription: "Лікуємо, протезуємо та реабілітуємо українців в Україні",
    },
  ],
};
