/* ═══════════════════════════════════════════════════════════
   operations.js
   To add a section: append to SECTIONS, then reference its
   `name` in NAV. Nothing else needs editing.
   ═══════════════════════════════════════════════════════════ */

var SECTIONS = [

/* ─── About ─────────────────────────────────────────────── */
{
  name: "about",
  navLabel: "About",
  eyebrow: "About",
  color: "#7E88B4",
  content: `
    <article class="doc">
      <p class="doc__eyebrow">About</p>
      <h1 class="doc__title">I study what models represent, and whether it moves.</h1>
      <p class="doc__sub">Isaiah Freeman &middot; KingTechnician</p>

      <p class="doc__lede">Most of what a language model knows never becomes a token. My work reads those hidden states directly &mdash; to find the structure inside them, and to test whether that structure is <em>shared</em> across models trained separately.</p>

      <p>I'm finishing a CS Master's at Virginia State University and heading into a PhD. Alongside that, I run an independent research operation, <strong>Freethought Labs</strong>, focused on mechanistic interpretability and representation engineering.</p>

      <p>The through-line across my projects is the same question asked at different scales: if two models learn the same concept, do they encode it the same way &mdash; and can you carry a probe, a direction, or a decision from one to the other without retraining anything?</p>

      <div class="facts">
        <div class="facts__row"><div class="facts__k">Now</div><div class="facts__v"><strong>M.S. Computer Science</strong>, Virginia State University &middot; 3.87 &middot; expected August 2026</div></div>
        <div class="facts__row"><div class="facts__k">Next</div><div class="facts__v"><strong>PhD in computer science</strong> &middot; admissions in progress</div></div>
        <div class="facts__row"><div class="facts__k">Previously</div><div class="facts__v">SWE Intern, <strong>Google Maps</strong> &middot; SWE Intern, <strong>YouTube Trust &amp; Safety</strong></div></div>
        <div class="facts__row"><div class="facts__k">Focus</div><div class="facts__v">Mechanistic interpretability, representation engineering, probe-based analysis of hidden states</div></div>
        <div class="facts__row"><div class="facts__k">Advisors</div><div class="facts__v"> Dr. Joseph Shelton; Dr. Joed Ngangmeni</div></div>
        <div class="facts__row"><div class="facts__k">Also</div><div class="facts__v">Stanford University Innovation Fellow &middot; speaker at Stanford, MIT, and Harvard-affiliated events</div></div>
      </div>

      <p>I'm currently applying to PhD programs in computer science. If you're a prospective advisor, collaborator, or you want to talk about anything below, the fastest route is the contact form.</p>

      <div class="btnrow">
        <a class="btn btn--primary" href="#contact" data-nav="contact">Get in touch</a>
        <a class="btn" href="#myresume" data-nav="myresume">Read my resume</a>
        <a class="btn" href="https://github.com/KingTechnician" target="_blank" rel="noreferrer noopener">GitHub</a>
        <a class="btn" href="https://huggingface.co/KingTechnician" target="_blank" rel="noreferrer noopener">Hugging Face</a>
      </div>
    </article>
  `
},

/* ─── Research ──────────────────────────────────────────── */
{
  name: "shared-truth",
  navLabel: "Shared Truth",
  eyebrow: "Research &middot; first author &middot; under review",
  color: "#5B8DEF",
  content: `
    <article class="doc">
      <p class="doc__eyebrow">Research &middot; First author &middot; Under review</p>
      <h1 class="doc__title">Shared Truth</h1>
      <p class="doc__sub">Cross-model transfer of truth representations, measured across 24 model pairs</p>

      <p class="doc__lede">If a linear direction for truthfulness exists in one model's residual stream, does it survive being mapped into another model &mdash; and does the receiving model get <em>better</em> at telling true from false when it arrives?</p>

      <p>Language models appear to encode the truth or falsity of a statement as a recoverable direction in activation space. That result is well established <em>within</em> a single model. This paper asks the harder question: whether that structure is shared across independently trained families, and what an honest test of transfer actually requires.</p>

      <h3>Method</h3>
      <p>I fit alignment maps between the hidden states of a source and target model, inject the mapped representation at inference time, and measure the target's separability of true and false statements against its own native ceiling. Every claim of improvement is tested against what the target could already do unaided.</p>

      <h3>What the experiments show</h3>
      <ul class="findings">
        <li><strong>Trained adapters are mostly unnecessary.</strong> A closed-form Procrustes alignment &mdash; rigid rotation, no learning &mdash; matches trained adapters on 19 of 21 pairs. The transferable structure is largely a rotation away.</li>
        <li><strong>Transfer can exceed the native ceiling,</strong> but only narrowly, and only when the claim is bounded by bootstrap confidence intervals rather than point estimates.</li>
        <li><strong>Injection strength has a plateau and a cliff.</strong> Performance holds near the target's ceiling across a wide range, then collapses toward chance at full strength.</li>
        <li><strong>The collapse is alignment failure, not information loss.</strong> A probe retrained on the adapter's own outputs recovers the signal at high AUROC, while a shuffled control sits at chance &mdash; so the information is still present, just no longer oriented along the direction the model reads.</li>
        <li><strong>The collapse is structured by syntax.</strong> Negated statements degrade most, simple statements less, conjunctions least &mdash; a gradient that suggests what alignment is actually preserving.</li>
        <li><strong>It replicates.</strong> Multi-seed runs across high-transfer, moderate, and floor-level pairs reproduce the plateau-and-collapse structure in every run.</li>
      </ul>

      <p>Random-weight and shuffled-adapter baselines produce zero improvement under the same protocol, which rules out the reading that any injection at sufficient scale would look like transfer.</p>

      <p>The paper is under peer review. I'm happy to share the manuscript with prospective advisors and collaborators &mdash; reach out and I'll send it over. Code to reproduce the experiments will be released.</p>

      <div class="btnrow">
        <a class="btn btn--primary" href="#contact" data-nav="contact">Request the paper</a>
      </div>
    </article>
  `
},
{
  name: "pvts",
  navLabel: "PVTS",
  eyebrow: "Freethought Labs &middot; working paper",
  color: "#3FB6A3",
  content: `
<article class="doc">
      <p class="doc__eyebrow">Freethought Labs &middot; Working paper</p>
      <h1 class="doc__title">PVTS</h1>
      <p class="doc__sub">Probe-based, pre-verbal tool selection from hidden states</p>

      <p class="doc__lede">A model usually tells you which tool it wants by writing the call. PVTS asks whether you can read that decision off the hidden state <em>before</em> a single token is generated.</p>

      <p>Tool selection in current agent stacks is an autoregressive act: the model emits a name, then arguments, then you parse it. That makes the decision expensive to obtain, expensive to validate, and impossible to inspect until it has already been committed to text.</p>

      <p>PVTS trains lightweight linear probes on the residual stream and treats tool choice as a classification over hidden states. If the intent is linearly recoverable before decoding, the routing decision becomes cheap, inspectable, and available early enough to change what happens next.</p>

      <ul class="findings">
        <li><strong>Pre-verbal readout.</strong> The tool decision is extracted from activations, not from generated text.</li>
        <li><strong>Interpretability as a routing mechanism.</strong> The probe is the router, so the mechanism you use in production is the same one you inspect.</li>
        <li><strong>Connects to non-autoregressive structured decoding</strong> &mdash; if the structural choice is available upfront, the sequential generation of that structure becomes optional.</li>
        <li><strong>A mid-stack read transplants across model sizes.</strong> The same hidden-state readout, taken from a 3&ndash;8B model, can be handed to a sub-2B model as a hint &mdash; lifting its tool-selection accuracy to near that of the much larger model, at a fraction of the cost of a full decode.</li>
      </ul>

      <p>Independent work under <strong>Freethought Labs</strong>, currently being prepared for a workshop submission.</p>
    </article>
  `
},
{
  name: "repprobe",
  navLabel: "RepProbe",
  eyebrow: "Open source",
  color: "#8672EC",
  content: `
    <article class="doc">
      <p class="doc__eyebrow">Open source</p>
      <h1 class="doc__title">RepProbe</h1>
      <p class="doc__sub">Linear probes over frozen language model backbones</p>

      <p class="doc__lede">A small library for the thing I do constantly: freeze a model, pull activations at a layer, fit a discriminant, and find out what the representation already knows.</p>

      <p>RepProbe fits LDA-based linear probes on hidden states from a frozen backbone. The backbone never trains &mdash; the probe is the only thing being fit, which keeps the question honest. You are measuring what the representation contains, not what a fine-tune can be pushed to produce.</p>

      <p>It exists because probe code is easy to write badly. Layer indexing, token-position selection, and train/test hygiene are all places where a probe quietly starts measuring something other than what you meant. RepProbe fixes those decisions in one place so results stay comparable across layers, models, and runs.</p>

      <ul class="findings">
        <li><strong>Frozen backbone by default.</strong> No gradient reaches the model, so a probe result is a claim about the representation.</li>
        <li><strong>Layer-depth sweeps</strong> as the primary unit of analysis, rather than a single hand-picked layer.</li>
        <li><strong>Open source</strong> and shared for reuse.</li>
      </ul>

      <p>The direction I'm most interested in is out-of-distribution generalization by layer depth &mdash; whether the layers where a concept is most linearly separable in-distribution are the same layers that hold up when the distribution shifts.</p>

      <div class="btnrow">
        <a class="btn" href="https://github.com/KingTechnician/repprobe" target="_blank" rel="noreferrer noopener">GitHub</a>
      </div>
    </article>
  `
},
{
  name: "osmosis",
  navLabel: "OSMoSIS &amp; TriAGE",
  eyebrow: "Master's thesis",
  color: "#D98B3C",
  content: `
    <article class="doc">
      <p class="doc__eyebrow">Master's thesis &middot; Virginia State University</p>
      <h1 class="doc__title">Objective Resonance</h1>
      <p class="doc__sub">OSMoSIS &amp; TriAGE as agents of feedback reflection</p>

      <p class="doc__lede">Likert scales are easy to count and terrible at capturing what a student actually experienced. This thesis asks whether a model can read an open-ended response and say something quantitative about it: not what it's <em>about</em>, but whether it <em>satisfies</em> the objective the survey was written for.</p>

      <p>Retrieval and QA metrics measure semantic relatedness &mdash; how much two pieces of text overlap in topic. A response can be highly related to an objective and still fail to answer it. I introduce <strong>objective sufficiency</strong> as a distinct classification task: given a survey objective and a response, does the response satisfy it, how directly, and if not, how topically close does it stay?</p>

      <h3>OSMoSIS: the framework</h3>
      <p>Objective Sufficiency Modeling over a Semantic Inference System is a metacognition-inspired five-label taxonomy built from three binary distinctions &mdash; addresses or not, direct or partial, on-topic or tangential or off. That yields ADDR_DIRECT, ADDR_PARTIAL, NOADDR_ON, NOADDR_TANGENTIAL, and NOADDR_OFF, which sorts feedback into responses worth reading closely, responses that are thematically useful but off-objective, and responses that need no further inspection.</p>

      <h3>TriAGE: generating data for a task with no dataset</h3>
      <p>Objective sufficiency had no prior dataset, so I built one. Triadic Agent Generation and Evaluation puts three LLMs in role &mdash; a <strong>Proctor</strong> that runs the survey, a <strong>Student</strong> that answers it under a target label and sentiment, and a <strong>Rater</strong> that judges the pair through a chain-of-thought decision tree. Examples survive only on tri-rate plurality agreement matching the Student's intended label, with multiple model origins, balanced labels, and objectives held out between splits.</p>

      <div class="metrics">
        <div class="metric"><span class="metric__n">2,669</span><span class="metric__l">Synthetic examples, 39 objectives</span></div>
        <div class="metric"><span class="metric__n">93%</span><span class="metric__l">Best synthetic test accuracy</span></div>
        <div class="metric"><span class="metric__n">450</span><span class="metric__l">Human-labeled student rows</span></div>
        <div class="metric"><span class="metric__n">84%</span><span class="metric__l">Students would recommend</span></div>
      </div>

      <h3>The cautionary result</h3>
      <ul class="findings">
        <li><strong>The labels are learnable.</strong> BERT-family classifiers reach 78&ndash;93% accuracy on held-out synthetic data with unseen objectives, confirming the five labels are semantically separable.</li>
        <li><strong>None of it transfers.</strong> Against 450 human-labeled real student responses, Cohen's kappa sits at essentially chance &mdash; despite tri-rate agreement, multiple model origins, held-out objectives, and balanced classes.</li>
        <li><strong>Synthetic pretraining carries no weight.</strong> In a 360-run cross-validation, models initialized from the synthetic checkpoint fail to beat freshly initialized baselines once either is adapted with human labels.</li>
        <li><strong>Human data is the binding constraint.</strong> Just 90 human examples lift agreement meaningfully above chance, climbing to 0.28&ndash;0.36 kappa at 360 &mdash; with no plateau, which points at annotation volume rather than model capacity.</li>
      </ul>

      <h3>And a result I did not expect to like as much</h3>
      <p>Across 97 sessions in four computer science courses, students rated the LLM-proctored survey positively on all four post-survey measures. 89% scored their comfort above 3 out of 5, and 84% would recommend the format. Recommendation correlates most strongly with <strong>comfort</strong> and perceived understanding, and least with question clarity &mdash; students endorse the format because it felt like being listened to, not because the questions were well phrased.</p>

      <p>Under the direction of Dr. Joseph Shelton, Dr. Joon Suk Lee, and Dr. Michael Reynolds.</p>

      <div class="btnrow">
        <span class="btn btn--disabled" aria-disabled="true">Full thesis &mdash; coming soon</span>
        <a class="btn" href="#contact" data-nav="contact">Ask about this work</a>
      </div>
    </article>
  `
},

/* ─── Building ──────────────────────────────────────────── */
{
  name: "anubis",
  navLabel: "Anubis",
  eyebrow: "Product &middot; private preview",
  color: "#C9A227",
  content: `
    <article class="doc">
      <p class="doc__eyebrow">Product &middot; Private preview</p>
      <h1 class="doc__title">Anubis</h1>
      <p class="doc__sub">Open experiences at scale</p>

      <p class="doc__lede">Keep exploring. Keep asking questions. Keep listening.</p>

      <h3>Students already stopped talking</h3>
      <p>In a survey of 2,000 undergraduates across 114 two- and four-year institutions, only 21% had ever spoken up about a campus issue that mattered to them. Just 32% were even slightly confident they'd know which department to raise it with. Roughly a third strongly agreed they feel comfortable sharing opinions in class &mdash; and that's the <em>generous</em> channel.</p>

      <p>The pattern underneath is not apathy. Students are discouraged from voicing issues because they don't believe the feedback leads to action, and they're comfortable in classrooms in a way they aren't in broader channels. Anonymity and upvotes fix the first half. Neither one makes the resulting pile of text legible to the person who has to act on it.</p>

      <h3>What's already out there, and why it doesn't fit</h3>
      <ul class="findings">
        <li><strong>Educational feedback tools</strong> &mdash; generative-AI-only offerings and in-house campus systems that rarely involve NLP at all.</li>
        <li><strong>Sentiment platforms</strong> &mdash; proprietary and closed. You get a score and no room to research how it was produced.</li>
        <li><strong>Text analytics platforms</strong> &mdash; genuinely powerful, and built for data scientists rather than the professor holding the responses.</li>
      </ul>
      <p>The gap is the same on both ends: limited flexibility, or too technical.</p>

      <h3>You decide the model, not me</h3>
      <p>Anubis is modular by design. Sentiment can come from a fine-tuned text classifier, from a small or large open-weight generation model, or from an OpenAI-compatible API &mdash; whichever tradeoff between cost, latency, and reasoning you want for your data. Entity recognition finds the people, places, and organizations in a corpus, and topic modeling surfaces the macro themes with real responses attached underneath, so nobody has to take the system's word for it.</p>

      <div class="metrics">
        <div class="metric"><span class="metric__n">74,700</span><span class="metric__l">Text classification models</span></div>
        <div class="metric"><span class="metric__n">158,102</span><span class="metric__l">Text generation models</span></div>
        <div class="metric"><span class="metric__n">20,519</span><span class="metric__l">Token classification models</span></div>
        <div class="metric"><span class="metric__n">33.4B</span><span class="metric__l">Supported analysis combinations</span></div>
      </div>

      <p>Because the model is a choice rather than a fixture, a fine-tuned model becomes a fine-tuned pathway &mdash; the same structure that reads course feedback reads financial commentary or social data. And because it builds on an open model hub, the system inherits new NLP work as it lands instead of waiting on a vendor.</p>

      <h3>The proof</h3>
      <p>The legacy build ran over 20,000+ public Gradreports reviews from more than 1,000 institutions, exposing both macro trends and individual reviews through a chat agent &mdash; sentiment over time, topic groupings, and answers to specific questions about specific schools.</p>

      <div class="btnrow">
        <a class="btn btn--primary" href="https://anubis-for-the-world.netlify.app/" target="_blank" rel="noreferrer noopener">View the legacy demo</a>
        <a class="btn" href="#contact" data-nav="contact">Business inquiries</a>
      </div>
    </article>
  `
},

/* ─── Writing & talks ───────────────────────────────────── */
{
  name: "newgoodtrouble",
  navLabel: "The New Good Trouble",
  eyebrow: "Talk &middot; Honors Convocation, VSU",
  color: "#B5715E",
  content: `
    <article class="doc">
      <p class="doc__eyebrow">Talk &middot; Honors Convocation, Virginia State University</p>
      <h1 class="doc__title">The New Good Trouble</h1>
      <p class="doc__sub">Accepting Junior of the Year &mdash; and using the microphone for something else</p>

      <div class="media">
        <iframe src="https://www.youtube.com/embed/wtAQqsBfK8c" title="The New Good Trouble — Honors Convocation" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      <p>The Honors College named me Junior of the Year. I used the acceptance speech to argue that AI accountability is the civil rights work of this decade, and that HBCUs are positioned to lead it rather than inherit its consequences.</p>

      <p>The talk drew on the Algorithmic Justice League and the Distributed AI Research Institute, and on the work of Dr. Joy Buolamwini and Timnit Gebru. Two questions I put to the room, and still carry:</p>

      <ul class="findings">
        <li>How do we use HBCUs to produce a generation of AI-aware changemakers?</li>
        <li>How do we bring in students of every major, not just computer science, as contributors to that work?</li>
      </ul>

      <p>"How we keep the world responsible for artificial intelligence is the new Good Trouble."</p>
    </article>
  `
},
{
  name: "svmeetup2023",
  navLabel: "Silicon Valley Meetup 2023",
  eyebrow: "Talk &middot; Stanford University",
  color: "#A9714B",
  content: `
    <article class="doc">
      <p class="doc__eyebrow">Talk &middot; Stanford University</p>
      <h1 class="doc__title">Bridging communication gaps between students and administration</h1>
      <p class="doc__sub">Silicon Valley Meetup, March 2023</p>

      <div class="media">
        <iframe src="https://www.youtube.com/embed/V0us4WLxmUo" title="Bridging Communication Gaps Between Students and Administration" allowfullscreen></iframe>
      </div>

      <p>As a University Innovation Fellow, I spoke to roughly 300 attendees at the 2023 Silicon Valley Meetup at Stanford, an annual gathering of Fellows and Faculty Champions from institutions worldwide.</p>

      <p>The talk covered what I learned building <a href="#priam" data-nav="priam">Priam</a>: that the gap between what students want and what administrators hear is usually a measurement problem, not an interest problem.</p>

      <div class="btnrow">
        <a class="btn" href="https://universityinnovationfellows.org" target="_blank" rel="noreferrer noopener">University Innovation Fellows</a>
      </div>
    </article>
  `
},
{
  name: "visionsofchange2",
  navLabel: "Change Forward '22&ndash;23",
  eyebrow: "Publication &middot; Stanford d.school",
  color: "#8A6A52",
  content: `
    <article class="doc">
      <p class="doc__eyebrow">Publication &middot; Hasso Plattner Institute of Design at Stanford</p>
      <h1 class="doc__title">Rethinking Feedback</h1>
      <p class="doc__sub">Change Forward, 2022&ndash;23</p>

      <p class="doc__lede">I spent a long time arguing with myself about the title. Full stack engineer? Machine learning engineer? Researcher? Then I noticed the loop underneath all of them.</p>

      <p>Empathize. Ask. Create. Test. Sit with the results. Repeat. What accumulates across that loop isn't a job title, it's a set of mental skills that sharpen every time you build something. The mind needs passion, and passion needs the mind.</p>

      <p>This article, in the Change Forward journal, is about the design process that lives between meditation and repetition &mdash; written for changemakers stuck in the same uncertain transition I was in.</p>

      <div class="btnrow">
        <a class="btn btn--primary" href="https://issuu.com/uifellows/docs/change_forward_2022-23/88" target="_blank" rel="noreferrer noopener">Read the publication</a>
      </div>
    </article>
  `
},
{
  name: "visionsofchange",
  navLabel: "Change Forward '21&ndash;22",
  eyebrow: "Publication &middot; Stanford d.school",
  color: "#7A5C4A",
  content: `
    <article class="doc">
      <p class="doc__eyebrow">Publication &middot; Hasso Plattner Institute of Design at Stanford</p>
      <h1 class="doc__title">Visions of Change</h1>
      <p class="doc__sub">Change Forward, 2021&ndash;22 &middot; with LaQuawne DePriest</p>

      <p class="doc__lede">The welcome of change starts with diverse conversations. The process of making change begins with the collective.</p>

      <p>Those two sentences became the basis of the article <a href="https://www.linkedin.com/in/laquawne-depriest-86412012a/" target="_blank" rel="noreferrer noopener">LaQuawne DePriest</a> and I wrote for the second volume of Change Forward, the journal documenting the work of University Innovation Fellows.</p>

      <p>A year before writing it I was a freshman taking my first steps as a software engineer, a college student, and an adult. Some of that high school senior is still in there. But the growth is measurable &mdash; in me, in LaQuawne, and in the classmates I studied alongside every day.</p>

      <p>Thanks to <a href="https://www.linkedin.com/in/joseph-shelton-89022a27/" target="_blank" rel="noreferrer noopener">Dr. Joseph Shelton</a> for serving as my Faculty Champion, and to Ms. Laurie Moore and Humera Fasihuddin for the space to think out loud.</p>

      <div class="btnrow">
        <a class="btn btn--primary" href="https://issuu.com/uifellows/docs/uif_impact_journal_2021-2022_-_with_presets_new/94" target="_blank" rel="noreferrer noopener">Read the publication</a>
      </div>
    </article>
  `
},

/* ─── Earlier work ──────────────────────────────────────── */
{
  name: "fwdemodel",
  navLabel: "FWDE Model",
  eyebrow: "Earlier research",
  color: "#6E9B4F",
  content: `
    <article class="doc">
      <p class="doc__eyebrow">Earlier research &middot; University of Kentucky Health Center</p>
      <h1 class="doc__title">The FWDE Model</h1>
      <p class="doc__sub">Automatic segmentation of thigh muscle in MRI</p>

      <p class="doc__lede">Radiologists partition thigh muscles in MRI by hand. It's slow, and it's inconsistent between readers. We built a model to do the first muscle automatically.</p>

      <p>In a two-week engagement, our team was asked to isolate the vastus lateralis &mdash; a muscle on the lateral thigh &mdash; from MRI scans of real subjects across varying body sizes and time points.</p>

      <p>The Freeman-Wilson-Delgado-Ellis model classifies images pixel by pixel using a U-Net: downscaling through the encoder, then upscaling into binary masks that highlight the region of interest when overlaid on the original scan. Built with TensorFlow, Keras, NumPy, SciPy, and Matplotlib.</p>

      <p>The repository is private, since the training data is patient imaging.</p>
    </article>
  `
},
{
  name: "priam",
  navLabel: "Priam",
  eyebrow: "Earlier project",
  color: "#4C63D2",
  content: `
    <article class="doc">
      <p class="doc__eyebrow">Earlier project</p>
      <h1 class="doc__title">Priam</h1>
      <p class="doc__sub">Anonymous, upvote-only student proposals</p>

      <p class="doc__lede">Virginia State University has plenty of channels for student feedback and no single tally of it. Priam was an attempt at the tally.</p>

      <p>Students post a short proposal for something they want changed, tagged by category. Other students upvote. That's the entire interaction surface &mdash; deliberately.</p>

      <p>Posts are anonymous. There are no comments, so no one can be argued out of their own request. The only metric is the upvote count, which makes the signal legible to administration without turning it into a forum to moderate.</p>

      <p>Priam is where the feedback-analysis thread in my work started, and it leads directly to <a href="#anubis" data-nav="anubis">Anubis</a>.</p>

      <div class="btnrow">
        <a class="btn" href="https://github.com/KingTechnician/priam" target="_blank" rel="noreferrer noopener">GitHub repository</a>
      </div>
    </article>
  `
},
{
  name: "pard",
  navLabel: "Pard",
  eyebrow: "Earlier project",
  color: "#2E8B77",
  content: `
    <article class="doc">
      <p class="doc__eyebrow">Earlier project</p>
      <h1 class="doc__title">Pard</h1>
      <p class="doc__sub">A retrieval-backed assistant for Monster Hunter World</p>

      <p>Pard answers questions and gives build advice for <em>Monster Hunter World</em> and its <em>Iceborne</em> expansion, using a LangChain pipeline over game data. Built in Flutter, shipped on web.</p>

      <div class="btnrow">
        <a class="btn" href="https://github.com/KingTechnician/pard" target="_blank" rel="noreferrer noopener">GitHub repository</a>
      </div>
    </article>
  `
},
{
  name: "ispeak",
  navLabel: "Ispeak",
  eyebrow: "Earlier project",
  color: "#6E7A9B",
  content: `
    <article class="doc">
      <p class="doc__eyebrow">Earlier project</p>
      <h1 class="doc__title">Ispeak</h1>
      <p class="doc__sub">Read text out of the world, for people who can't</p>

      <p>An Android app that captures an image, extracts the text in it, and reads it aloud &mdash; built for people with low vision. Includes selectable high-contrast color schemes and translation of captured text.</p>

      <p>Final project for the CodePath Android development course.</p>

      <div class="btnrow">
        <a class="btn" href="https://github.com/KingTechnician/eyespeak" target="_blank" rel="noreferrer noopener">GitHub repository</a>
      </div>
    </article>
  `
},

/* ─── Utility ───────────────────────────────────────────── */
{
  name: "myresume",
  navLabel: "Resume",
  eyebrow: "Resume",
  color: "#A85560",
  content: `
    <article class="doc">
      <p class="doc__eyebrow">Resume</p>
      <h1 class="doc__title">Resume</h1>
      <p class="doc__sub">Last updated 2026</p>
      <div class="media media--doc">
        <iframe src="https://drive.google.com/file/d/1yur7i0LXFKK11m4vcKXBlVIQGDpeF7A0/preview" title="Isaiah Freeman resume"></iframe>
      </div>
      <div class="btnrow">
        <a class="btn" href="https://drive.google.com/file/d/1yur7i0LXFKK11m4vcKXBlVIQGDpeF7A0/view" target="_blank" rel="noreferrer noopener">Open in a new tab</a>
      </div>
    </article>
  `
},
{
  name: "contact",
  navLabel: "Contact",
  eyebrow: "Contact",
  color: "#B4485A",
  content: `
    <article class="doc">
      <p class="doc__eyebrow">Contact</p>
      <h1 class="doc__title">Say what you need.</h1>
      <p class="doc__sub">Research, collaboration, speaking, or Anubis access</p>

      <p>I read everything that comes through here. If you're asking about a paper, name it and I'll send the manuscript. If you're asking about Anubis, tell me roughly how much text you're sitting on and what you're trying to learn from it.</p>

      <form action="https://formspree.io/f/xlekevpg" method="POST">
        <div class="field">
          <label for="inputEmail">Your email</label>
          <input type="email" name="email" id="inputEmail" placeholder="you@example.com" required>
        </div>
        <div class="field">
          <label for="inputMessage">Message</label>
          <textarea name="message" id="inputMessage" placeholder="What would you like to tell me?" required></textarea>
        </div>
        <button type="submit" class="btn btn--primary">Send message</button>
      </form>
    </article>
  `
}
];

