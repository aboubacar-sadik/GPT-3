import coloredHtmlIcon from './assets/html5-colored.svg'
import coloredCssIcon from './assets/css3-colored.svg'
import coloredJavascriptIcon from './assets/javascript-colored.svg'
import coloredReactIcon from './assets/react-colored.svg'
import coloredFigmaIcon from './assets/figma-colored.svg'
import coloredIllustratorIcon from './assets/illustrator-colored.svg'
import profileImage from './assets/profil.jpg'
import portfolioWebsiteImg from './assets/img/portfolio.png'
import phoneFormIcon from './assets/call.svg'
import emailFormIcon from './assets/envelope.svg'

export default {
    navlinks: [
        {
            linkText: 'A Propos',
            link: '/#about'
        },
        {
            linkText: 'Compétences',
            link: '/#skills'
        },
        {
            linkText: 'Projets',
            link: '/#projects'
        },
        {
            linkText: 'Contact',
            link: '/#contact'
        },
    ],

    aboutItems: {
        sectionTitle: 'QUI SUIS-JE ?',
        profilImage: profileImage,
        description: "Je suis Aboubacar Sadik, développeur Front-End React junior avec une passion pour la création d'applications web dynamiques et engageantes. Avec un sens aigu du détail et un amour pour le code propre et fonctionnel, je m'engage à fournir des produits de haute qualité qui répondent aux besoins des utilisateurs et dépassent les attentes.Toujours désireux d'acquérir de nouvelles compétences et de rester au courant des dernières tendances en matière de développement web. En dehors du travail, j'aime jouer au football et faire partie d'une équipe. Les compétences que j'ai acquises sur le terrain, telles que le travail d'équipe, le leadership et la persévérance, m'ont aidé à devenir un développeur plus efficace. Dans l'ensemble, je suis une personne dévouée et motivée qui s'engage à fournir des résultats exceptionnels. Je suis enthousiaste à l'idée de poursuivre mon parcours en tant que développeur front-end et de contribuer à des<br> projets innovants qui ont un impact positif sur les utilisateurs."
    },
    skillsItems: {
        sectionTitle: 'Compétences',
        skills: [
            {
                skillIcon: coloredHtmlIcon,
                skillName: 'HTML5',
                altText: 'Icone HTML5',
                class: 'html_skill'
            },
            {
                skillIcon: coloredCssIcon,
                skillName: 'CSS3',
                altText: 'Icone CSS3',
            },
            {
                skillIcon: coloredJavascriptIcon,
                skillName: 'JavaScript',
                altText: 'Icone JavaScript',
            },
            {
                skillIcon: coloredReactIcon,
                skillName: 'React',
                altText: 'Icone React',
            },
            {
                skillIcon: coloredFigmaIcon,
                skillName: 'Figma',
                altText: 'Icone Figma'
            },
            {
                skillIcon: coloredIllustratorIcon,
                skillName: 'Illustrator',
                altText: 'Icone Illustrator'
            },
        ]
    },
    projectsItems: {
        sectionTitle: 'Projets',
        projects: [
            {
                projectImage: portfolioWebsiteImg,
                projectTitle: 'Portfolio - Aboubacar Sadik',
                projectDescription: `Page d'offres d'emploi où les utilisateurs doivent pouvoir : visualiser la mise en page optimale du site en fonction de la taille de l'écran de leur appareil, voir les états de survol de tous les éléments interactifs de la page, filtrer les offres d'emploi en fonction des catégories.`,
                tools: ['HTML5', 'CSS3', 'React'],
                sourceCodeLink: 'https://github.com/aboubacar-sadik/portfolio-2.0',
                demoLink: '',
            },
            {
                projectImage: profileImage,
                projectTitle: 'JobHunter - Job Listiing',
                projectDescription: `Page d'offres d'emploi où les utilisateurs doivent pouvoir : visualiser la mise en page optimale du site en fonction de la taille de l'écran de leur appareil, voir les états de survol de tous les éléments interactifs de la page, filtrer les offres d'emploi en fonction des catégories.`,
                tools: ['HTML5', 'CSS3', 'React'],
                sourceCodeLink: 'testlink.com',
                demoLink: 'git.com',
            },
        ]
    },
    contactItems: {
        sectionTitle: 'Faisons connaissance !',
        socials: [
            {
                socialFormIcon: phoneFormIcon,
                altText: `Icône d'appel téléphonique`,
                socialFormTitle: 'Téléphone',
                socialFormText: '+213 559 41 38 91',
                linkTo: "tel:+213559413891"
            },
            {
                socialFormIcon: emailFormIcon,
                altText: `Icône d'enveloppe`,
                socialFormTitle: 'E-mail',
                socialFormText: 'boube.sadik@gmail.com',
                linkTo: "mailto:boube.sadik@gmail.com"
            },
        ],
    }
}