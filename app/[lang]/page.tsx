import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowDown, ArrowUpRight, Check, GitPullRequest, Activity, Layers, Cloud, CircleCheck, Code2, Fingerprint, BookOpen } from 'lucide-react';
import Header, { Inquiry } from '../../components/header';
import Pipeline from '../../components/pipeline';
import Contact from '../../components/contact';
import Footer from '../../components/footer';
export function generateStaticParams(){return [{lang:'de'},{lang:'en'}];}
export async function generateMetadata({params}:{params:Promise<{lang:string}>}):Promise<Metadata>{const {lang}=await params;return {title:lang==='en'?'CardellinoTech — Ship reliably without your own platform team.':'CardellinoTech — Zuverlässig releasen ohne eigenes Plattformteam.',description:lang==='en'?'DevOps for software and SaaS teams without their own platform team. From a prioritized roadmap to tested deployments and ongoing maintenance.':'DevOps für Software- und SaaS-Teams ohne eigenes Plattformteam. Von der priorisierten Roadmap über geprüfte Deployments bis zur laufenden Betreuung.',alternates:{languages:{de:'/de',en:'/en'}}};}
export default async function Page({params}:{params:Promise<{lang:string}>}) {
 const {lang}=await params; if(!['de','en'].includes(lang))notFound(); const en=lang==='en';
 const services=en?[
 [GitPullRequest,'Releases without the friction.','Automated CI/CD pipelines, repeatable deployments and tested rollbacks. So shipping becomes routine.','DevOps & CI/CD'],
 [Activity,'Know before your users do.','Useful metrics, actionable alerts and clear runbooks. Understand your systems and respond with a plan.','Site Reliability Engineering'],
 [Layers,'A platform your team can use.','Reusable infrastructure and clear deployment paths. Less setup work, more time for your product.','Platform Engineering'],
 [Cloud,'A cloud that earns its keep.','Right-sized resources, transparent costs and infrastructure as code. Built around what you actually need.','Cloud Engineering']
 ]:[
 [GitPullRequest,'Releases ohne Bauchschmerzen.','Automatisierte CI/CD-Pipelines, reproduzierbare Deployments und getestete Rollbacks. Damit Ausliefern zur Routine wird.','DevOps & CI/CD'],
 [Activity,'Probleme sehen, bevor Nutzer es tun.','Aussagekräftige Metriken, hilfreiche Alerts und klare Runbooks. Systeme verstehen und gezielt reagieren.','Site Reliability Engineering'],
 [Layers,'Eine Plattform, die dein Team trägt.','Wiederverwendbare Infrastruktur und klare Deployment-Wege. Weniger Setup, mehr Zeit für euer Produkt.','Platform Engineering'],
 [Cloud,'Cloud, die sich für euch rechnet.','Passende Ressourcen, transparente Kosten und Infrastructure as Code. Ausgerichtet auf das, was ihr wirklich braucht.','Cloud Engineering']];
 const packages = en ? [
  {
   name: 'Clarity', type: 'Assessment',
   desc: 'For teams that need to know what is slowing down their releases.',
   price: 'Fixed project price', time: 'The starting point for your roadmap',
   items: [
    'Review of your deployment process, infrastructure and monitoring',
    'Written findings, prioritized by risk and impact',
    'Implementation roadmap with a joint results walkthrough'
   ],
   result: 'A prioritized action plan with a clear scope for implementation.'
  },
  {
   name: 'Foundation', type: 'Implementation',
   desc: 'For teams ready to put an agreed deployment plan into practice.',
   price: 'Fixed project price', time: 'Workload and acceptance criteria agreed upfront',
   items: [
    'A deployment pipeline with automated checks for the agreed workload',
    'A jointly tested rollback, documented in a runbook',
    'Versioned infrastructure and a handover in your repositories'
   ],
   result: 'An accepted pipeline with a tested rollback and operating documentation.'
  },
  {
   name: 'Continuity', type: 'Scheduled platform care',
   desc: 'For teams that want to maintain and improve their platform at agreed times.',
   price: 'Monthly retainer', time: 'Scope and scheduled sessions agreed upfront',
   items: [
    'Scheduled maintenance and alert reviews',
    'An agreed backlog of platform improvements',
    'Monthly report on changes, reliability and cloud costs',
    'Additional incident support, subject to availability'
   ],
   result: 'Documented improvements and clear priorities for the next month.'
  }
 ] : [
  {
   name: 'Clarity', type: 'Bestandsaufnahme',
   desc: 'Wenn ihr wissen wollt, was eure Releases ausbremst.',
   price: 'Zum Projektfestpreis', time: 'Der Einstieg in eure Roadmap',
   items: [
    'Review eures Deployment-Prozesses, der Infrastruktur und des Monitorings',
    'Schriftliche Findings, nach Risiko und Wirkung priorisiert',
    'Umsetzungsfahrplan mit gemeinsamer Ergebnisbesprechung'
   ],
   result: 'Ein priorisierter Maßnahmenplan mit klarem Umfang für die Umsetzung.'
  },
  {
   name: 'Foundation', type: 'Umsetzung',
   desc: 'Wenn ihr euren abgestimmten Deployment-Plan umsetzen wollt.',
   price: 'Zum Projektfestpreis', time: 'Workload und Abnahmekriterien vorab vereinbart',
   items: [
    'Deployment-Pipeline mit automatisierten Checks für den vereinbarten Workload',
    'Gemeinsam getesteter Rollback, in einem Runbook dokumentiert',
    'Versionierte Infrastruktur und Übergabe in euren Repositories'
   ],
   result: 'Eine abgenommene Pipeline mit geprüftem Rollback und Betriebsdokumentation.'
  },
  {
   name: 'Continuity', type: 'Planbare Plattformpflege',
   desc: 'Wenn ihr eure Plattform zu abgestimmten Terminen pflegen und weiterentwickeln wollt.',
   price: 'Mit Monatspauschale', time: 'Umfang und Termine vorab abgestimmt',
   items: [
    'Geplante Wartung und Alert-Reviews',
    'Abgestimmtes Backlog für Plattform-Verbesserungen',
    'Monatlicher Bericht zu Änderungen, Stabilität und Cloud-Kosten',
    'Zusätzliche Störungshilfe nach Verfügbarkeit'
   ],
   result: 'Dokumentierte Verbesserungen und klare Prioritäten für den nächsten Monat.'
  }
 ];
 const faqs=en?[
 ['Who is this for?','Software and SaaS teams that want reliable delivery without building a full platform team. We define the right scope based on your product, current setup and priorities.'],
 ['How much do the packages cost?','Clarity and Foundation are fixed-price projects. Continuity is a monthly retainer. You receive a written proposal with deliverables, acceptance criteria and price before committing.'],
 ['Do we need to rebuild everything?','No. We start with your existing setup and address the most valuable improvements first. A new tool or migration only makes sense if it solves a concrete problem.'],
 ['How does Continuity handle urgent incidents?','Continuity covers scheduled maintenance, alert reviews and improvements at agreed times. I can additionally help with urgent production incidents, subject to availability. The package includes no guaranteed response or recovery time and no on-call coverage.'],
 ['Who owns the infrastructure and documentation?','You do. Code and documentation live in your repositories. The handover is part of the work, so your team can keep developing the platform independently.']
 ]:[
 ['Für wen ist die Zusammenarbeit geeignet?','Für Software- und SaaS-Teams, die zuverlässig ausliefern wollen, ohne ein komplettes Plattformteam aufzubauen. Den passenden Umfang bestimmen wir anhand eures Produkts, Setups und eurer Prioritäten.'],
 ['Was kosten die Pakete?','Clarity und Foundation sind Projekte zum Festpreis. Continuity ist eine monatliche Pauschale. Vor der Beauftragung erhaltet ihr ein schriftliches Angebot mit Leistungen, Abnahmekriterien und Preis.'],
 ['Müssen wir alles neu aufbauen?','Nein. Wir starten mit eurem bestehenden Setup und den Verbesserungen, die euch am meisten bringen. Ein neues Tool oder eine Migration ist dann sinnvoll, wenn damit ein konkretes Problem gelöst wird.'],
 ['Wie funktioniert Continuity bei akuten Störungen?','Continuity umfasst geplante Wartung, Alert-Reviews und Verbesserungen zu abgestimmten Terminen. Bei akuten Produktionsstörungen unterstütze ich zusätzlich nach Verfügbarkeit. Eine feste Reaktions- oder Wiederherstellungszeit und eine Rufbereitschaft sind nicht Bestandteil dieses Pakets.'],
 ['Wem gehören Infrastruktur und Dokumentation?','Euch. Code und Dokumentation liegen in euren Repositories. Die Übergabe gehört zur Umsetzung, damit euer Team die Plattform eigenständig weiterentwickeln kann.']];
 return <><a href="#main" className="skip-link">{en?'Skip to content':'Zum Inhalt'}</a><Header en={en}/><main id="main"><section className="hero"><div className="container hero-grid"><div className="hero-copy"><div className="hero-tag"><span className="status-dot"/>{en?'DevOps for software & SaaS teams':'DevOps für Software- & SaaS-Teams'}</div><h1>{en?<>Ship<br/>reliably.<span className="hero-heading-detail">Without your own platform team.</span></>:<>Zuverlässig<br/>releasen.<span className="hero-heading-detail">Auch ohne eigenes Plattformteam.</span></>}</h1><p className="hero-description">{en?'I help your team automate deployments, build reliable cloud infrastructure and maintain the platform. So you can focus on your product.':'Ich unterstütze euer Team mit automatisierten Deployments, stabiler Cloud-Infrastruktur und laufender Betreuung. Damit ihr euch auf euer Produkt konzentrieren könnt.'}</p><div className="hero-actions"><Inquiry en={en}/><a href="#packages" className="text-link">{en?'Explore packages':'Pakete entdecken'}<ArrowDown size={16}/></a></div><p className="hero-note">{en?'DevOps · SRE · Platform Engineering · Cloud':'DevOps · SRE · Platform Engineering · Cloud'}</p></div><Pipeline en={en}/></div><div className="container hero-foot"><span>{en?'Work directly with your engineer.':'Direkt mit dem umsetzenden Engineer arbeiten.'}</span><span><Check size={14}/>{en?'Clear scope':'Klarer Umfang'}</span><span><Check size={14}/>{en?'Direct collaboration':'Direkter Kontakt'}</span><span><Check size={14}/>{en?'Your infrastructure':'Eure Infrastruktur'}</span></div></section>
 <section className="stack-strip"><div className="container stack-inner"><span>{en?'The right tools. For your setup.':'Die richtigen Tools. Für euer Setup.'}</span><div><strong><Cloud size={22}/>AWS &amp; GCP</strong><strong><BoxIcon/>Kubernetes</strong><strong><Code2 size={22}/>Terraform</strong><strong><GitPullRequest size={22}/>GitHub &amp; GitLab</strong><strong><Activity size={22}/>Grafana</strong></div></div></section>
 <section id="services" className="section container"><div className="section-top"><div><p className="eyebrow">{en?'Less firefighting. More progress.':'Weniger Feuer löschen. Mehr vorankommen.'}</p><h2>{en?<>Your product deserves<br/>a solid foundation.</>:<>Euer Produkt verdient<br/>ein gutes Fundament.</>}</h2></div><p>{en?'When infrastructure takes over the day, your product loses momentum. Let’s change that.':'Wenn Infrastruktur den Alltag bestimmt, bleibt das Produkt auf der Strecke. Das ändern wir gemeinsam.'}</p></div><div className="services-grid">{services.map(([Icon,title,desc,label])=>{const C=Icon as typeof Cloud;return <article className="service" key={String(label)}><div className="service-icon"><C size={24}/></div><span className="service-label">{String(label)}</span><h3>{String(title)}</h3><p>{String(desc)}</p></article>})}</div></section>
 <section className="promise-section"><div className="container promise-grid"><div><p className="eyebrow">{en?'The way I work':'Mein Anspruch an Zusammenarbeit'}</p><h2>{en?<>Built with you.<br/>Made to stay yours.</>:<>Mit euch gebaut.<br/>Für euch gemacht.</>}</h2><p>{en?'You work directly with the engineer who understands and implements your setup. We agree on the outcome up front — and build it so your team can carry it forward.':'Ihr arbeitet direkt mit dem Engineer, der euer Setup versteht und umsetzt. Wir vereinbaren das Ergebnis vorab – und bauen so, dass euer Team darauf weiterarbeiten kann.'}</p><a href="#approach" className="text-link">{en?'How we work together':'So arbeiten wir zusammen'}<ArrowUpRight size={17}/></a></div><div className="promise-list">{(en?[[Fingerprint,'One point of contact. Real ownership.','Direct communication from the first review through implementation.'],[CircleCheck,'Clear outcomes. Shared expectations.','Defined scope and acceptance criteria before work begins.'],[BookOpen,'Your code. Your knowledge.','Infrastructure as code, runbooks and a proper handover in your repositories.']]:[[Fingerprint,'Ein Ansprechpartner. Echte Verantwortung.','Direkte Kommunikation vom ersten Review bis zur Umsetzung.'],[CircleCheck,'Klare Ergebnisse. Gleiche Erwartungen.','Definierter Umfang und Abnahmekriterien, bevor die Arbeit beginnt.'],[BookOpen,'Euer Code. Euer Wissen.','Infrastructure as Code, Runbooks und eine saubere Übergabe in euren Repositories.']]).map(([Icon,title,desc])=>{const C=Icon as typeof Cloud;return <div className="promise-item" key={String(title)}><C size={22}/><div><h3>{String(title)}</h3><p>{String(desc)}</p></div></div>})}</div></div></section>
 <section id="packages" className="section container"><div className="section-top"><div><p className="eyebrow">{en?'A clear next step. At every stage.':'Ein klarer nächster Schritt. In jeder Phase.'}</p><h2>{en?'The right package for your next move.':'Das passende Paket für euren nächsten Schritt.'}</h2></div><p>{en?'Start with a roadmap. Put it into practice. Keep the platform in shape. Three stages, each with a tangible handover.':'Mit einer Roadmap starten. Gezielt umsetzen. Die Plattform weiterentwickeln. Drei Stufen, jede mit einem greifbaren Ergebnis.'}</p></div><div className="packages-grid">{packages.map((p,i)=><article className={`package ${i===1?'featured':''}`} key={p.name}>{i===1&&<span className="package-ribbon">{en?'From plan to production':'Vom Plan in die Produktion'}</span>}<div className="package-type"><span className="package-symbol">{i===0?'◎':i===1?'◇':'↗'}</span>{p.type}</div><h3>{p.name}</h3><p className="package-desc">{p.desc}</p><div className="package-price">{p.price}<span>{p.time}</span></div><ul>{p.items.map(item=><li key={item}><Check size={17}/><span>{item}</span></li>)}</ul><div className="package-result"><span>{en?'Your outcome':'Euer Ergebnis'}</span><p>{p.result}</p></div><Inquiry en={en} packageName={p.name} className={i!==1?'outline':''}/></article>)}</div><p className="packages-note">{en?'Clarity is the starting point when priorities are still unclear. With an agreed plan, you can start directly with Foundation or Continuity. Your written proposal defines scope, acceptance criteria, timeline and price.':'Clarity ist der Einstieg, wenn Prioritäten noch offen sind. Mit einem abgestimmten Plan könnt ihr direkt mit Foundation oder Continuity starten. Das schriftliche Angebot definiert Umfang, Abnahmekriterien, Zeitplan und Preis.'}</p></section>
 <section id="approach" className="approach-section"><div className="container"><div className="section-top"><div><p className="eyebrow">{en?'From first conversation to a working setup':'Vom ersten Gespräch zum funktionierenden Setup'}</p><h2>{en?'A simple process. A clear direction.':'Ein einfacher Ablauf. Ein klares Ziel.'}</h2></div></div><div className="steps">{(en?[['Understand','We talk about your product, your setup and what’s slowing you down.'],['Agree','You receive a proposal with scope, outcomes and a clear price.'],['Build & hand over','We implement, verify together and make the knowledge part of your team.']]:[['Verstehen','Wir sprechen über euer Produkt, euer Setup und das, was euch gerade ausbremst.'],['Vereinbaren','Ihr erhaltet ein Angebot mit Umfang, Ergebnissen und einem klaren Preis.'],['Umsetzen & übergeben','Wir setzen um, prüfen gemeinsam und machen das Wissen zum Teil eures Teams.']]).map(([title,desc],i)=><article key={title}><span className="step-number">0{i+1}</span><h3>{title}</h3><p>{desc}</p></article>)}</div></div></section>
 <section id="about" className="section container about-grid"><div className="about-visual" aria-hidden="true"><div className="monogram">c<span>t</span><i>.</i></div><div className="about-visual-bottom"><span>cardellinotech</span><span>Engineering with ownership.</span></div></div><div className="about-copy"><p className="eyebrow">{en?'An engineer. On your team.':'Ein Engineer. An eurer Seite.'}</p><h2>{en?'Hi, I’m Dominic.':'Hi, ich bin Dominic.'}</h2><p>{en?'I bring 20 years of professional experience. Since 2022, I have also worked as an independent engineer, including on projects for US end clients. My technical focus is Kubernetes, Terraform, monitoring and alerting.':'Ich bringe 20 Jahre Berufserfahrung mit. Seit 2022 bin ich zusätzlich selbstständig tätig, unter anderem in Projekten für US-Endkunden. Mein technischer Schwerpunkt liegt auf Kubernetes, Terraform, Monitoring und Alerting.'}</p><p>{en?'With CardellinoTech, you work directly with me, from the first review to the handover. I build understandable solutions and document the decisions behind them, so your team can keep developing the platform independently.':'Mit CardellinoTech arbeitet ihr direkt mit mir, vom ersten Review bis zur Übergabe. Ich baue verständliche Lösungen und dokumentiere die Entscheidungen dahinter, damit euer Team die Plattform eigenständig weiterentwickeln kann.'}</p><div className="about-signature"><span className="signature-mark">D.</span><div><strong>Dominic Cardellino</strong><span>{en?'Freelance DevOps & Platform Engineer':'Freelance DevOps & Platform Engineer'}</span></div></div></div></section>
 <section className="faq-section"><div className="container faq-grid"><div><p className="eyebrow">{en?'Good questions. Clear answers.':'Gute Fragen. Klare Antworten.'}</p><h2>{en?<>Before we <br/>get started.</>:<>Bevor wir <br/>loslegen.</>}</h2><p>{en?'A few things you might be wondering about.':'Was ihr vielleicht noch wissen möchtet.'}</p></div><div>{faqs.map(([q,a])=><details key={q}><summary>{q}<span className="faq-plus" aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></div></section>
 <section className="final-cta container"><div className="cta-decoration" aria-hidden="true"><Layers size={125} strokeWidth={0.7}/></div><p>{en?'Your next release starts with a conversation.':'Euer nächstes Release beginnt mit einem Gespräch.'}</p><h2>{en?<>Ready for a<br/>stronger foundation?</>:<>Bereit für ein<br/>stärkeres Fundament?</>}</h2><div><Inquiry en={en}/><span>{en?'Let’s find the right next step.':'Finden wir gemeinsam euren nächsten Schritt.'}</span></div></section>
 <Contact en={en}/></main><Footer en={en}/></>;
}
function BoxIcon(){return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="m12 2 9 5v10l-9 5-9-5V7l9-5Zm0 0v20M3 7l9 5 9-5M3 17l9-5 9 5"/></svg>}
