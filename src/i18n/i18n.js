// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Ресурсы перевода
const resources = {
  en: {
    translation: {
      welcome: 'Welcome',
      hello: 'Hello',
      myProfile: 'My profile',
      fullname: 'Full Name',
      email: 'Email',
      password: 'Password',
      editProfile: 'Edit Profile',
      createReview: 'Create a review',
      myReviews: 'My reviews',
      dataOfREgProf: 'Account registration date',
      logOut: 'Log out of your account',
      save: 'Save',
      cancel: 'Cancel',
      urlImg: 'Paste the URL of the image to update your avatar',
      anotherImg: 'upload an alternative image if the photo cannot be uploaded',
      search: 'Search...',
      category: 'Category:',
      book: 'BOOK',
      books: 'Books',
      game: 'GAME',
      games: 'Games',
      film: 'FILM',
      films: 'Films',
      writeReview: 'Write a review',
      downloadImg: 'Download IMG',
      delete: 'delete',
      heading: 'Heading',
      content: 'Content',
      estimation: 'Estimation:',
      publish: 'Publish',
      login: 'Login',
      singIn: 'SingIn',
      mainPage: 'Main Page',
      top: 'TOP',
      new: 'new',
      popular: 'popular',
      failedLog: 'Failed to log in!',
      failedSing: 'Failed to register!',
      exitUserProf: 'Do you really want to get out?',
      errorUploadUserProf: 'Error updating profile:',
      errorPostUpload: 'Error updating the article:',
      deleteArticle: 'Do you really want to delete the article?',
    },
  },
  ru: {
    translation: {
      welcome: 'Добро пожаловать',
      hello: 'Привет',
      myProfile: 'Мой профиль',
      fullname: 'Полное имя',
      email: 'Почтовый адрес',
      password: 'Пароль',
      editProfile: 'Редактировать профиль',
      createReview: 'Создать рецензию',
      myReviews: 'Мои рецензии',
      dataOfREgProf: 'Дата регистрации профиля',
      logOut: 'Выйти из вашего аккаунта',
      save: 'Сохранить',
      cancel: 'Отмена',
      urlImg: 'Вставьте URL изображения для обновления своей аватарки',
      anotherImg: 'загрузите альтернативное изображение, если фото не может быть загружено',
      search: 'Поиск...',
      category: 'Категория:',
      book: 'КНИГА',
      books: 'Книги',
      games: 'Игры',
      game: 'ИГРА',
      films: 'Фильмы',
      film: 'ФИЛЬМ',
      writeReview: 'Написать отзыв',
      downloadImg: 'Загрузить картинку',
      delete: 'удалить',
      heading: 'Заголовок',
      content: 'Содержание',
      estimation: 'Оценка:',
      publish: 'опубликовать',
      login: 'Войти',
      singIn: 'Регистрация',
      mainPage: 'На главную',
      top: 'ТОП',
      new: 'новинки',
      popular: 'популярное',
      failedLog: 'Не удалось авторизоваться!',
      failedSing: 'Не удалось зарегистрироваться!',
      exitUserProf: 'Вы действительно хотите выйти?',
      errorUploadUserProf: 'Ошибка при обновлении профиля:',
      errorPostUpload: 'Ошибка при обновлении статьи:',
      deleteArticle: 'Вы действительно хотите удалить статью?',
    },
  },
  uz: {
    translation: {
      welcome: 'Xush kelibsiz',
      hello: 'Salom',
      myProfile: 'Mening profilim',
      fullname: "To'liq ism",
      email: 'Pochta manzili',
      password: 'Parol',
      editProfile: 'Profilni tahrirlash',
      createReview: 'Sharh yarating',
      myReviews: 'Mening sharhlarim',
      dataOfREgProf: "Profilni ro'yxatdan o'tkazish sanasi",
      logOut: 'Hisobingizdan chiqing',
      save: 'Saqlash',
      cancel: 'Bekor qilish',
      urlImg: 'Avataringizni yangilash uchun rasm URL manzilini joylashtiring',
      anotherImg: "agar fotosuratni yuklash mumkin bo'lmasa, muqobil rasmni yuklang",
      search: 'Qidiruv...',
      category: 'Kategoriya:',
      book: 'Kitob',
      books: 'Kitoblar',
      games: "O'yinlar",
      game: "O'yin",
      films: 'Filmlar',
      film: 'Film',
      writeReview: 'Sharh yozing',
      downloadImg: 'Rasmni yuklang',
      delete: "o'chirish",
      heading: 'Sarlavha',
      content: 'Tarkibi',
      estimation: 'Baholash:',
      publish: "nashr qilish",
      login: 'Kirish',
      singIn: "Ro'yxatdan o'tish",
      mainPage: 'Asosiy',
      top: 'TOP',
      new: 'yangiliklar',
      popular: 'ommabop',
      failedLog: 'Tizimga kira olmadi!',
      failedSing: "Ro'yxatdan o'tish mumkin emas!",
      exitUserProf: 'Siz haqiqatan ham chiqishni xohlaysizmi?',
      errorUploadUserProf: 'Profilni yangilashda xato:',
      errorPostUpload: 'Maqolani yangilashda xato:',
      deleteArticle: "Siz haqiqatan ham maqolani o'chirishni xohlaysizmi?",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Установите начальный язык
  fallbackLng: 'en', // Язык, используемый в случае отсутствия перевода
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