/* ─── Navigation structure ──────────────────────────────── */
var NAV = [
  { type:"solo",  name:"about" },
  { type:"group", label:"Research", items:["shared-truth","pvts","repprobe","osmosis"], open:true },
  { type:"group", label:"Building", items:["anubis"], open:true },
  { type:"group", label:"Writing & talks", items:["newgoodtrouble","svmeetup2023","visionsofchange2","visionsofchange"] },
  { type:"group", label:"Earlier work", items:["fwdemodel","priam","pard","ispeak"] },
  { type:"solo",  name:"myresume" },
  { type:"solo",  name:"contact" }
];

/* ═══════════════════════════════════════════════════════════
   Runtime
   ═══════════════════════════════════════════════════════════ */

var byName = {};
SECTIONS.forEach(function(s){ byName[s.name] = s; });

var DEFAULT = "about";
var TICKS = 22;
var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
var sweepTimers = [];

/* hex → "r,g,b" */
function rgbOf(hex){
  var h = hex.replace("#","");
  if (h.length === 3) h = h[0]+h[0]+h[1]+h[1]+h[2]+h[2];
  var n = parseInt(h,16);
  return [(n>>16)&255, (n>>8)&255, n&255].join(",");
}

/* ── Build sections ─────────────────────────────────────── */
function buildSections(){
  var host = document.getElementById("experience-container");
  SECTIONS.forEach(function(s){
    var div = document.createElement("div");
    div.className = "content " + s.name;
    div.id = s.name;
    div.innerHTML = s.content;
    host.appendChild(div);
  });
}

