import { Link } from "react-router-dom";
import ProjetTypes from "../compoment/ProjetType";
import ConnexionButton from "../compoment/ConnexionButton";
import { useContext } from "react";
import { ProphilUser } from "../App";

export default function Home() {
    const user = useContext(ProphilUser);
    return (
        <div className="grid place-content-center ">
            <div className="text-center md:text-start md:grid md:grid-cols-3 md:pl-20 pb-6 ">
                <div className="m-auto">
                    <h1 className="mt-32 mb-5 text-6xl leading-snug 2xl:text-9xl lg:text-8xl font-[title] font-black ">UTAMI <br />FUNDING </h1>
                    <p className="text-lg md:text-xl pb-10"> Bienvenue dans notre communauté de créateurs et d'ambitieux, où chaque projet est une histoire en devenir. À travers ce crowdfunding, nous vous invitons à plonger dans un univers d'innovation, de passion et de possibilités infinies.</p>
                </div>
                <img className="col-span-2 w-10/12 pt-10 m-auto" src="../src/assets/9689394.jpg" alt="" />
            </div>
            <div className="bg-[#FFDE77] ">
                <div className="px-8 pb-6 xl:w-11/12 2xl:w-9/12  md:m-auto md:my-24">
                    <div className=" border-black ">
                        <h2 className=" text-2xl mt-11 mb-7  md:text-6xl">Une plateforme, <br /> des nombreuse possibilité</h2>
                    </div>
                    <div className="md:grid md:grid-cols-3 md:gap-12">
                        <div className="border-t border-black py-8 leading-7 text-base ">
                            <h3><strong>Visibilité et marketing : </strong></h3>
                            <p >Le crowdfunding peut être un excellent moyen de générer de la visibilité pour votre projet. Vous pouvez atteindre un large public et attirer l'attention sur votre travail.</p>
                        </div>
                        <div className="border-t border-black py-8 leading-7 text-base ">
                            <h3><strong>Participer à des projets de recherche :</strong></h3>
                            <p >Vous pouvez contribuez à la progression de la science et de la recherche en finançant des projets innovants dans des nombreux domaines. </p>
                        </div>
                        <div className=" border-t border-black py-8 leading-7 text-base">
                            <h3><strong>Investir dans des startups prometteuses :</strong></h3>
                            <p>Découvrez des jeunes entreprises innovantes et investissez dans leur croissance et leur développement.</p>
                        </div>
                    </div>
                    <ConnexionButton user={user} />
                </div>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap py-6 w-11/12 xl:w-11/12 2xl:w-9/12  m-auto md:pt-20 md:pb-36">
                <div className="flex gap-4 h-auto m-auto ">
                    <div className="h-56 w-24 md:h-[500px] xl:w-36 2xl:w-44 bg-[url('https://i.pinimg.com/736x/a4/cd/f8/a4cdf8d0a8212bd89b00d69dcb2b01f4.jpg')]  rounded-lg bg-cover"></div>
                    <div className="h-56 w-28 md:h-[500px] xl:w-36 2xl:w-44 bg-[url('https://i.pinimg.com/736x/d4/71/01/d4710100274f9f9fd965cb5aab435dee.jpg')] md:mt-20 rounded-lg bg-cover"></div>
                    <div className="h-56 w-24 md:h-[500px] xl:w-36 2xl:w-44 bg-[url('https://i.pinimg.com/564x/1e/62/b7/1e62b7b3c374c6b15793d3863d165001.jpg')] rounded-lg bg-cover"></div>
                </div>
                <div className="px-2 md:px-20  m-auto ">
                    <h2 className=" text-5xl pb-7  md:text-6xl border-b border-black">Qui somme nous?</h2>
                    <ol className="list-disc space-y-6 pl-6 pt-6">
                        <li><strong>En tant que plateforme de crowdfunding, </strong>  nous sommes une équipe passionnée de professionnels de la finance, de la technologie et du marketing, dédiée à soutenir les créateurs et les entrepreneurs dans la concrétisation de leurs projets. Notre mission est de fournir un environnement sûr, transparent et accessible où les idées peuvent prendre vie et où les rêves peuvent devenir réalité.</li>
                        <li><strong>Nous croyons en l'importance de l'innovation, </strong>de la créativité et de l'entrepreneuriat pour façonner un avenir meilleur. C'est pourquoi nous nous engageons à fournir les outils, les ressources et le soutien nécessaires pour aider nos utilisateurs à réussir dans leurs initiatives. </li>
                        <li><strong>Que vous soyez un créateur cherchant à financer </strong> votre projet ou un contributeur souhaitant soutenir des idées novatrices, nous sommes là pour vous accompagner à chaque étape de votre parcours. Nous sommes fiers de faire partie d'une communauté mondiale de passionnés et d'innovateurs, et nous sommes impatients de voir les grandes réalisations qui émergeront de notre plateforme.</li>
                    </ol>
                </div>
            </div>
            <div className="bg-black">
                <div className="text-white px-8 py-6 lg:flex md:py-32 xl:w-11/12 2xl:w-10/12  md:m-auto">
                    <div className="md:border-r md:mr-10 xl:w-1/2">
                        <h2 className=" text-4xl mt-12  md:text-6xl md:pr-4">Découvrez une multitude de projets, prêts à être financés.</h2>
                        <div className="flex items-stretch underline underline-offset-8 my-12 hover:text-[#3563FF] ">
                            <Link to='/Explore'> Voir des projets </Link>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-3 self-center fill-white"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                        </div>
                    </div>
                    <div className="grid gap-10 xl:grid-cols-2">
                        <ProjetTypes type="Projet architectural" classe="bg-cover bg-[url('client/src/assets/8be8502369c21819b8bb0ad6a8b0afad.jpg')]" />
                        <ProjetTypes type="Projet agricole" classe="bg-[url('client/src/assets/bd5c4f3b2249a310be4dcf50644cbefe.jpg')]" />
                        <ProjetTypes type="Projet gastronomique" classe="bg-[url('client/src/assets/c53b881e891566634ff68349842b5d7c.jpg')]" />
                        <ProjetTypes type="Projet modelisme" classe="bg-[url('client/src/assets/a80f7343138d26af55ddc65c8ed70383.jpg')]" />
                    </div>
                </div>
            </div>
            <div className="px-8 py-20  ">
                <div className="xl:w-11/12 2xl:w-9/12  md:m-auto md:grid md:grid-cols-3 md:gap-6">
                    <div className=" md:border-none md:col-span-2">
                        <h2 className=" text-4xl mb-7 md:text-6xl">Sortons de l'anonyma</h2>
                    </div>
                    <div></div>
                    <div className="border-t border-black py-8 leading-7 text-base md:border-none md:text-xl">
                        <h3><strong>Créer une campagne percutante</strong></h3>
                        <p >Construisez une campagne de financement solide en mettant en avant votre projet de manière convaincante. Utilisez des images attrayantes et un texte accrocheur pour captiver l'attention des contributeurs potentiels.</p>
                    </div>
                    <div className="border-t border-black py-8 leading-7 text-base md:border-none md:text-xl">
                        <h3><strong>Communiquer efficacement </strong></h3>
                        <p >Utilisez tous les canaux de communication disponibles pour promouvoir votre campagne. Partagez-la sur les réseaux sociaux, et envoyez des e-mails personnalisés à vos contacts pour les inviter à soutenir votre projet.</p>
                    </div>
                    <div className="border-t border-black py-8 leading-7 text-base md:border-none md:text-xl">
                        <h3><strong>Impliquer votre communauté </strong></h3>
                        <p>Mobilisez vos amis, votre famille et vos connaissances pour soutenir votre campagne dès le début. Leur engagement initial peut encourager d'autres personnes à contribuer et aider à créer un effet boule de neige.</p>
                    </div>
                    <div className="border-t border-black py-8 leading-7 text-base md:border-none md:text-xl">
                        <h3><strong>Offrir des récompenses attractives</strong></h3>
                        <p >Proposez des récompenses intéressantes et attrayantes pour inciter les contributeurs à soutenir votre projet. Assurez-vous que les récompenses sont en lien avec votre projet et qu'elles offrent une valeur ajoutée à vos supporters.</p>
                    </div>
                    <div className="border-t border-black py-8 leading-7 text-base md:text-xl md:border-none">
                        <h3><strong>Mettre à jour régulièrement </strong></h3>
                        <p>Tenez vos contributeurs informés de l'avancement de votre projet en publiant des mises à jour régulières sur votre campagne. Partagez vos progrès, vos réussites et les défis que vous rencontrez pour maintenir l'engagement et la confiance.</p>
                    </div>
                    <div></div>
                    <ConnexionButton />
                </div>
            </div>

            <div className="bg-[#f3efe5] text-black px-8 py-6 leading-relaxed md:py-32">
                <h2 className=" text-4xl py-12 xl:w-11/12 2xl:w-9/12  md:m-auto md:text-6xl md:text-center ">Comment crée un projet </h2>
                <div className=" py-8 leading-7 text-base space-y-6 md:text-xl  md:w-9/12 md:m-auto">
                    <p><strong>Pour créer un projet de crowdfunding, voici les étapes générales que vous pouvez suivre :</strong></p>
                    <ol className="list-decimal space-y-6 pl-6">
                        <li><strong>Définissez clairement votre projet </strong> et ses objectifs.</li>
                        <li><strong>Étudiez le marché </strong> pour comprendre la demande et évaluer la concurrence.</li>
                        <li><strong>Fixez des objectifs de financement </strong>réalistes et suffisamment élevés pour couvrir les coûts.</li>
                        <li><strong>Promouvez activement votre campagne </strong> sur les réseaux sociaux, par e-mail et d'autres canaux.</li>
                        <li><strong>Gérez les fonds collectés </strong>de manière responsable et transparente.</li>
                        <li><strong>Remerciez vos contributeurs </strong> une fois la campagne terminée et maintenez une communication continue avec eux.</li>
                    </ol>
                </div>
            </div>
            <div className=" text-black px-8 py-6 lg:flex  xl:w-11/12 2xl:w-9/12  md:m-auto md:py-32">
                <h2 className=" text-4xl mt-12  md:text-6xl ">Pourquoi notre plateforme de Crowdfunding est le meilleur choix pour vous?</h2>
                <div className="lg:px-32 "><div className=" py-8 leading-7 text-base space-y-8 md:text-xl">
                    <p> <strong>Diversité des projets :</strong> Nous offrons une large gamme de projets dans différents domaines tels que l'art, la technologie, l'éducation, l'environnement et bien d'autres. Quels que soient vos intérêts, vous trouverez des initiatives qui correspondent à vos valeurs et à vos passions.</p>
                    <p><strong>Facilité d'utilisation : </strong>Notre plateforme est conçue pour être conviviale et accessible à tous. Que vous soyez un créateur cherchant à lancer un projet ou un investisseur à la recherche d'opportunités, notre interface intuitive vous guide tout au long du processus.</p>
                    <p><strong>Transparence et confiance : </strong>Nous mettons un point d'honneur à maintenir une transparence totale tout au long du processus de crowdfunding. Vous avez accès à des informations détaillées sur chaque projet, y compris sur les créateurs, les objectifs financiers et les plans de mise en œuvre.</p>
                    <p>En choisissant notre plateforme de crowdfunding, vous faites le choix d'une expérience enrichissante.</p>
                </div>
                <ConnexionButton user={user} />
                </div>
            </div>
            <div className="bg-[#FFD135] text-black px-8 px-16 text-center md:py-32">
                <h2 className=" text-4xl mt-12 xl:w-11/12 2xl:w-9/12  md:m-auto md:text-6xl pb-6 md:text-7xl font-black"> Le succès de demain commence aujourd’hui.</h2>
                <ConnexionButton user={user} />

            </div>
            <div className="px-8 py-16 text-base md:w-9/12 md:m-auto lg:grid md:grid-cols-2 md:gap-20 h-auto">
                <h2 className=" text-4xl mt-11 mb-7 text-black md:text-6xl md:text-center md:col-span-2">Enrichissez vos connaissance grace aux ouvrage que nous mettons en votre disposition</h2>
                <div>
                    <div className="h-80 2xl:w-[500px] bg-cover bg-no-repeat bg-[url('https://course.oc-static.com/courses/1946116/1946116_teaser_picture_1680855988.jpg')]"></div>
                    <strong> <h3 className="text-xl pt-10">Avoir l'audace d'entreprendre</h3></strong>
                    <p className="py-4 w-10/12">  Créez des outils d’analyse et facilitez la prise de décision en entreprise </p>
                    <div className="flex items-stretch hover:text-[#3563FF] underline underline-offset-8 mb-12">
                        <Link to='/Formation'>Apprendre plus</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-3 self-center fill-black"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                    </div>
                </div>
                <div>
                    <div className="h-80 2xl:w-[500px] bg-cover bg-no-repeat bg-[url('client/src/assets/formation0001.png')]"></div>
                    <strong> <h3 className="text-xl pt-10">Business Intelligence Analyst</h3></strong>
                    <p className="py-4 w-10/12">    Créez des outils d’analyse et facilitez la prise de décision en entreprise</p>
                    <div className="flex items-stretch hover:text-[#3563FF] underline underline-offset-8 mb-12">
                        <Link to='/Formation'>Apprendre plus</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-3 self-center fill-black"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                    </div>
                </div>
                <div>
                    <div className="h-80 2xl:w-[500px] bg-cover bg-no-repeat bg-[url('https://greenloop.eu/wp-content/uploads/2021/10/Greenloop-formations-petit.svg')]"></div>
                    <strong> <h3 className="text-xl pt-10">Chef de projet marketing</h3></strong>
                    <p className="py-4 w-10/12"> Garantissez la cohérence de marque et l'application de la stratégie marketing de votre entreprise.</p>
                    <div className="flex items-stretch hover:text-[#3563FF] underline underline-offset-8 mb-12">
                        <Link to='/Formation'>Apprendre plus</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-3 self-center fill-black"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                    </div>
                </div>
                <div>
                    <div className="h-80 2xl:w-[500px] bg-cover bg-no-repeat bg-[url('https://techtyped.com/wp-content/uploads/2023/07/ilgmyzin-agFmImWyPso-unsplash.jpg')]"></div>
                    <strong> <h3 className="text-xl pt-10">Utilisez ChatGPT pour améliorer votre productivité</h3></strong>
                    <p className="py-4 w-10/12">En l'espace de quelques mois, l'intelligence artificielle a fait un bond important. Un produit en particulier est sur toutes les lèvres : ChatGPT.</p>
                    <div className="flex items-stretch hover:text-[#3563FF] underline underline-offset-8 mb-12 ">
                        <Link to='/Formation'>Apprendre plus</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-3 self-center fill-black"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}