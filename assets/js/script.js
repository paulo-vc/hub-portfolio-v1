const translations = {
    'pt': {
        'nav-home': 'Início',
        'nav-projects': 'Projetos',
        'nav-video': 'Edição',
        'nav-contact': 'Contato',
        'profile-quote': '"The fallen leaves tell a story"',
        'stack-languages': 'Linguagens:',
        'stack-dev': 'Ferramentas Dev:',
        'stack-front': 'Front-End:',
        'stack-other': 'Game Dev e Edição:',
        'btn-read': 'Sobre mim',
        'btn-less': 'Ver menos',
        'about-p1': 'Olá! Eu sou o Paulo, um programador e editor de vídeos brasileiro. Comecei a me interessar pelo mundo tech quando era pequeno. Ganhei um notebook de aniversário e passava horas na frente dele, jogando e aprendendo.\nCom o passar do tempo, vi a necessidade de ter meu próprio computador, então tive que aprender na prática como montar todas as peças, e foi assim que adquiri bastante conhecimento sobre hardware.\nPor gostar muito de jogos, tive aquela fase que muitas crianças têm de querer se tornar youtuber, então precisei correr atrás de aprender como editar um vídeo para a plataforma. Acabei não seguindo por esse caminho, apesar de ainda ter interesse em criar conteúdo para a internet hoje em dia, mas continuei praticando edição de vídeos ao longo do tempo.',
        'about-p2': 'Atualmente estou com 22 anos e, depois de todo esse apreço pela tecnologia que fui criando desde pequeno e ao longo da adolescência, pensei: "a melhor opção só pode ser uma faculdade de Computação, certo?"\nEntão agora faço Engenharia da Computação na UEMG. Futuramente também tenho bastante interesse em fazer um curso de Jogos Digitais, mas, por enquanto, meu foco é terminar meu curso atual.\nEnfim, sou bastante interessado em programação e game dev e estou me esforçando para me tornar um bom profissional.',
        'projects-title': 'Meus Projetos',
        'project-1-title': 'Sistema de Busca Vetorial em C#',
        'project-1-desc': 'Este sistema foi feito em C# no Visual Studio 2022 usando a interface do Windows Forms App (.NET) e tem a função de buscar produtos utilizando um modelo de busca vetorial, baseado no cálculo de similaridade de textos (TF-IDF).',
        'project-2-title': 'Jogo de corrida',
        'project-2-desc': 'Um jogo de corrida feito no Gamemaker usando assets prontos de um curso. Feito com propósito de aprendizado. (O jogo se encontra quebrado atualmente, não é possível morrer.)',
        'project-3-title': 'Jogo Arkanoid',
        'project-3-desc': 'Um jogo Arkanoid feito no Gamemaker. Feito com propósito de aprendizado.',
        'video-title': 'Edição de Vídeo',
        'video-desc': 'Alguns vídeos que fiz como projeto para um servidor de Minecraft!',
        'contact-desc': 'Sinta-se à vontade para entrar em contato comigo para oportunidades profissionais ou apenas para conversar!',
        'contact-social': 'Redes Sociais',
        'footer-copy': '© 2026 Paulo Vinicius - Todos os direitos reservados'
    },
    'en': {
        'nav-home': 'Home',
        'nav-projects': 'Projects',
        'nav-video': 'Editing',
        'nav-contact': 'Contact',
        'profile-quote': '"The fallen leaves tell a story"',
        'stack-languages': 'Languages:',
        'stack-dev': 'Dev Tools:',
        'stack-front': 'Front-End:',
        'stack-other': 'Game Dev & Edit:',
        'btn-read': 'About me',
        'btn-less': 'Show less',
        'about-p1': 'Hello! I am Paulo, a Brazilian programmer and video editor. I became interested in the tech world when I was young. I received a notebook as a birthday gift and spent hours in front of it, playing and learning.\nOver time, I realized the need to have my own computer, so I had to learn in practice how to assemble all the parts, and that is how I gained a lot of knowledge about hardware.\nBecause I really enjoy games, I went through that phase many kids have of wanting to become a YouTuber, so I had to learn how to edit videos for the platform. I ended up not pursuing that path, although I still have an interest in creating content for the internet nowadays, but I continued practicing video editing over time.',
        'about-p2': 'I am currently 22 years old and, after all this appreciation for technology that I have been building since I was a child and throughout my adolescence, I thought: "the best option can only be a Computer Engineering degree, right?"\nSo now I study Computer Engineering at UEMG. In the future, I am also very interested in taking a Digital Games course, but for now, my focus is on finishing my current degree.\nAnyway, I am very interested in programming and game dev and I am striving to become a good professional.',
        'projects-title': 'My Projects',
        'project-1-title': 'Vector Search System in C#',
        'project-1-desc': 'This system was developed in C# using Visual Studio 2022 and Windows Forms App (.NET). It searches for products using a vector search model based on text similarity calculations (TF-IDF).',
        'project-2-title': 'Racing Game',
        'project-2-desc': 'A racing game made in Gamemaker using assets from a course. Created for learning purposes. (The game is currently broken; you cannot die.)',
        'project-3-title': 'Arkanoid Game',
        'project-3-desc': 'An Arkanoid game developed in Gamemaker. Created for learning purposes.',
        'video-title': 'Video Editing',
        'video-desc': 'Some videos I made as a project for a Minecraft server!',
        'contact-desc': 'Feel free to contact me for professional opportunities or just to chat!',
        'contact-social': 'Social Media',
        'footer-copy': '© 2026 Paulo Vinicius - All rights reserved'
    }
};

let currentLang = 'pt';

function changeTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(s => {
        s.classList.remove('active');
        s.style.display = 'none';
    });
    const active = document.getElementById(tabId);
    if (active) {
        active.classList.add('active');
        active.style.display = 'flex';
    }
}

function toggleAboutMe() {
    const box = document.querySelector('.profile-aboutme');
    const btn = document.querySelector('.btn-read-more');
    box.classList.toggle('active');

    if (box.classList.contains('active')) {
        btn.innerText = currentLang === 'pt' ? 'Ver menos' : 'Show less';
    } else {
        btn.innerText = currentLang === 'pt' ? 'Sobre mim' : 'About me';
    }
}

function toggleLang() {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    document.querySelector('.lang-selector button').innerText = currentLang === 'pt' ? 'PT | EN' : 'EN | PT';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerText = translations[currentLang][key];
        }
    });

    // atualizar o sobre mim se tiver fechado/aberto
    const box = document.querySelector('.profile-aboutme');
    const btn = document.querySelector('.btn-read-more');
    if (box.classList.contains('active')) {
        btn.innerText = currentLang === 'pt' ? 'Ver menos' : 'Show less';
    } else {
        btn.innerText = currentLang === 'pt' ? 'Sobre mim' : 'About me';
    }
}