/* ── Build nav (rail + overlay share the markup) ────────── */
function buildNav(host, idPrefix){
  NAV.forEach(function(entry, i){
    if (entry.type === "solo"){
      var s = byName[entry.name];
      if (!s) return;
      var a = document.createElement("a");
      a.className = "navlink navlink--solo";
      a.href = "#" + s.name;
      a.dataset.nav = s.name;
      a.textContent = s.navLabel;
      host.appendChild(a);
      return;
    }

    var wrap = document.createElement("div");
    wrap.className = "navgroup";

    var panelId = idPrefix + "-grp-" + i;
    var btn = document.createElement("button");
    btn.className = "navgroup__btn";
    btn.type = "button";
    btn.setAttribute("aria-expanded", entry.open ? "true" : "false");
    btn.setAttribute("aria-controls", panelId);
    btn.innerHTML = '<span>' + entry.label + '</span><span class="navgroup__caret">&#9656;</span>';

    var items = document.createElement("div");
    items.className = "navgroup__items";
    items.id = panelId;
    var inner = document.createElement("div");

    entry.items.forEach(function(n){
      var s = byName[n];
      if (!s) return;
      var a = document.createElement("a");
      a.className = "navlink";
      a.href = "#" + s.name;
      a.dataset.nav = s.name;
      a.innerHTML = s.navLabel;
      inner.appendChild(a);
    });

    items.appendChild(inner);
    btn.addEventListener("click", function(){
      var open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", open ? "false" : "true");
    });

    wrap.appendChild(btn);
    wrap.appendChild(items);
    host.appendChild(wrap);
  });
}

