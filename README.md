##Базовые принципы и правила работы с проектом.
---

**Скачать проект**

git clone https://ВАШ_НИКНЕЙМ@bitbucket.org/akswift/НАЗВАНИЕ_ПРОЕКТА.git


**Статья по работе с git (bitbucket).**

http://s-engineer.ru/pamyatka-po-rabote-s-git-bitbucket/

**Порядок работы, читать ниже...**


##Структура файлов
---


/www  ---   Корневая папка самого проекта.    
/www/css  ---   Файл который формируется Gulp (style.css)          
/www/fonts  ---  Шрифты               
/www/img  ---  Изображения           
/www/js  ---  JavaScript файлы. (script.js, jquery.js...)  
/www/scss/blocks  ---  Верстка блоков станицы\страниц (сложных блоков, или повторяющиеся блоков)                    
/www/scss/core/fonts.scss  ---  Подключение шрифтов    
/www/scss/blocks/footer.scss  ---  Верстка футера   
/www/scss/blocks/header.scss  ---  Верстка хеадера   
/www/scss/core/mixins.scss  ---  Переменные  
/www/scss/core/normalize.scss  ---  Сброс стилей.    
/www/scss/core/core.scss  ---  css Ядро сайта (контейнеры, общие стили)
/www/pages  ---  Вестка страниц. Если странца не большая (к примеру текстовая) то верстка идет не по блокам а по страницам.                          
/www/pages/contacts.scss  ---  Вестка страници контакты.                                            
/www/scss/style.scss   ---  Файл который подключает все стили.           
.gitignore --- Файлы Git (исключение)           
gulpfile.js --- Файлы Gulp                 
package.json ---  Файлы Gulp         
README.md --- Файл который ты сейчас читаешь)                
---
.gitignore (основные файлы)

.bowerrc --- Файлы Gulp              
npm --- Файлы Gulp    
package-lock.json --- Файлы Gulp                                
node_modules   --- Файлы Gulp        
build   --- Файлы Финального сборщика                        
.idea --- Файлы PhpStorm                               
www/css/style.css --- Убран для исключения конфликтов.
---
**Gulp/npm**        
       
Команды:            

npm i   --- Установка пакетов. Для этой команды требуется Node.js + gulpfile.js + package.json     
     
gulp --- Запуск Gulp'а

---

**Подсказки и рекомендации**

1. Приучайте себя к БЭМ. --- https://ru.bem.info/methodology/
2. Не спользуйте БЭМ в content блоке, при верстки для CMS. (Читайте ниже.)
3. 

---

**WordPress content**                                

(in progress)

---
**Пожелания и предложения**       
           
Все пожелания и продложения можете сделать в отдельной вертке стартовой страници проекта.               
https://bitbucket.org/akswift/flowpage/src/master/

---
**Порядок работы** 

![Image alt](https://akswift.pro/bitbucket/clone.png)

- После установления гита,в консоли задаем свое имя и  e-mail, с помощью команды:                               
git config --global user.name "FIRST_NAME LAST_NAME"                                  
git config --global user.email "MY_NAME@example.com"

- Присоединившись и зайдя в репозиторий, вам нужно клонировать файлы в выбранную локальную директорию, с помощью команды,которая будет закреплена за вами в репозиторие

![Image alt](https://akswift.pro/bitbucket/1.png)

![Image alt](https://akswift.pro/bitbucket/2.png)

- После успешного скачивания,в указанной локальной директории появяться файлы последней версии ветки master,тоесть основной.

- После внесения изменений,следует прописать git add имя_файла_в_котором_было_внесено_изменения,либо git add -A,
что бы внести все измененные файлы и удалить из наблюдения удаленные файлы

- После завершения написания какого либо логическокого блока следует его закоммитить, командой в терминал
git commit -m "ваш комментарий". В комментарии вы кратко описываете проделанную работу, например: "сверстал блок header".                          
Эти две команды git add и git commit выполняються локально у вас на пк,сначала вы добавляете командой git add все добавленные 
и изменненые файлы, которые в совокупности представляют какую либо логическую структуру, тот же header например. А потом фиксируете 
его командой git commit с комментарием.                                

![Image alt](https://akswift.pro/bitbucket/3.png)

![Image alt](https://akswift.pro/bitbucket/4.png)

- Если на проекте вы работаете один то, в момент завершения работы локально,скажем доверстали сайт например, вы можете отправить 
изменения в репозиторий,для этого используется команда git push,после чего вы вводите пароль от bitbucket и изменения загрузятся в ваш репозиторий.                                         
Вслучае если вы работатете в с командой на одном проекте,то после скачавание командой git clone файлов,вам нужно создать новую ветку командой git branch название_ветки.
В ней вы можете работать отдельно не боясь затереть и изменить основную ветку.Например если вам нужно внести какие либо изменения или дополнить его 

![Image alt](https://akswift.pro/bitbucket/7.png)

- Ввод git branch покажет текущую ветку.Для переключения ветки используется команда git checkout ветка

![Image alt](https://akswift.pro/bitbucket/5.png)
![Image alt](https://akswift.pro/bitbucket/6.png)

- Что бы загрузить ветку в репозиторий следует написать команду git push --set-upstream origin название_ветки

- После успешной загрузки ветки, создается пул реквест, лид проверяет и сливает вашу ветку с основной

![Image alt](https://akswift.pro/bitbucket/8.png)

- Каждый раз когда приступаете к работе, прописывайте команду git pull, для скачивания последних версий файлов,в репозитории
на случай если ваши коллеги уже внесли какие нибудь изменения.

- После завершения проекта, при необходимости закидываете файлы на сервер, создавая катлог с названием проекта

![Image alt](https://akswift.pro/bitbucket/9.png)

(autor Bogdan Mateta)

v.1.3
---