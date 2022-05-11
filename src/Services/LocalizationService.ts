import LocalizedStrings, { LocalizedStringsMethods } from "react-localization";

export let Strings = new LocalizedStrings(
	{
		en:
		{
			// App.tsx
			// Offline dialog
			offlineTitle: "Internet is required",
			offlineMessage: "Please check your internet connection. It is required for the demo to work",
			// Footer
			homepageLink: "Go to homepage",
			copyrightCaption: "All rights reserved",
			// Language switch
			langLabel: "Language: English",
			langAlt: "Русский",
			langHref: "/ru",

			// Start.tsx
			startTitle: "Welcome to EasyLogon demo!",

			startHeader: "Try out our QR authentication system!",
			startSubheader: "Throughout this demo you will go through three different scenarios of authentication on the the Internet",

			startFactsHeader: "Did you know that:",
			startFact1: "75% are frustrated trying to keep track of their passwords",
			startFact2: "66% use the same password for more than one online account",
			startFact3: "59% of users have incorporated a name or a birthday into their password to an online account",
			startFact4: "24% have used common passwords, or some variation (abc123, qwerty, password, etc.)",
			startFact5: "17% have tried to guess someones password and succeeded",
			startFact6: "40% have reported their personal information to be compromised",
			startFactOfThem: "Of them:",
			startFact7: "Only 15% use a password manager",
			startFact8: "63% don't use two-factor authentication",
			startFact9: "66% don't change their passwords regularly",
			startFactsSource: "Datasource",

			startPrereqHeader: "Prerequisites",
			startPrereq1TitleP1: "1. Download",
			startPrereq1TitleP2: "EasyLogon app",
			startPrereq1TitleP3: "to your phone",
			startPrereq1CaptionP1: "You will need to have an",
			startPrereq1CaptionP2: "smartphone with a camera",
			startPrereq2Title: "2. Memorize these credentials",
			startPrereq2Caption: "Take your time to remember these login and password. You will need them later",
			startPrereqLogin: "Login",
			startPrereqPassword: "Password",
			startPrereqStart: "Let's start!",

			// Sandbox.tsx
			sandbox: "Sandbox",
			sandboxStartHeader: "Try to complete the test as soon as you can",
			sandboxStartSubheader: "Please read instructions before clicking \"Start\"",
			sandboxStart: "Start",

			// Sandbox common
			sandboxLoginHeader: "Sign into AwesomeSite",
			sandboxEmail: "Email",
			sandboxPassword: "Password",
			sandboxLogin: "Sign in",
			sandboxLoginError: "Invalid login",
			sandboxPasswordError: "Invalid password",
			sandboxEmptyField: "This field is required",

			sandboxFinishHeader: "Great job!",
			sandboxFinishNext: "Next",

			// Scenario common
			scenarioObjective: "Objective",
			scenarioSteps: "Steps",
			scenarioStep1: "Click \"Start\" when you are ready",

			// ScenarioOne.tsx
			scenario1Header: "Scenario 1: Do as grandpa taught",
			scenario1Objective: "Try to sign in as you usually do: by typing in login and password",

			scenario1description1: "Usually, we have passwords saved in our browsers but from time to time we still come to a situation where our beloved autofill is missing (we're in computer lab, in conference room and need that presentation saved in the cloud ASAP). In this case we have to rely on our memory or just come up with a simple password which puts our priceless personal information under the risk",
			scenario1description2: "Here we have recreated the situation: no autofill, just your memory or your notebook",
			scenario1description3: "Password used here is considered to be invulnerable (15 characters, upper/lowercase letters, digits, special symbols). As all passwords should be",

			scenario1step2: "Recall login and password shown at the start (click \"Forgot password?\" to get a hint)",
			scenario1step3: "Type in credentials",
			scenario1step4: "Click \"Sign in\"",
			scenario1step5: "No copypasting ;)",

			// SandboxOne.tsx
			sandbox1forgotPassword: "Forgot password?",

			// ScenarioTwo.tsx
			scenario2Header: "Scenario 2: Anytime, anywhere",
			scenario2Objective: "Try to sign in with QR code",

			scenario2description1: "It wasn't that easy, was it? Now imagine that you have to remember 50 or 100 of such passwords. Holy smokes, right?",
			scenario2description2: "But there's another way. You can use strong unique passwords without having to remember them any time on any device. Even there, where regular password managers aren't available",
			scenario2description3: "EasyLogon offers you a brand new password manager that can deliver any of your credentials to any device within a few seconds. And it already works with all websites on the Internet. Let's try this out",

			scenario2step2: "Open https://ezlog.app website in a new tab",
			scenario2step3: "Scan the QR code with EasyLogon app",
			scenario2step4: "Swipe right or left \"EasyLogon Demo\" credentials",
			scenario2step5: "Copy/paste login and password values here",
			scenario2step6: "Click \"Sign in\"",

			// SandboxTwo.tsx
			sandbox2hint: "Hint: open https://ezlog.app in a new tab",

			// ScenarioThree.tsx
			scenario3Header: "Scenario 3: Click, scan, done",
			scenario3Objective: "Sign in with QR code again but faster",

			scenario3description1: "See the difference? But that's not all! We've prepared a special tool that allows to add QR code sign in on any website within a few minutes! With this tool installed, you are able to sign on such websites within a few clicks!",
			scenario3description2: "So if you are a web developer (or even a software developer), you can make your users' experience and security better in less than 30 minutes",
			scenario3description3: "In a meantime, let's see how it works",

			scenario3step2: "Click \"Sign in with QR code\" button",
			scenario3step3: "Scan the QR code with EasyLogon app",
			scenario3step4: "Swipe right or left \"EasyLogon Demo\" credentials",

			// Results.tsx
			results: "Results",
			scenario: "Scenario",
			tryAgain: "Try again",
			learnMore: "Learn more about EasyLogon for developers",
			resultsTitle: "Quite impressive, isn't it?",
			resultsHeader: "Start using EasyLogon now!",
			resultsSubheader: "And forget about passwords. This time for real!",
			resultsUserHeader: "Advantages for users:",
			resultsUser1: "No need to remember passwords anymore",
			resultsUser2: "One app - countless services",
			resultsUser3: "Password manager + Authenticator - maximum protection for your data",
			resultsUser4: "You can now use complex passwords everywhere",
			resultsDevHeader: "Advantages for developers:",
			resultsDev1: "QR code authentication for your users",
			resultsDev2: "Encourage users to use complex passwords",
			resultsDev3: "10 minutes to get started",
			resultsUserHeader2: "For users",
			resultsDevHeader2: "For web developers",
			userResultP1: "You can save up to",
			userResultP2: "of your time",
			userResultP3: "with EasyLogon when signing in on the Internet",
			userResultAlt1: "Looks like you have a good skill at memorizing and typing in complex passwords! Great job!",
			userResultAlt2: "Though imagine that you have to memorize 50 such passwords or 100. Will you able to handle this?",
			devResultP1: "You can save up to",
			devResultP2: "of your users' time",
			devResultP3: "with EasyLogon when signing in on your websites",
		},
		ru:
		{
			// App.tsx
			// Offline dialog
			offlineTitle: "Отсутствует подключение к Интернету",
			offlineMessage: "Пожалуйста, проверьте интернет-соединение. Оно необходимо для работы демонстрации",
			// Footer
			homepageLink: "Домашняя страница",
			copyrightCaption: "Все права защищены",
			// Language switch
			langLabel: "Язык: Русский",
			langAlt: "English",
			langHref: "/en",

			// Start.tsx
			startTitle: "Добро пожаловать на демо EasyLogon!",

			startHeader: "Испытайте нашу систему аутентификации через QR код!",
			startSubheader: "В данной демонстрации вы пройдете через три разные сценария аутентификации в Интернете",

			startFactsHeader: "Знаете ли вы, что",
			startFact1: "75% испытывают проблемы с управлением паролями",
			startFact2: "66% используют один и тот же пароль для нескольких онлайн-аккаунтов",
			startFact3: "59% пользователей используют имя или день рождения как пароль для онлайн-аккаунтов",
			startFact4: "24% используют простые пароли, или их вариации (abc123, qwerty, password и т.д.)",
			startFact5: "17% пытались подобрать пароль другого пользователя и преуспели в этом",
			startFact6: "40% пользователей сообщили об утечке своих личных данных",
			startFactOfThem: "Из них:",
			startFact7: "Только 15% используюут менеджер паролей",
			startFact8: "63% не используют двухфакторную аутентификацию",
			startFact9: "66% редко обновляют пароли",
			startFactsSource: "Источник",

			startPrereqHeader: "Подготовка",
			startPrereq1TitleP1: "1. Скачайте",
			startPrereq1TitleP2: "приложение EasyLogon",
			startPrereq1TitleP3: "на ваш телефон",
			startPrereq1CaptionP1: "Вам понадобится смартфон на",
			startPrereq1CaptionP2: "с камерой",
			startPrereq2Title: "2. Запомните эти данные",
			startPrereq2Caption: "Пожалуйста, запомните эти логин и пароль. Они понадобятся вам в дальнейшем",
			startPrereqLogin: "Логин",
			startPrereqPassword: "Пароль",
			startPrereqStart: "Начнем!",

			// Sandbox.tsx
			sandbox: "Песочница",
			sandboxStartHeader: "Постарайтесь завершить задание как можно быстрее",
			sandboxStartSubheader: "Пожалуйста, прочитайте инструкцию перед началом",
			sandboxStart: "Начать",

			// Sandbox common
			sandboxLoginHeader: "Войдите в личный кабинет",
			sandboxEmail: "Email",
			sandboxPassword: "Пароль",
			sandboxLogin: "Войти",
			sandboxLoginError: "Неправильный логин",
			sandboxPasswordError: "Неправильный пароль",
			sandboxEmptyField: "Это поле не должно быть пустым",

			sandboxFinishHeader: "Отличная работа!",
			sandboxFinishNext: "Далее",

			// Scenario common
			scenarioObjective: "Задача",
			scenarioSteps: "Шаги",
			scenarioStep1: "Нажмите \"Начать\", когда будете готовы",

			// ScenarioOne.tsx
			scenario1Header: "Сценарий 1: Делай как отцы завещали",
			scenario1Objective: "Попробуйте войти в аккаунт как обычно: вручную введя логин и пароль в нужные поля",

			scenario1description1: "Обычно, мы храним наши пароли в браузере. Это удобно. Но время от времени мы все равно оказываемся в ситуации, когда наше любимое автозаполнение отсутствует (мы находимся в кабинете информатики, или в коференц-зале и нам очень срочно нужна та презентация, которую мы забыли в облаке). В таких случаях нам приходится полагаться на нашу память. Либо использовать слабый простой для запоминания пароль. Но тогда надо быть готовым ко вломам и утечкам данных",
			scenario1description2: "Здесь мы воссоздали такую ситуацию: автозаполнения нет, только ваша память",
			scenario1description3: "Пароль, который здесь используется, считается безопасным (15 символов, нижний/верхний регистр, цифры, специальные символы). Такой, какими все пароли должны быть",

			scenario1step2: "Вспомните логин и пароль, показанные в начале (нажмите \"Забыли пароль?\", чтобы получить подсказку)",
			scenario1step3: "Введите логин и пароль",
			scenario1step4: "Нажмите \"Войти\"",
			scenario1step5: "Без Ctrl-C/Ctrl-V ;)",

			// SandboxOne.tsx
			sandbox1forgotPassword: "Забыли пароль?",

			// ScenarioTwo.tsx
			scenario2Header: "Сценарий 2: Когда угодно, где угодно",
			scenario2Objective: "Войдите в аккаунт через QR-код",

			scenario2description1: "Не так уж и просто, да? А теперь представьте, что вам нужно запоминить 100 таких паролей для каждого сервиса. Неприятненько, да?",
			scenario2description2: "Но есть другой способ. Вы можете использовать сложные уникальные пароли в любое время на любом устройстве, без необходимости их запоминать. Даже там, где обычные менеджеры паролей недоступны",
			scenario2description3: "EasyLogon предлагает вам совершенно новый менеджер паролей, который может доставить ваши учетные данные для входа на любом устройстве за считанные секунды. И он уже работает со всеми вебсайтами в Интернете! Давайте взглянем",

			scenario2step2: "Откройте вебсайт https://ezlog.app в новой вкладке",
			scenario2step3: "Отсканируйте QR-код с помощью приложения EasyLogon",
			scenario2step4: "Смахните вправо/влево учетные данные \"EasyLogon Demo\"",
			scenario2step5: "Скопируйте и вставьте полученные логин и пароль сюда",
			scenario2step6: "Нажмите \"Войти\"",

			// SandboxTwo.tsx
			sandbox2hint: "Подсказка: откройте https://ezlog.app в новой вкладке",

			// ScenarioThree.tsx
			scenario3Header: "Сценарий 3: Нажать, отсканировать, готово",
			scenario3Objective: "Войдите в аккаунт через QR-код еще раз",

			scenario3description1: "Чуствуете разницу? Но это еще не все! Мы подготовили специальный инструмент, который позволяет добавить вход через QR-код на любой сайт за считанные минуты! И на таких вебсайтах пользователи смогут входить в свой аккаунт всего в пару кликов!",
			scenario3description2: "Так что если вы - веб-разработчик (или даже разработчик ПО), вы можете сделать пользовательскй опыт и безопасность лучше менее чем за 30 минут",
			scenario3description3: "А между тем, давайте взглянем на то, как это работает",

			scenario3step2: "Нажмите кнопку \"Sign in with QR code\"",
			scenario3step3: "Отсканируйте QR-код с помощью приложения EasyLogon",
			scenario3step4: "Смахните вправо/влево учетные данные \"EasyLogon Demo\"",

			// Results.tsx
			results: "Результаты",
			scenario: "Сценарий",
			tryAgain: "Попробовать еще раз",
			learnMore: "Узнать больше об EasyLogon для разработчиков",
			resultsTitle: "Впечатляет, не правда ли?",
			resultsHeader: "Начните использовать EasyLogon уже сейчас!",
			resultsSubheader: "И забудьте о паролях. На этот раз по настоящему!",
			resultsUserHeader: "Плюсы для пользователей:",
			resultsUser1: "Больше не надо запоминать пароли",
			resultsUser2: "Одно приложение - множество сервисов",
			resultsUser3: "Менеджер паролей + Аутентификатор - максимальная защита для ваших данных",
			resultsUser4: "Теперь вы можете использовать сложные пароли повсюду",
			resultsDevHeader: "Плюсы для разработчиков:",
			resultsDev1: "Аутентификация через QR-код для ваших пользователей",
			resultsDev2: "Побудите пользователей использовать сложные пароли",
			resultsDev3: "10 минут для настройки",
			resultsUserHeader2: "Для пользователей",
			resultsDevHeader2: "Для веб-разработчиков",
			userResultP1: "Вы можете сохранить до",
			userResultP2: "вашего времени",
			userResultP3: "с EasyLogon при входе в аккаунты в Интернете",
			userResultAlt1: "Похоже, что у вас есть способности к запоминианию сложных паролей и быстрой печати! Это круто!",
			userResultAlt2: "Но все же представьте, что вам нужно запомнить 50 таких паролей или 100. Сможете справиться?",
			devResultP1: "Вы можете сохранить до",
			devResultP2: "времени ваших пользователей",
			devResultP3: "с EasyLogon при входе в аккаунт на ваших веб-сайтах",
		}
	}
);