/* ── Probe rail ─────────────────────────────────────────── */
function buildProbe(){
  var rail = document.getElementById("probeRail");
  for (var i = 0; i < TICKS; i++){
    var t = document.createElement("span");
    t.className = "tick";
    rail.appendChild(t);
  }
}

function paintProbe(count){
  var ticks = document.querySelectorAll("#probeRail .tick");
  for (var i = 0; i < ticks.length; i++){
    ticks[i].classList.toggle("is-lit", i < count);
    ticks[i].classList.toggle("is-head", i === count - 1);
  }
}

function probeFromScroll(){
  var max = document.documentElement.scrollHeight - window.innerHeight;
  var p = max > 4 ? window.scrollY / max : 0;
  return Math.max(1, Math.min(TICKS, Math.round(p * TICKS) || 1));
}

function sweepProbe(){
  sweepTimers.forEach(clearTimeout);
  sweepTimers = [];
  var target = probeFromScroll();
  if (reduceMotion){ paintProbe(target); return; }
  paintProbe(0);
  for (var i = 1; i <= target; i++){
    (function(n){
      sweepTimers.push(setTimeout(function(){
        paintProbe(n);
        if (n === target) sweepTimers = [];
      }, n * 26));
    })(i);
  }
}

/* ── Section switching ──────────────────────────────────── */
var current = null;

