import { LinkedinLogo, GithubLogo, InstagramLogo } from "@phosphor-icons/react";

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center bg-black text-white p-2 gap-1 w-screen">
      <h1 className="text-lg font-semibold">Farmácia do Góes | Copyright: 2024</h1>
      <p className="text-white">Acesse minhas sociais</p>
      <div className="flex gap-4">
        <a href="https://www.linkedin.com/in/guilherme-g-silva-98aba4284/" target="_blank" rel="noopener noreferrer">
          <LinkedinLogo size={40} weight="bold" className="text-white" />
        </a>
        <a href="https://github.com/thegoes" target="_blank" rel="noopener noreferrer">
          <GithubLogo size={40} weight="bold" className="text-white" />
        </a>
        <a href="www.instagram.com/thegoes_" target="_blank" rel="noopener noreferrer">
          <InstagramLogo size={40} weight="bold" className="text-white" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
