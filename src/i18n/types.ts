export interface Dictionary {
  nav: {
    home: string;
    about: string;
    projects: string;
    stats: string;
    contact: string;
    openMenu: string;
    sound: string;
    muted: string;
    theme: string;
    muteSounds: string;
    enableSounds: string;
    changeTheme: string;
    lightMode: string;
    darkMode: string;
  };
  hero: {
    myProjects: string;
    projects: string;
    explainedWith: string;
    design: string;
    viewProject: string;
    goToProject: string;
    underConstruction: string;
    goToProjectN: string;
    projectSubtitles: Record<number, string>;
    projectTitles: Record<number, string>;
  };
  presentation: {
    education: string;
    experience: string;
    daw: string;
    university: string;
    cadiz: string;
    englishB2: string;
    officialCert: string;
    fullStackDev: string;
    currentJob: string;
    commManager: string;
    communications: string;
    ecommerce: string;
    internship: string;
    infrastructure: string;
    downloadCV: string;
    scroll: string;
  };
  projectLabels: {
    project: string;
    completed: string;
    inDevelopment: string;
    objectives: string;
    viewCode: string;
    liveDemo: string;
    backToTop: string;
    scroll: string;
  };
  contactSection: {
    thankYou: string;
    contact: string;
    email: string;
    phone: string;
    cv: string;
    downloadCV: string;
    thankYouBottom: string;
    designQuote: string;
    emailTip: string;
  };
  footer: {
    fullStackDev: string;
    allRights: string;
    madeWith: string;
    inNextjs: string;
    backToTop: string;
  };
  emailModal: {
    newMessage: string;
    close: string;
    to: string;
    recipient: string;
    ccBcc: string;
    cc: string;
    bcc: string;
    subject: string;
    defaultSubject: string;
    defaultMessage: string;
    writePlaceholder: string;
    send: string;
    attachFile: string;
    insertLink: string;
    insertEmoji: string;
    insertImage: string;
    moreOptions: string;
  };
  robot: {
    hireMe: string;
    close: string;
  };
  introSplash: {
    scrollDown: string;
  };
  about: {
    title: string;
  };
  contactPage: {
    title: string;
  };
  notFound: {
    error404: string;
    messages: string[];
    goBack: string;
    goHome: string;
    errorCode: string;
    pageNotFound: string;
  };
  footerEmail: {
    subject: string;
    body: string;
  };
}