function showContent(name){
  var s = byName[name] ? byName[name] : byName[DEFAULT];
  if (current === s.name) { closeNav(); return; }
  current = s.name;

  SECTIONS.forEach(function(x){
    var el = document.getElementById(x.name);
    if (el) el.classList.toggle("is-visible", x.name === s.name);
  });

  var wash = document.querySelector(".wash");
  wash.classList.add("is-swapping");
  setTimeout(function(){
    document.documentElement.style.setProperty("--accent", s.color);
    document.documentElement.style.setProperty("--accent-rgb", rgbOf(s.color));
    wash.classList.remove("is-swapping");
  }, reduceMotion ? 0 : 160);

  document.querySelectorAll("[data-nav]").forEach(function(a){
    a.classList.toggle("is-active", a.dataset.nav === s.name && a.classList.contains("navlink"));
  });

  var label = document.getElementById("probeLabel");
  if (label) label.textContent = s.name.replace(/-/g, " ");

  document.title = (s.name === "about" ? "Isaiah Freeman" : s.navLabel + " — Isaiah Freeman");

  window.scrollTo({ top:0, behavior: reduceMotion ? "auto" : "smooth" });
  sweepProbe();
  closeNav();
}

/* ── Overlay ────────────────────────────────────────────── */
var overlay = document.getElementById("myNav");
var menuBtn = document.getElementById("menuButton");

function openNav(){
  overlay.hidden = false;
  menuBtn.setAttribute("aria-expanded","true");
  document.body.style.overflow = "hidden";
  var first = overlay.querySelector(".navlink, .navgroup__btn");
  if (first) first.focus();
}

function closeNav(){
  if (overlay.hidden) return;
  overlay.hidden = true;
  menuBtn.setAttribute("aria-expanded","false");
  document.body.style.overflow = "";
}

/* ── Routing ────────────────────────────────────────────── */
function routeFromHash(){
  var n = (location.hash || "").replace("#","");
  showContent(byName[n] ? n : DEFAULT);
}

/* ── Boot ───────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", function(){
  buildSections();
  buildNav(document.getElementById("railNav"), "rail");
  buildNav(document.getElementById("overlayNav"), "ovl");
  buildProbe();

  document.addEventListener("click", function(e){
    var a = e.target.closest("[data-nav]");
    if (!a) return;
    e.preventDefault();
    var n = a.dataset.nav;
    if (location.hash === "#" + n) showContent(n);
    else location.hash = n;
  });

  window.addEventListener("hashchange", routeFromHash);
  routeFromHash();

  menuBtn.addEventListener("click", function(){
    overlay.hidden ? openNav() : closeNav();
  });
  document.getElementById("closeNavBtn").addEventListener("click", closeNav);
  document.addEventListener("keydown", function(e){
    if (e.key === "Escape") closeNav();
  });

  var raf = null;
  window.addEventListener("scroll", function(){
    if (raf) return;
    raf = requestAnimationFrame(function(){
      raf = null;
      if (!sweepTimers.length) paintProbe(probeFromScroll());
    });
  }, { passive:true });

  var splash = document.getElementById("splash-screen");
  setTimeout(function(){
    splash.classList.add("is-done");
    setTimeout(function(){ splash.remove(); }, 500);
  }, reduceMotion ? 120 : 1000);
});