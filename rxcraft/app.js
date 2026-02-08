// Inject the full UI (everything that used to be inside <body> except the <script>)
document.body.innerHTML = `

  <!-- START SCREEN -->
  <div class="startScreen" id="startScreen">
    <div class="startCard">
      <div class="startTitle">RxCraft 💊</div>
      <div class="startSub">Hi there! This is the first pre-alpha build of the game, and while it’s still early, I hope it’s both fun to explore and genuinely educational.</div>
      <div class="startBtns">
        <button class="playBtn" id="playBtn">▶ Play</button>
      </div>
      <div class="startSig">©2025/2026 Rastin Emrani. All Rights Reserved</div>
    </div>
  </div>

  <!-- Tutorial overlay -->
  <div id="tutorialOverlay" aria-hidden="true">
    <div class="tShade part" id="shadeTop"></div>
    <div class="tShade part" id="shadeLeft"></div>
    <div class="tShade part" id="shadeRight"></div>
    <div class="tShade part" id="shadeBottom"></div>

    <div class="tBubble" id="tBubble">
      <div class="tHeadRow">
        <div class="tTitle" id="tTitle">Tutorial</div>
        <button class="tSkip" id="tSkipBtn" type="button">Skip</button>
      </div>
      <div class="tText" id="tText"></div>
      <div class="tHint" id="tHint"></div>
      <div class="tActions">
        <button class="tNext" id="tNextBtn" type="button">Next</button>
      </div>
    </div>
  </div>

  <!-- Context Menu -->
  <div id="ctxMenu">
    <div class="ctxItem" id="ctxLearn">
      <div>Learn more</div><div class="ctxRight">↵</div>
    </div>
    <div class="ctxSep" id="ctxSep"></div>
    <div class="ctxItem" id="ctxTerminate">
      <div>Terminate</div><div class="ctxRight">⌫</div>
    </div>
  </div>

  <!-- Learn More Overlay -->
  <div id="learnOverlay" aria-hidden="true">
    <div class="learnCard" role="dialog" aria-modal="true">
      <div class="learnLeft">
        <div>
          <div class="learnTitle" id="lmTitle">Item</div>
          <div class="learnMeta" id="lmMeta">Recipe: …</div>
        </div>
        <div class="learnDesc" id="lmDesc"></div>
        <div class="learnFooter">
          <button class="backBtn" id="lmBack" type="button">← Take me back</button>
        </div>
      </div>
      <div class="learnRight">
        <div class="bigIcon" id="lmIcon">🧬</div>
        <div class="bigName" id="lmName">Biology</div>
      </div>
    </div>
  </div>

  <!-- Encyclopedia Overlay -->
  <div id="encyOverlay" aria-hidden="true">
    <div class="encyCard" role="dialog" aria-modal="true">
      <!-- shade used ONLY for intro focus -->
      <div id="encyIntroShade"></div>

      <div class="encyHead">
        <div>
          <div class="encyTitle">Build-A-Drug Reference Library</div>
          <div class="panelSub" style="margin-top:2px">Recipe book + full icon index (profiles).</div>
        </div>
        <div class="encyBtns">
          <button class="pillBtn active" id="encyTabRecipes" type="button">Recipe Book</button>
          <button class="pillBtn" id="encyTabIcons" type="button">All Icons</button>
          <button class="pillBtn" id="encyClose" type="button">Close</button>
        </div>
      </div>

      <div class="encyBody" id="encyBody">
        <div class="encyPane" id="recipesPane">
          <div class="encyPaneHead">
            <div>
              <div class="encyPaneTitle">Basics + All Recipes</div>
              <div class="encyPaneSub">Includes every valid combination.</div>
            </div>
          </div>
          <div class="encyScroll">
            <div class="mono" id="recipesText"></div>
          </div>
        </div>

        <div class="encyPane" id="iconsPane">
          <div class="encyPaneHead">
            <div>
              <div class="encyPaneTitle">All Icons (Organized)</div>
              <div class="encyPaneSub">Click any icon to open its profile.</div>
            </div>
          </div>
          <div class="encyScroll" id="iconsGrid"></div>
        </div>
      </div>

      <!-- first-time reference intro -->
      <div id="encyIntro">
        <div class="encIntroTitle">How this reference works</div>
        <div class="encIntroText">
On the Left side → Your selected function
Either ...
1. The Recipe Book:
  • Shows the basic structure (bases → hubs → systems → mechanisms → classes → effects → final drugs).  
  • Lists every valid combination in the game.

 2. All icons
  • Shows every icon by category (bases, hubs, systems, mechanisms, indications, effects, classes, components, drugs).  
  • Click any icon to open its full profile – just like in-game “Learn more”.

You can switch between the functions by selecting the buttons at the top right of this page. 

Use this when you want to review concepts or cram for an exam, but remember: it spoils the discovery part of the game.
        </div>
        <div class="encIntroHint">You can always come back here later from the top bar.</div>
        <div class="encIntroActions">
          <button class="encIntroBtn" id="encyIntroOk" type="button">Got it</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Spoiler Warning -->
  <div id="spoilerOverlay" aria-hidden="true">
    <div class="spoilerCard" role="dialog" aria-modal="true">
      <div class="spoilerTitle">Build-A-Drug Reference Library • Spoiler Warning</div>
      <div class="spoilerText">
Opening the reference can ruin the fun — we encourage you to keep building.

But we totally get it if you’re trying to cut to the chase (it might be exam season after all… we totally understand, haha).
      </div>
      <div class="spoilerActions">
        <button class="ghostBtn" id="spoilerCancel" type="button">Never mind</button>
        <button class="dangerBtn" id="spoilerProceed" type="button">Let me in</button>
      </div>
    </div>
  </div>

  <!-- APP -->
  <div class="app" id="app">
    <div class="topbar">
      <div class="brand">
        <div class="logo">💊</div>
        <div>
          <div class="title">RxCraft</div>
          <div class="subtitle">Click to spawn • Hold to drag • Combine valid recipes only</div>
        </div>
      </div>

      <!-- Center logo button (hover grows 10%) -->
       <a class="topLogoBtn" id="topLogoBtn" href="https://rasty-fun.carrd.co/" target="_blank" rel="noopener noreferrer" aria-label="Logo button">
        <img class="topLogoImg" src="rastin-logo.png" alt="Rastin logo">
      </a>

      <div class="topRight">
        <button class="iconBtn" id="resetCanvasBtn" title="Reset canvas" type="button">↻</button>

        <button class="iconBtn refBtn" id="encyBtn" title="Open reference library (recipes + icons)" type="button">
          <span class="refIcon">📚</span>
          <span class="refText">reference library</span>
        </button>

        <div class="toast" id="toast">Ready.</div>
      </div>
    </div>

    <div class="main" id="mainLayout">
      <div class="canvasWrap" id="canvasWrap">
        <div class="canvasHint">Hold to drag. Drop near another to combine. Invalid recipes reject (red + jitter) and separate.</div>
      </div>

      <div class="sidebar">
        <section class="panel" id="basesPanel">
          <div class="panelHead">
            <div class="panelTitle">Bases</div>
            <div class="panelSub">Left-click to spawn. Right-click for Learn more.</div>
          </div>
          <div class="list" id="basesList"></div>
        </section>

        <section class="panel" id="discoveredPanel">
          <div class="panelHead">
            <div class="panelTitle">Discovered</div>
            <div class="panelSub">Filter by category. Right-click for options.</div>
          </div>

          <div class="tabsRow" id="discoveredTabs"></div>
          <div class="list" id="discoveredList"></div>

          <div class="trashDrop">
            <div class="trashZone" id="trashZone">🗑️ Drop here to delete</div>
          </div>
        </section>
      </div>
    </div>
  </div>
`;
 // ============================================================
  // ITEM DEFINITIONS
  // ============================================================
  const ITEMS = {
    I001:{ id:"I001", name:"Biology", type:"BASE", emoji:"🧬" },
    I002:{ id:"I002", name:"Chemistry", type:"BASE", emoji:"⚗️" },
    I003:{ id:"I003", name:"Therapy", type:"BASE", emoji:"🩺" },

    I010:{ id:"I010", name:"Biochemistry", type:"HUB", emoji:"🧪" },
    I011:{ id:"I011", name:"Medicine", type:"HUB", emoji:"🏥" },
    I012:{ id:"I012", name:"Drug Design", type:"HUB", emoji:"🧫" },
    I013:{ id:"I013", name:"Pharmacology", type:"HUB", emoji:"💊" },
    I014:{ id:"I014", name:"Anatomy", type:"HUB", emoji:"🦴" },
    I015:{ id:"I015", name:"Organ Systems", type:"HUB", emoji:"🫀" },
    I016:{ id:"I016", name:"Mechanisms", type:"HUB", emoji:"⚙️" },
    I017:{ id:"I017", name:"Indications", type:"HUB", emoji:"📋" },

    I020:{ id:"I020", name:"CNS", type:"SYSTEM", emoji:"🧠" },
    I021:{ id:"I021", name:"Heart", type:"SYSTEM", emoji:"❤️" },
    I022:{ id:"I022", name:"Kidney", type:"SYSTEM", emoji:"🫘" },
    I023:{ id:"I023", name:"Liver", type:"SYSTEM", emoji:"🟤" },
    I024:{ id:"I024", name:"GI Tract", type:"SYSTEM", emoji:"🍽️" },
    I025:{ id:"I025", name:"Blood Vessels", type:"SYSTEM", emoji:"🩸" },
    I026:{ id:"I026", name:"Bacteria", type:"SYSTEM", emoji:"🦠" },
    I027:{ id:"I027", name:"Metabolism", type:"SYSTEM", emoji:"🔄" },

    I030:{ id:"I030", name:"Enzyme Inhibition", type:"MECH", emoji:"⛔🧪" },
    I031:{ id:"I031", name:"Receptor Blockade", type:"MECH", emoji:"🚫📡" },
    I032:{ id:"I032", name:"Transporter Inhibition", type:"MECH", emoji:"🚧" },
    I033:{ id:"I033", name:"Ion Channel Modulation", type:"MECH", emoji:"⚡" },
    I034:{ id:"I034", name:"Cell Wall Disruption", type:"MECH", emoji:"🧱💥" },
    I035:{ id:"I035", name:"Acid Suppression", type:"MECH", emoji:"🔻🧪" },

    I040:{ id:"I040", name:"Insomnia", type:"INDICATION", emoji:"🌙" },
    I041:{ id:"I041", name:"Infection", type:"INDICATION", emoji:"🤒" },
    I042:{ id:"I042", name:"Type 2 Diabetes", type:"INDICATION", emoji:"🍬" },
    I043:{ id:"I043", name:"Edema / Fluid Overload", type:"INDICATION", emoji:"💧" },
    I044:{ id:"I044", name:"Hypertension", type:"INDICATION", emoji:"📈" },
    I045:{ id:"I045", name:"Hyperlipidemia", type:"INDICATION", emoji:"🧈" },
    I046:{ id:"I046", name:"GERD / Ulcer", type:"INDICATION", emoji:"🔥" },

    I050:{ id:"I050", name:"Sedation", type:"EFFECT", emoji:"😴" },
    I051:{ id:"I051", name:"Kill Bacteria", type:"EFFECT", emoji:"☠️🦠" },
    I052:{ id:"I052", name:"Control Glucose", type:"EFFECT", emoji:"📉🍬" },
    I053:{ id:"I053", name:"Diuresis", type:"EFFECT", emoji:"🚽" },
    I054:{ id:"I054", name:"Lower BP", type:"EFFECT", emoji:"📉❤️" },
    I055:{ id:"I055", name:"Lower Cholesterol", type:"EFFECT", emoji:"🧽🩸" },
    I056:{ id:"I056", name:"Reduce Acid", type:"EFFECT", emoji:"🧯" },
    I057:{ id:"I057", name:"Vasodilation", type:"EFFECT", emoji:"🌊" },

    I060:{ id:"I060", name:"Z-Hypnotic Pathway", type:"CLASS", emoji:"🌙💤" },
    I061:{ id:"I061", name:"Aminopenicillin Pathway", type:"CLASS", emoji:"🧫🦠" },
    I062:{ id:"I062", name:"β-Lactamase Inhibitor Pathway", type:"CLASS", emoji:"🛡️🦠" },
    I063:{ id:"I063", name:"Biguanide Pathway", type:"CLASS", emoji:"🔄🍬" },
    I064:{ id:"I064", name:"Loop Diuretic Pathway", type:"CLASS", emoji:"🔁🚽" },
    I065:{ id:"I065", name:"Statin Pathway", type:"CLASS", emoji:"🧽🧈" },
    I066:{ id:"I066", name:"β1-Blocker Pathway", type:"CLASS", emoji:"🚫❤️" },
    I067:{ id:"I067", name:"Thiazide Pathway", type:"CLASS", emoji:"🚿" },
    I068:{ id:"I068", name:"PPI Pathway", type:"CLASS", emoji:"🔒🔥" },
    I069:{ id:"I069", name:"DHP-CCB Pathway", type:"CLASS", emoji:"🚪⚡" },

    I070:{ id:"I070", name:"Clavulanate", type:"COMPONENT", emoji:"🔗" },

    I100:{ id:"I100", name:"Zolpidem (Ambien)", type:"DRUG", emoji:"🌙💊" },
    I101:{ id:"I101", name:"Amoxicillin (Amoxil)", type:"DRUG", emoji:"💊🦠" },
    I102:{ id:"I102", name:"Augmentin", type:"DRUG", emoji:"💊🛡️" },
    I103:{ id:"I103", name:"Metformin (Glucophage)", type:"DRUG", emoji:"💊🍬" },
    I104:{ id:"I104", name:"Furosemide (Lasix)", type:"DRUG", emoji:"💊🚽" },
    I105:{ id:"I105", name:"Atorvastatin (Lipitor)", type:"DRUG", emoji:"💊🧽" },
    I106:{ id:"I106", name:"Metoprolol (Lopressor)", type:"DRUG", emoji:"💊❤️" },
    I107:{ id:"I107", name:"HCTZ (Microzide)", type:"DRUG", emoji:"💊🚿" },
    I108:{ id:"I108", name:"Esomeprazole (Nexium)", type:"DRUG", emoji:"💊🔥" },
    I109:{ id:"I109", name:"Amlodipine (Norvasc)", type:"DRUG", emoji:"💊🌊" },
        // =========================
    // NEW SYSTEMS Feb 7, 2026
    // =========================
    I028:{ id:"I028", name:"Lungs", type:"SYSTEM", emoji:"🫁" },
    I029:{ id:"I029", name:"Immune System", type:"SYSTEM", emoji:"🛡️" },

    // =========================
    // NEW MECHANISMS Feb 7, 2026
    // (IDs chosen to avoid collisions with existing I040–I070 ranges)
    // =========================
    I036:{ id:"I036", name:"COX Inhibition", type:"MECH", emoji:"🧯🩹" },
    I037:{ id:"I037", name:"Monoamine Reuptake Inhibition", type:"MECH", emoji:"🧠🔁" },
    I038:{ id:"I038", name:"β2-Adrenergic Agonism", type:"MECH", emoji:"🫁⚡" },
    I079:{ id:"I079", name:"Dual Monoamine Reuptake Inhibition", type:"MECH", emoji:"🧠🔁🔁" },
    I080:{ id:"I080", name:"H1 Receptor Blockade", type:"MECH", emoji:"🤧🚫" },
    I081:{ id:"I081", name:"ACE Inhibition", type:"MECH", emoji:"🩸🔒" },
    I082:{ id:"I082", name:"Glucocorticoid Receptor Activation", type:"MECH", emoji:"🛡️✨" },

    // =========================
    // NEW INDICATIONS Feb 7, 2026
    // (Avoid collision with existing I050+ effect IDs)
    // =========================
    I047:{ id:"I047", name:"Pain / Fever", type:"INDICATION", emoji:"🌡️" },
    I048:{ id:"I048", name:"Depression / Anxiety", type:"INDICATION", emoji:"💭" },
    I049:{ id:"I049", name:"Asthma / COPD", type:"INDICATION", emoji:"🌬️" },
    I090:{ id:"I090", name:"Allergic Rhinitis / Urticaria", type:"INDICATION", emoji:"🤧" },
    I091:{ id:"I091", name:"Urinary Tract Infection", type:"INDICATION", emoji:"🚻" },

    // =========================
    // NEW EFFECTS Feb 7, 2026
    // (Use high IDs to avoid conflicts with existing CLASS IDs like I060–I069)
    // =========================
    I150:{ id:"I150", name:"Analgesia / Antipyresis", type:"EFFECT", emoji:"🩹" },
    I151:{ id:"I151", name:"Improve Mood", type:"EFFECT", emoji:"🌤️" },
    I152:{ id:"I152", name:"Bronchodilation", type:"EFFECT", emoji:"🫁💨" },
    I153:{ id:"I153", name:"Reduce Inflammation", type:"EFFECT", emoji:"🧊" },
    I154:{ id:"I154", name:"Relieve Allergy Symptoms", type:"EFFECT", emoji:"🌼" },

    // =========================
    // NEW CLASSES / PATHWAYS Feb 7, 2026
    // (Start at I071 to avoid collision with I070 Clavulanate component)
    // =========================
    I071:{ id:"I071", name:"Acetaminophen Pathway", type:"CLASS", emoji:"🌡️🩹" },
    I072:{ id:"I072", name:"NSAID Pathway", type:"CLASS", emoji:"🧯🩹" },
    I073:{ id:"I073", name:"SSRI Pathway", type:"CLASS", emoji:"🧠💛" },
    I074:{ id:"I074", name:"SNRI Pathway", type:"CLASS", emoji:"🧠❤️" },
    I075:{ id:"I075", name:"SABA Pathway", type:"CLASS", emoji:"🫁⚡" },
    I076:{ id:"I076", name:"ICS/LABA Combination Pathway", type:"CLASS", emoji:"🛡️🫁" },
    I077:{ id:"I077", name:"Antihistamine Pathway", type:"CLASS", emoji:"🤧🧼" },
    I078:{ id:"I078", name:"Nitrofurantoin Pathway", type:"CLASS", emoji:"🚻🦠" },
    I084:{ id:"I084", name:"ACE-Inhibitor Pathway", type:"CLASS", emoji:"🩸📉" },

    // =========================
    // NEW DRUGS Feb 7, 2026
    // =========================
    I110:{ id:"I110", name:"Acetaminophen (Tylenol)", type:"DRUG", emoji:"💊🌡️" },
    I111:{ id:"I111", name:"Ibuprofen (Advil)", type:"DRUG", emoji:"💊🩹" },
    I112:{ id:"I112", name:"Naproxen (Aleve)", type:"DRUG", emoji:"💊⏳" },
    I113:{ id:"I113", name:"Aspirin (ASA)", type:"DRUG", emoji:"💊🩸" },
    I114:{ id:"I114", name:"Celecoxib (Celebrex)", type:"DRUG", emoji:"💊🎯" },

    I115:{ id:"I115", name:"Sertraline (Zoloft)", type:"DRUG", emoji:"💊💭" },
    I116:{ id:"I116", name:"Escitalopram (Cipralex)", type:"DRUG", emoji:"💊🙂" },
    I117:{ id:"I117", name:"Fluoxetine (Prozac)", type:"DRUG", emoji:"💊⚡" },
    I118:{ id:"I118", name:"Venlafaxine XR (Effexor XR)", type:"DRUG", emoji:"💊📈" },
    I119:{ id:"I119", name:"Duloxetine (Cymbalta)", type:"DRUG", emoji:"💊🧠" },

    I120:{ id:"I120", name:"Salbutamol (Ventolin)", type:"DRUG", emoji:"💊🫁" },
    I121:{ id:"I121", name:"Budesonide/Formoterol (Symbicort)", type:"DRUG", emoji:"💊🛡️" },

    I122:{ id:"I122", name:"Cetirizine (Reactine)", type:"DRUG", emoji:"💊🌼" },
    I123:{ id:"I123", name:"Loratadine (Claritin)", type:"DRUG", emoji:"💊☀️" },
    I124:{ id:"I124", name:"Fexofenadine (Allegra)", type:"DRUG", emoji:"💊🕊️" },

    I125:{ id:"I125", name:"Azithromycin (Zithromax)", type:"DRUG", emoji:"💊🎵" },
    I126:{ id:"I126", name:"Doxycycline", type:"DRUG", emoji:"💊🌞" },
    I127:{ id:"I127", name:"Cephalexin (Keflex)", type:"DRUG", emoji:"💊🧱" },
    I128:{ id:"I128", name:"TMP–SMX (Septra)", type:"DRUG", emoji:"💊🧬" },
    I129:{ id:"I129", name:"Nitrofurantoin (Macrobid)", type:"DRUG", emoji:"💊🚻" },

    I130:{ id:"I130", name:"Ramipril (Altace)", type:"DRUG", emoji:"💊📉" },

  };

  const TAG_FOR_TYPE = {
    BASE:"Base", HUB:"Hub", SYSTEM:"System", MECH:"Mechanism",
    INDICATION:"Indication", EFFECT:"Effect", CLASS:"Class", COMPONENT:"Component", DRUG:"Drug"
  };

  // ============================================================
  // RECIPES
  // ============================================================
  const RECIPES = Object.create(null);
  const ITEM_RECIPE = Object.create(null);
  function keyFor(a,b){ return [a,b].sort().join("|"); }
  function addRecipe(a,b,result){
    RECIPES[keyFor(a,b)] = result;
    ITEM_RECIPE[result] = { a, b };
  }

  addRecipe("I001","I002","I010");
  addRecipe("I001","I003","I011");
  addRecipe("I002","I003","I012");
  addRecipe("I010","I011","I013");
  addRecipe("I011","I011","I014");
  addRecipe("I014","I014","I015");
  addRecipe("I012","I012","I016");
  addRecipe("I011","I012","I017");

  addRecipe("I015","I013","I020");
  addRecipe("I015","I014","I021");
  addRecipe("I015","I011","I022");
  addRecipe("I015","I010","I023");
  addRecipe("I015","I003","I024");
  addRecipe("I021","I015","I025");
  addRecipe("I010","I010","I026");
  addRecipe("I023","I010","I027");

  addRecipe("I016","I010","I030");
  addRecipe("I016","I011","I031");
  addRecipe("I016","I002","I032");
  addRecipe("I016","I001","I033");
  addRecipe("I016","I026","I034");
  addRecipe("I016","I024","I035");

  addRecipe("I017","I020","I040");
  addRecipe("I017","I026","I041");
  addRecipe("I017","I027","I042");
  addRecipe("I017","I022","I043");
  addRecipe("I017","I025","I044");
  addRecipe("I017","I023","I045");
  addRecipe("I017","I024","I046");

  addRecipe("I040","I003","I050");
  addRecipe("I041","I003","I051");
  addRecipe("I042","I003","I052");
  addRecipe("I043","I003","I053");
  addRecipe("I044","I003","I054");
  addRecipe("I045","I003","I055");
  addRecipe("I046","I003","I056");
  addRecipe("I025","I003","I057");

  addRecipe("I020","I033","I060");
  addRecipe("I026","I034","I061");
  addRecipe("I026","I030","I062");
  addRecipe("I027","I030","I063");
  addRecipe("I022","I032","I064");
  addRecipe("I023","I030","I065");
  addRecipe("I021","I031","I066");
  addRecipe("I022","I030","I067");
  addRecipe("I024","I035","I068");
  addRecipe("I025","I033","I069");

  addRecipe("I060","I050","I100");
  addRecipe("I061","I051","I101");
  addRecipe("I063","I052","I103");
  addRecipe("I064","I053","I104");
  addRecipe("I065","I055","I105");
  addRecipe("I066","I054","I106");
  addRecipe("I067","I054","I107");
  addRecipe("I068","I056","I108");
  addRecipe("I069","I057","I109");

  addRecipe("I062","I051","I070");
  addRecipe("I101","I070","I102");
  addRecipe("I015","I024","I028"); // Organ Systems + GI Tract -> Lungs
  addRecipe("I015","I017","I029"); // Organ Systems + Indications -> Immune System

  // =========================
  // NEW MECHANISMS Feb 7, 2026
  // =========================
  addRecipe("I016","I015","I036"); // Mechanisms + Organ Systems -> COX Inhibition
  addRecipe("I016","I020","I037"); // Mechanisms + CNS -> Monoamine Reuptake Inhibition
  addRecipe("I016","I028","I038"); // Mechanisms + Lungs -> β2-Agonism
  addRecipe("I037","I037","I079"); // Monoamine RI + Monoamine RI -> Dual Monoamine RI
  addRecipe("I016","I029","I080"); // Mechanisms + Immune System -> H1 Blockade
  addRecipe("I031","I025","I081"); // Receptor Blockade + Blood Vessels -> ACE Inhibition
  addRecipe("I016","I014","I082"); // Mechanisms + Anatomy -> Glucocorticoid Receptor Activation

  // =========================
  // NEW INDICATIONS Feb 7, 2026
  // =========================
  addRecipe("I017","I011","I047"); // Indications + Medicine -> Pain/Fever
  addRecipe("I017","I013","I048"); // Indications + Pharmacology -> Depression/Anxiety
  addRecipe("I017","I028","I049"); // Indications + Lungs -> Asthma/COPD
  addRecipe("I017","I029","I090"); // Indications + Immune System -> Allergic Rhinitis/Urticaria
  addRecipe("I017","I014","I091"); // Indications + Anatomy -> UTI

  // =========================
  // NEW EFFECTS Feb 7, 2026
  // =========================
  addRecipe("I047","I003","I150"); // Pain/Fever + Therapy -> Analgesia/Antipyresis
  addRecipe("I048","I003","I151"); // Depression/Anxiety + Therapy -> Improve Mood
  addRecipe("I049","I003","I152"); // Asthma/COPD + Therapy -> Bronchodilation
  addRecipe("I049","I015","I153"); // Asthma/COPD + Organ Systems -> Reduce Inflammation
  addRecipe("I090","I003","I154"); // Allergy + Therapy -> Relieve Allergy Symptoms

  // =========================
  // NEW CLASS / PATHWAY RECIPES (SYSTEM + MECH -> CLASS) Feb 7, 2026
  // =========================
  addRecipe("I020","I036","I071"); // CNS + COX Inhibition -> Acetaminophen Pathway
  addRecipe("I015","I036","I072"); // Organ Systems + COX Inhibition -> NSAID Pathway
  addRecipe("I020","I037","I073"); // CNS + Monoamine RI -> SSRI Pathway
  addRecipe("I020","I079","I074"); // CNS + Dual Monoamine RI -> SNRI Pathway
  addRecipe("I028","I038","I075"); // Lungs + β2-Agonism -> SABA Pathway
  addRecipe("I028","I082","I076"); // Lungs + Glucocorticoid RA -> ICS/LABA Pathway
  addRecipe("I029","I080","I077"); // Immune + H1 Blockade -> Antihistamine Pathway
  addRecipe("I022","I034","I078"); // Kidney + Cell Wall Disruption -> Nitrofurantoin Pathway
  addRecipe("I025","I081","I084"); // Blood Vessels + ACE Inhibition -> ACE-Inhibitor Pathway

  // =========================
  // NEW DRUG CRAFTS Feb 7, 2026
  // (Two-item recipes, designed to avoid overwriting your existing ones)
  // =========================
  addRecipe("I071","I150","I110"); // Acetaminophen Pathway + Analgesia -> Tylenol

  // NSAIDs (same pathway, different “signature” inputs)
  addRecipe("I072","I001","I111"); // NSAID + Biology -> Ibuprofen
  addRecipe("I072","I002","I112"); // NSAID + Chemistry -> Naproxen
  addRecipe("I072","I003","I113"); // NSAID + Therapy -> Aspirin
  addRecipe("I072","I023","I114"); // NSAID + Liver -> Celecoxib

  // SSRIs
  addRecipe("I073","I001","I115"); // SSRI + Biology -> Sertraline
  addRecipe("I073","I002","I116"); // SSRI + Chemistry -> Escitalopram
  addRecipe("I073","I003","I117"); // SSRI + Therapy -> Fluoxetine

  // SNRIs
  addRecipe("I074","I001","I118"); // SNRI + Biology -> Venlafaxine XR
  addRecipe("I074","I002","I119"); // SNRI + Chemistry -> Duloxetine

  // Respiratory
  addRecipe("I075","I152","I120"); // SABA + Bronchodilation -> Salbutamol
  addRecipe("I076","I153","I121"); // ICS/LABA + Reduce Inflammation -> Symbicort

  // Antihistamines
  addRecipe("I077","I001","I122"); // Antihistamine + Biology -> Cetirizine
  addRecipe("I077","I002","I123"); // Antihistamine + Chemistry -> Loratadine
  addRecipe("I077","I003","I124"); // Antihistamine + Therapy -> Fexofenadine

  // Antibiotics (simple “bacteria + X” crafts)
  addRecipe("I026","I035","I125"); // Bacteria + Acid Suppression -> Azithro
  addRecipe("I026","I027","I126"); // Bacteria + Metabolism -> Doxycycline
  addRecipe("I026","I014","I127"); // Bacteria + Anatomy -> Cephalexin
  addRecipe("I026","I032","I128"); // Bacteria + Transporter Inhibition -> TMP-SMX

  // UTI + ACEi drug
  addRecipe("I078","I051","I129"); // Nitrofurantoin Pathway + Kill Bacteria -> Nitrofurantoin
  addRecipe("I084","I054","I130"); // ACE-Inhibitor Pathway + Lower BP -> Ramipril


  ITEM_RECIPE.I001 = null;
  ITEM_RECIPE.I002 = null;
  ITEM_RECIPE.I003 = null;

  // ============================================================
  // DESCRIPTIONS (PORTFOLIOS) — same as your last build
  // ============================================================
  const ITEM_DESC = {
    I001: `Biology represents the study of living systems, including cells, tissues, organs, and physiological pathways. In pharmacology, biology defines where drugs act and how normal vs pathological processes function. Understanding biology is essential for predicting therapeutic effects, side effects, and contraindications. Pharmacy students rely on biological knowledge to link drug action to organ systems, disease states, and patient-specific variables such as age or comorbidities.`,
    I002: `Chemistry underpins all drug behavior, including structure, bonding, solubility, and reactivity. It explains how drugs interact with receptors, enzymes, and transporters at a molecular level. For pharmacy students, chemistry is critical for understanding mechanism of action, metabolism, drug stability, and formulation differences (e.g., salts, prodrugs). Many adverse effects and interactions originate from chemical properties.`,
    I003: `Therapy represents the intent to treat, prevent, or manage disease. In pharmacy, therapy connects scientific drug action to clinical decision-making. It frames why a medication is chosen, how it fits into guidelines, and what outcomes are desired. Therapy-focused thinking is essential for patient counseling, treatment selection, and evaluating risk vs benefit.`,

    I100: `Class/MOA: Non-benzodiazepine hypnotic (“Z-drug”); enhances GABA-A activity with relative selectivity for sedation.
Indications: Short-term treatment of insomnia (sleep initiation; formulation-dependent).
Adult dosing (IR): Take immediately before bed when you can stay asleep 7–8 hours. Typical initial dose: 5 mg for women, 5–10 mg for men; max 10 mg nightly. Older adults/debilitated or mild–moderate hepatic impairment: 5 mg nightly. Use lowest effective dose; keep duration short.
Key adverse effects/risks: Next-day impairment, dizziness, complex sleep behaviors (sleep-walking/driving), CNS depression—worse with alcohol/other sedatives.
Counseling pearls: Don’t take with alcohol; avoid driving if drowsy; take only when ready to sleep; stop and seek care if abnormal behaviors occur.
Exam notes: Controlled substance C-IV; dose/sex differences are high-yield.`,
    I101: `Class/MOA: Aminopenicillin (β-lactam); inhibits bacterial cell wall synthesis → bactericidal.
Indications: Commonly ENT/respiratory, skin, and GU infections depending on organism/susceptibility.
Adult dosing (typical ranges): For many mild–moderate infections: 250 mg q8h or 500 mg q12h; more severe: 500 mg q8h or 875 mg q12h (regimen depends on site/severity). Pediatrics dosing is weight-based.
Key adverse effects: GI upset/diarrhea; rash (consider EBV-associated rash); hypersensitivity reactions (immediate allergy contraindicates penicillins).
Interactions/considerations: Dose adjustments may be needed in renal impairment (check institutional guidance); counsel that antibiotics don’t treat viral infections and to finish the course.
Exam notes: Not β-lactamase stable—treatment failure with β-lactamase producers is a classic reason to choose amox-clav.`,
    I102: `Class/MOA: Amoxicillin + β-lactamase inhibitor (clavulanate). Clavulanate protects amoxicillin from β-lactamase, expanding coverage against many resistant organisms.
Indications: Selected respiratory, skin/soft tissue, bite wounds, and other infections where β-lactamase organisms are suspected.
Adult dosing (common): Many regimens use 500 mg/125 mg q8h or 875 mg/125 mg q12h; severe respiratory infections often 875 mg q12h (formulation-dependent). Take with food to reduce GI upset.
Key adverse effects: Diarrhea/GI upset is common; risk of hypersensitivity; consider C. difficile if severe/prolonged diarrhea.
Counseling pearls: Take at start of a meal; report severe diarrhea; allergy history matters.
Exam notes: “Clav” adds protection, not more killing—think “shield.”`,
    I103: `Class/MOA: Biguanide; decreases hepatic glucose production and improves insulin sensitivity (no insulin secretion stimulation).
Indication: First-line for type 2 diabetes unless contraindicated.
Adult dosing: IR start 500 mg BID (or 850 mg daily) with meals; titrate gradually (e.g., 500 mg weekly) to tolerability/glycemic goals; max 2550 mg/day (IR). ER: commonly 500 mg daily with evening meal, titrate to max 2000 mg daily (product-dependent).
Key adverse effects: GI upset/diarrhea (titrate slowly; take with food). Rare but serious lactic acidosis risk—higher with significant renal impairment.
Renal safety: Contraindicated with eGFR <30 mL/min/1.73m²; reassess renal function periodically and when clinical status changes.
Exam notes: Weight-neutral or modest loss; low hypoglycemia risk as monotherapy; B12 deficiency can occur with long-term use (monitor if symptomatic).`,
    I104: `Class/MOA: Loop diuretic; inhibits Na⁺-K⁺-2Cl⁻ transport in thick ascending limb → potent diuresis and electrolyte loss.
Indications: Edema from HF, cirrhosis, renal disease (incl. nephrotic syndrome); sometimes hypertension (less common long-term vs thiazides).
Adult dosing (typical): Edema often starts around 20–80 mg PO as a single dose; may repeat in 6–8 hours or titrate upward based on response. Hypertension regimens vary; dosing is individualized.
Key adverse effects: Hypokalemia, hyponatremia, dehydration, hypotension; ototoxicity risk (especially high doses/IV rapid).
Monitoring: Weight/edema, BP, renal function, electrolytes (K⁺/Mg²⁺/Na⁺).
Counseling pearls: Take earlier in day to avoid nocturia; recognize dizziness/dehydration; potassium strategies per prescriber.
Exam notes: “Loops lose K⁺”; strongest diuretics for acute volume overload.`,
    I105: `Class/MOA: Statin; inhibits HMG-CoA reductase → lowers LDL-C and reduces ASCVD risk.
Indications: Hyperlipidemia; primary/secondary prevention of cardiovascular events per risk-based guidelines.
Adult dosing: Typical start 10–20 mg once daily; range 10–80 mg daily. Can be taken any time of day, with or without food; recheck lipids and adjust as early as ~4 weeks when clinically appropriate.
Key adverse effects: Myalgias/myopathy (rare rhabdomyolysis), elevated liver enzymes; new-onset diabetes risk is small but recognized.
Interactions: CYP3A4 inhibitors/strong interacting drugs can increase levels (higher myopathy risk).
Monitoring: Lipid panel response, symptoms of muscle pain/weakness; LFTs when indicated.
Counseling pearls: Report unexplained muscle pain/dark urine; don’t double doses if one is missed.
Exam notes: High-intensity dosing (40–80 mg) is common for higher LDL reductions/ASCVD risk.`,
    I106: `Class/MOA: β1-selective beta blocker (dose-dependent selectivity); decreases HR/contractility and BP.
Indications: Hypertension, angina; specific protocols for post-MI and other cardiac indications (formulation and setting matter).
Adult dosing (general): Oral dosing is individualized; commonly given in divided doses and with/after meals. Example labeling includes titration strategies and disease-specific regimens (e.g., post-MI protocols).
Key adverse effects: Bradycardia, hypotension, fatigue, dizziness; may mask hypoglycemia symptoms; caution in asthma/COPD (more selective than nonselective, but not risk-free).
Interactions: Additive bradycardia with other AV-node blockers; careful withdrawal—avoid abrupt stopping (rebound angina/HTN).
Monitoring: HR, BP, symptom control, signs of heart block or worsening HF.
Exam notes: Distinguish tartrate (shorter-acting, BID) vs succinate (ER, HF evidence).`,
    I107: `Class/MOA: Thiazide diuretic; blocks NaCl reabsorption in distal convoluted tubule → mild diuresis and BP lowering.
Indications: Hypertension; edema (less potent than loops).
Adult dosing (common): Hypertension often starts around 12.5–25 mg once daily; many labels note doses >50 mg/day aren’t recommended for HTN due to diminishing benefit and more electrolyte issues. Edema dosing can be higher and individualized.
Key adverse effects: Hypokalemia/hypomagnesemia, hyponatremia; metabolic effects—hyperuricemia (gout), hyperglycemia; photosensitivity can occur.
Monitoring: Electrolytes (K⁺/Na⁺/Mg²⁺), renal function, uric acid/glucose in at-risk patients; BP response.
Counseling pearls: Take in morning; recognize muscle cramps/weakness (low K⁺); hydration guidance per prescriber.
Exam notes: “Thiazides raise sugar/uric acid”; great first-line for uncomplicated HTN in many patients.`,
    I108: `Class/MOA: Proton pump inhibitor (PPI); irreversibly inhibits gastric H⁺/K⁺ ATPase → strong acid suppression.
Indications: Symptomatic GERD, erosive esophagitis healing/maintenance; NSAID ulcer risk reduction; H. pylori regimens (with antibiotics).
Adult dosing (examples): Symptomatic GERD often 20 mg once daily for ~4 weeks; erosive esophagitis 20–40 mg daily for 4–8 weeks (indication-dependent). Take at least 1 hour before meals for best effect.
Key adverse effects/risks: Headache, diarrhea; with long-term use—hypomagnesemia, B12 deficiency, fracture risk, and enteric infections are commonly tested considerations.
Interactions: Can affect absorption of drugs needing acid; check interacting meds case-by-case.
Counseling pearls: Don’t crush/chew delayed-release; symptom relief may take days; use shortest effective duration when appropriate.
Exam notes: PPIs are “irreversible”—effect persists beyond plasma half-life.`,
    I109: `Class/MOA: Dihydropyridine calcium channel blocker; blocks L-type Ca²⁺ channels in vascular smooth muscle → vasodilation (BP lowering).
Indications: Hypertension; also used for angina (depending on clinical context).
Adult dosing: Typical start 5 mg once daily, max 10 mg once daily. Small/fragile/elderly or hepatic impairment may start 2.5 mg daily.
Key adverse effects: Peripheral edema (very common, dose-related), flushing, dizziness, headache; reflex tachycardia is less prominent than short-acting DHPs but can occur.
Interactions: Generally fewer than many cardio meds; still check for additive hypotension with other antihypertensives.
Monitoring: BP, edema, heart rate/symptoms in angina patients.
Counseling pearls: Edema is not “allergy”—often managed by dose adjustment or combination strategy; take consistently daily.
Exam notes: DHPs → vessels; non-DHPs (verapamil/diltiazem) → more cardiac conduction effects.`,
  // ===== B) FOUNDATIONAL HUBS =====
  I010: `Biochemistry bridges biology and chemistry, focusing on molecular processes within living systems. It explains enzyme activity, metabolic pathways, and receptor signaling. Pharmacy students use biochemistry to understand drug metabolism, pharmacodynamics, and biochemical disease mechanisms (e.g., insulin resistance, cholesterol synthesis).`,

  I011: `Medicine represents applied clinical knowledge used to diagnose and treat disease. It integrates patient presentation, pathology, and treatment strategies. For pharmacy students, medicine provides context for therapeutic choices, monitoring parameters, and interprofessional collaboration.`,

  I012: `Drug design focuses on how medications are developed to interact with biological targets. It includes considerations such as selectivity, potency, bioavailability, and safety. Pharmacy students benefit from understanding drug design to appreciate why drugs differ within the same class and how modifications affect efficacy and adverse effects.`,

  I013: `Pharmacology is the core science of drugs, encompassing pharmacodynamics (what the drug does to the body) and pharmacokinetics (what the body does to the drug). It is central to pharmacy education and exam testing, linking mechanism, dosing, effects, and toxicity.`,

  I014: `Anatomy is the structural organization of the human body. In pharmacy, anatomy helps students localize drug effects, understand organ-specific toxicity, and connect symptoms to affected systems (e.g., kidney injury affecting drug clearance).`,

  I015: `Organ systems group anatomical structures into functional units (e.g., cardiovascular, renal). Pharmacotherapy is often organized by system, making this concept foundational for studying drug classes, adverse effects, and contraindications.`,

  I016: `Mechanisms describe how drugs produce effects at a molecular or cellular level. Understanding mechanisms allows pharmacy students to predict therapeutic outcomes, side effects, interactions, and cross-reactivity between drug classes—making it one of the highest-yield exam topics.`,

  I017: `Indications define the approved or accepted clinical uses of a drug. They link disease states to pharmacologic intervention. For exams and practice, knowing indications prevents inappropriate therapy and supports evidence-based prescribing.`,

  // ===== C) SYSTEMS / TARGET AREAS =====
  I020: `The CNS includes the brain and spinal cord and regulates consciousness, behavior, and autonomic function. CNS-active drugs often affect neurotransmission and carry risks such as sedation, dependence, or cognitive impairment.`,

  I021: `The heart controls circulation and cardiac output. Drugs targeting the heart often affect heart rate, rhythm, or contractility and require careful monitoring due to risks of bradycardia, hypotension, or conduction abnormalities.`,

  I022: `The kidneys regulate fluid balance, electrolytes, and drug excretion. Many drugs require renal dose adjustments. Nephrotoxicity and electrolyte disturbances are major pharmacy considerations.`,

  I023: `The liver is the primary site of drug metabolism. Hepatic function influences drug clearance, interactions (e.g., CYP enzymes), and toxicity. Pharmacy exams heavily test liver-related pharmacokinetics.`,

  I024: `The GI tract affects drug absorption and is a target for acid-related disorders. Many drugs cause GI side effects, and food timing can significantly affect efficacy.`,

  I025: `Blood vessels regulate blood pressure and tissue perfusion. Vascular-targeting drugs often cause vasodilation or constriction, influencing BP and edema risk.`,

  I026: `Bacteria are pathogenic microorganisms targeted by antibiotics. Understanding bacterial structure and resistance mechanisms is critical for selecting appropriate antimicrobial therapy.`,

  I027: `Metabolism refers to biochemical processes that regulate energy and glucose balance. Drugs affecting metabolism are central in diabetes and endocrine pharmacotherapy.`,

  // ===== D) MECHANISMS (EXAM-FRIENDLY) =====
  I030: `Enzyme inhibition reduces or blocks enzyme activity, altering biochemical pathways. Many major drug classes (statins, PPIs, metformin) rely on this mechanism.`,

  I031: `Receptor blockade prevents endogenous ligands from activating receptors. Common in cardiovascular and CNS drugs; effects depend on receptor selectivity.`,

  I032: `Transporter inhibition blocks movement of substances across membranes (e.g., sodium, glucose). This mechanism is common in diuretics and metabolic drugs.`,

  I033: `Ion channel modulation alters electrical signaling in nerves and muscles. It is critical in CNS, cardiac, and vascular pharmacology.`,

  I034: `This mechanism weakens bacterial cell walls, causing lysis. It is specific to bacteria, making it a cornerstone of antibiotic selectivity.`,

  I035: `Acid suppression reduces gastric acid production. PPIs and related drugs are heavily tested due to long-term safety considerations.`,

  // ===== E) INDICATIONS (HIGH-LEVEL CONDITIONS/GOALS) =====
  I040: `Insomnia is a sleep disorder characterized by difficulty initiating sleep, maintaining sleep, or achieving restorative sleep despite adequate opportunity. It may be acute or chronic and is often associated with stress, psychiatric conditions, medications, or poor sleep hygiene. Pharmacologic treatment focuses on short-term symptom relief while minimizing next-day impairment and dependence. Pharmacy students should understand non-pharmacologic first-line strategies (sleep hygiene, CBT-I) and the risks of sedative-hypnotics, including tolerance and complex sleep behaviors.`,

  I041: `Infection occurs when pathogenic microorganisms invade host tissues and provoke an immune response. In pharmacotherapy, infections are classified by organism, site, severity, and resistance patterns. Antibiotic selection depends on likely pathogens, spectrum of activity, patient factors, and local resistance data. High-yield pharmacy concepts include bactericidal vs bacteriostatic action, antimicrobial stewardship, and adverse effects such as C. difficile infection.`,

  I042: `Type 2 diabetes is a chronic metabolic disorder marked by insulin resistance and progressive β-cell dysfunction, leading to hyperglycemia. Management prioritizes lifestyle modification and pharmacologic agents that improve glycemic control while reducing cardiovascular risk. Pharmacy students must understand treatment algorithms, hypoglycemia risk, renal considerations, and long-term complications such as neuropathy, nephropathy, and cardiovascular disease.`,

  I043: `Edema results from excess interstitial fluid accumulation due to heart failure, renal disease, liver disease, or venous insufficiency. Pharmacologic management often involves diuretics to reduce volume overload and improve symptoms. Key exam concepts include distinguishing causes of edema, monitoring electrolytes, and recognizing signs of dehydration or renal dysfunction.`,

  I044: `Hypertension is persistently elevated arterial blood pressure and a major risk factor for stroke, myocardial infarction, and kidney disease. Treatment involves lifestyle changes and antihypertensive medications selected based on comorbidities and patient profile. Pharmacy students must understand BP targets, first-line drug classes, and adverse effects such as orthostasis and electrolyte imbalance.`,

  I045: `Hyperlipidemia refers to elevated cholesterol and/or triglycerides, contributing to atherosclerotic cardiovascular disease (ASCVD). Pharmacologic therapy focuses on LDL reduction and overall risk mitigation. Exams emphasize statin intensity, lipid targets vs risk-based therapy, and monitoring for muscle and liver toxicity.`,

  I046: `Gastroesophageal reflux disease (GERD) and peptic ulcer disease result from excessive or poorly controlled gastric acid exposure. Treatment includes acid suppression, mucosal protection, and eradication of contributing factors such as NSAIDs or H. pylori. Pharmacy students should understand step-down therapy, long-term PPI risks, and appropriate treatment duration.`,

  // ===== F) EFFECTS (CLINICAL OUTCOMES) =====
  I050: `Sedation is a reduction in alertness and CNS activity. Therapeutically, it is used to promote sleep or reduce agitation but carries risks such as impaired cognition, falls, and respiratory depression. Exam questions often test differentiation between sedation, anxiolysis, and anesthesia.`,

  I051: `Bacterial killing refers to bactericidal activity, resulting in organism death rather than growth inhibition. This effect is essential in severe infections and immunocompromised patients. Pharmacy students must recognize which drug classes are bactericidal and how resistance mechanisms interfere with this effect.`,

  I052: `Glucose control aims to maintain blood sugar within target ranges to prevent acute and chronic complications of diabetes. Pharmacologic strategies vary in mechanism, hypoglycemia risk, and weight effects. Exams frequently test mechanism-based differences between agents.`,

  I053: `Diuresis increases urine output to remove excess fluid and electrolytes. It is central to treating edema and hypertension. High-yield topics include electrolyte disturbances, diuretic potency, and site of action within the nephron.`,

  I054: `Blood pressure reduction decreases cardiovascular morbidity and mortality. Pharmacologic BP lowering can occur via effects on heart rate, vascular tone, or fluid balance. Exams emphasize class-specific side effects and combination therapy rationale.`,

  I055: `Cholesterol reduction primarily targets LDL to reduce ASCVD risk. The degree of lowering correlates with clinical benefit. Pharmacy students must understand lipid panels, statin intensity, and adjunctive therapies.`,

  I056: `Acid reduction decreases gastric acidity to relieve symptoms and promote mucosal healing. Chronic acid suppression has systemic implications, making risk–benefit assessment essential.`,

  I057: `Vasodilation relaxes vascular smooth muscle, reducing peripheral resistance and blood pressure. While beneficial, it may cause reflex tachycardia and peripheral edema. Exams test differentiation between arterial vs venous dilation.`,

  // ===== G) DRUG CLASSES / PATHWAYS =====
  I060: `Non-benzodiazepine hypnotics selectively enhance GABA-mediated sedation. Emphasis is placed on short-term use and safety counseling.`,

  I061: `Broad-spectrum β-lactam antibiotics effective against many Gram-positive and select Gram-negative organisms.`,

  I062: `Agents that inhibit bacterial enzymes responsible for antibiotic resistance, used as adjuncts.`,

  I063: `Improves insulin sensitivity and reduces hepatic glucose output without hypoglycemia.`,

  I064: `High-potency diuretics acting in the loop of Henle; critical for acute volume management.`,

  I065: `Inhibits cholesterol synthesis, reduces ASCVD risk; cornerstone of lipid management.`,

  I066: `Cardioselective beta blockers that reduce heart rate and BP with less pulmonary effect.`,

  I067: `Mild diuretics effective for chronic BP control; metabolic effects are exam favorites.`,

  I068: `Potent acid suppressors with irreversible proton pump inhibition.`,

  I069: `Calcium channel blockers that primarily cause vascular smooth muscle relaxation.`,

  // ===== H) MODIFIERS / COMPONENTS ===== Feb 7, 2026
  I070: `Clavulanate is a β-lactamase inhibitor with minimal antibacterial activity alone. Its purpose is to protect β-lactam antibiotics from enzymatic degradation. It is a classic example of pharmacologic synergy and is frequently tested conceptually rather than clinically.`,
  // ===== NEW SYSTEMS ===== Feb 7, 2026
  I028: `The lungs facilitate gas exchange and are central to asthma and COPD pharmacotherapy. Drugs targeting the lungs affect airway tone, inflammation, and mucus production. Pharmacy students must recognize inhaled delivery routes, device technique, and systemic risks of respiratory medications.`,
  I029: `The immune system defends against pathogens and mediates inflammatory and allergic responses. Drugs acting on the immune system are used in allergy and autoimmune disease, and can raise infection risk. Understanding immune modulation is key for counseling and safety monitoring.`,

  // ===== NEW MECHANISMS ===== Feb 7, 2026
  I036: `Cyclooxygenase (COX) inhibition reduces prostaglandin synthesis, producing analgesic, antipyretic, and anti-inflammatory effects. High-yield risks include GI ulcer/bleed, renal injury, fluid retention, and cardiovascular risk differences across agents.`,
  I037: `Monoamine reuptake inhibition increases synaptic serotonin and/or norepinephrine by inhibiting presynaptic transporters. This underlies SSRI therapy and is high-yield for delayed onset, sexual side effects, and serotonin syndrome interactions.`,
  I038: `β2-agonism relaxes bronchial smooth muscle, leading to bronchodilation. It is central to asthma/COPD symptom relief. Overuse suggests poor control and increases risks like tremor and tachycardia.`,
  I079: `Dual monoamine reuptake inhibition increases both serotonin and norepinephrine signaling. This forms the basis of SNRIs and is high-yield for withdrawal risk and blood pressure considerations (dose-dependent).`,
  I080: `H1 receptor blockade reduces histamine-mediated symptoms such as sneezing, itching, and rhinorrhea. Second-generation agents are less sedating than first-generation, but not always zero-sedation.`,
  I081: `ACE inhibition lowers angiotensin II and aldosterone, producing vasodilation and reduced fluid retention. High-yield adverse effects include cough, hyperkalemia, renal function changes, and rare but serious angioedema; contraindicated in pregnancy.`,
  I082: `Glucocorticoid receptor activation reduces inflammatory mediator activity and airway inflammation. High-yield counseling includes mouth rinse to prevent thrush (inhaled steroids) and recognizing immunosuppressive risks with higher exposures.`,

  // ===== NEW INDICATIONS ===== Feb 7, 2026
  I047: `Pain and fever are common symptoms managed with analgesics and antipyretics. Therapy requires balancing efficacy with safety, especially liver toxicity (acetaminophen) and GI/renal/cardiovascular risks (NSAIDs).`,
  I048: `Depression and anxiety disorders involve dysregulation of monoamine neurotransmission. Pharmacotherapy has delayed onset of benefit, requires adherence, and carries risk of interactions and serotonin syndrome.`,
  I049: `Asthma and COPD are chronic airway diseases. Pharmacotherapy targets bronchoconstriction and airway inflammation, often via inhaled delivery. Technique and adherence are major determinants of real-world effectiveness.`,
  I090: `Allergic rhinitis and urticaria are commonly mediated by histamine release. Treatment prioritizes symptom control while minimizing sedation and anticholinergic effects.`,
  I091: `UTIs are common bacterial infections treated with targeted antibiotics. Selection depends on organism, resistance patterns, and patient renal function. Some agents are urinary-specific and not appropriate for kidney infection.`,

  // ===== NEW EFFECTS ===== Feb 7, 2026
  I150: `Reduction of pain and fever through central and/or peripheral mechanisms. This effect is foundational to first-line symptom management and requires toxicity awareness (liver vs GI/renal risks).`,
  I151: `Improvement in depressive and anxiety symptoms via modulation of neurotransmitter signaling. Clinical benefit is delayed and requires adherence; abrupt discontinuation can be problematic for some agents.`,
  I152: `Relaxation of airway smooth muscle resulting in improved airflow. Frequent rescue use suggests poor control and need for controller therapy.`,
  I153: `Reduction of inflammatory mediator activity, improving symptoms and preventing progression. Inhaled steroids are central for asthma control and require mouth-rinse counseling to reduce thrush risk.`,
  I154: `Decreased histamine-mediated symptoms such as sneezing, itching, and rhinorrhea. Second-generation antihistamines typically cause less sedation than older agents.`,

  // ===== NEW CLASSES ===== Feb 7, 2026
  I071: `Central analgesic and antipyretic pathway with minimal anti-inflammatory activity. High-yield safety focus: total daily dose and hidden acetaminophen in combination products.`,
  I072: `COX inhibition resulting in analgesic and anti-inflammatory effects. High-yield risks include GI bleed/ulcer, renal injury, fluid retention, and BP/CV considerations.`,
  I073: `Selective serotonin reuptake inhibition used in mood and anxiety disorders. High-yield: delayed onset, sexual side effects, serotonin syndrome interactions.`,
  I074: `Dual serotonin and norepinephrine reuptake inhibition with mood and pain applications. High-yield: withdrawal risk if stopped abruptly and possible BP increases.`,
  I075: `Short-acting β2-agonists provide rapid bronchodilation for symptom relief. High-yield: tremor/palpitations and overuse as a marker of poor control.`,
  I076: `Combination inhalers provide both anti-inflammatory and bronchodilator effects. LABAs are not used alone in asthma; counseling on rinsing mouth after ICS is high-yield.`,
  I077: `Peripheral H1 receptor blockade relieves allergic symptoms with relatively less sedation in second-generation options (but not always zero).`,
  I078: `Urinary-specific antibacterial pathway with minimal systemic impact. High-yield: appropriate for uncomplicated cystitis, not for pyelonephritis/systemic infection.`,
  I084: `ACE inhibition lowers blood pressure and reduces cardiovascular risk in select patients. High-yield: cough, hyperkalemia, renal monitoring, and pregnancy contraindication.`,

  // ===== NEW DRUGS ===== Feb 7, 2026
  I110: `Class/MOA: Analgesic/antipyretic; primarily central action with minimal anti-inflammatory effect.\nIndications: Mild–moderate pain, fever.\nAdult dosing (typical): 325–650 mg q4–6h PRN or 1000 mg q6–8h PRN; max 4000 mg/day (often lower if chronic use or risk factors).\nKey risks: Hepatotoxicity with overdose/chronic high dosing/alcohol.\nCounseling: Avoid double-dosing from combo cold/flu products; keep under max daily dose.`,
  I111: `Class/MOA: NSAID; COX inhibition → ↓ prostaglandins.\nIndications: Pain, fever, inflammation.\nAdult dosing (typical): 200–400 mg q4–6h PRN (higher Rx regimens exist).\nKey risks: GI ulcer/bleed, renal injury, fluid retention, ↑ BP.\nCounseling: Take with food if GI upset; avoid stacking NSAIDs.`,
  I112: `Class/MOA: NSAID; COX inhibition with longer duration.\nIndications: Pain/inflammation.\nAdult dosing (typical): 220 mg q8–12h PRN (OTC).\nKey risks: GI bleed, renal injury, fluid retention; CV risk considerations.\nCounseling: Don’t stack NSAIDs; watch for bleeding signs.`,
  I113: `Class/MOA: Salicylate NSAID; COX inhibition (antiplatelet effects at low dose).\nIndications: Pain/fever (higher doses); antiplatelet use in select CV contexts.\nKey risks: GI bleed, bleeding risk, bronchospasm in sensitive patients; tinnitus at high doses.\nCounseling: Avoid in kids/teens with viral illness (Reye risk); take with food.`,
  I114: `Class/MOA: COX-2 selective NSAID.\nIndications: Pain/inflammation (e.g., osteoarthritis).\nAdult dosing (typical): Often 100 mg BID or 200 mg daily.\nKey risks: CV risk considerations, renal effects, edema; GI events still possible.\nCounseling: Not GI risk-free; caution in CV disease history.`,
  I115: `Class/MOA: SSRI.\nIndications: Depression and anxiety-related disorders.\nAdult dosing (typical): Start 25–50 mg daily; common range 50–200 mg daily.\nKey risks: GI upset, insomnia/somnolence, sexual dysfunction; serotonin syndrome interactions.\nCounseling: Takes weeks; don’t stop abruptly; report worsening mood.`,
  I116: `Class/MOA: SSRI.\nIndications: Depression/anxiety (context-dependent).\nAdult dosing (typical): Start 5–10 mg daily; typical 10–20 mg daily.\nKey risks: Nausea, headache, sexual dysfunction; QT considerations in higher-risk settings.\nCounseling: Give it time; avoid abrupt withdrawal; check serotonergic combos.`,
  I117: `Class/MOA: SSRI with long half-life.\nIndications: Depression and related disorders.\nAdult dosing (typical): Start 10–20 mg daily; common 20–60 mg daily.\nKey risks: Activation/insomnia, sexual dysfunction; interactions.\nCounseling: Morning dosing if activating; long half-life = slower washout.`,
  I118: `Class/MOA: SNRI (dose-dependent NE effects).\nIndications: Depression/anxiety; sometimes chronic pain.\nAdult dosing (typical): Start 37.5–75 mg daily; common 75–225 mg daily.\nKey risks: Can increase BP; withdrawal if abrupt stop.\nCounseling: Monitor BP; taper slowly.`,
  I119: `Class/MOA: SNRI.\nIndications: Depression/anxiety; neuropathic/chronic pain.\nAdult dosing (typical): 30 mg daily start; typical 60 mg daily.\nKey risks: Nausea, dry mouth, dizziness; hepatic caution.\nCounseling: Don’t stop suddenly; report liver-related symptoms.`,
  I120: `Class/MOA: SABA; β2-agonist bronchodilator.\nIndications: Acute relief of bronchospasm.\nAdult dosing (typical): MDI 1–2 puffs q4–6h PRN.\nKey risks: Tremor, palpitations, tachycardia.\nCounseling: Overuse = poor control; confirm technique/spacer use.`,
  I121: `Class/MOA: ICS/LABA combo.\nIndications: Asthma/COPD maintenance (plan-dependent).\nKey risks: Thrush/dysphonia (ICS), tremor/palpitations (LABA).\nCounseling: Rinse mouth after use; LABA not used alone in asthma.`,
  I122: `Class/MOA: 2nd-gen antihistamine.\nIndications: Allergic rhinitis, urticaria.\nAdult dosing (typical): 10 mg daily.\nCounseling: Mild sedation possible—take at night if drowsy.`,
  I123: `Class/MOA: 2nd-gen antihistamine.\nIndications: Allergic rhinitis, urticaria.\nAdult dosing (typical): 10 mg daily.\nCounseling: Good daytime option; consistent daily use in season helps.`,
  I124: `Class/MOA: 2nd-gen antihistamine.\nIndications: Allergic rhinitis, urticaria.\nAdult dosing (typical): 120–180 mg daily.\nCounseling: Avoid fruit juices near dose (can reduce absorption).`,
  I125: `Class/MOA: Macrolide antibiotic (protein synthesis inhibitor).\nIndications: Selected respiratory/ENT infections and atypicals.\nKey risks: GI upset; QT prolongation risk.\nCounseling: Finish course; consider cardiac risk and interacting meds.`,
  I126: `Class/MOA: Tetracycline antibiotic.\nIndications: Respiratory, skin, acne, tick-borne infections.\nKey risks: Photosensitivity, GI irritation/esophagitis.\nCounseling: Take with water; stay upright; sun protection.`,
  I127: `Class/MOA: 1st-gen cephalosporin (β-lactam).\nIndications: Skin/soft tissue and selected infections.\nKey risks: GI upset; rash; allergy considerations.\nCounseling: Finish course; report severe rash/breathing issues.`,
  I128: `Class/MOA: Sulfonamide combo; sequential folate inhibition.\nIndications: UTIs, some skin infections (context-dependent).\nKey risks: Rash (can be severe), hyperkalemia, renal considerations.\nCounseling: Hydration; report rash immediately; check interactions (e.g., warfarin).`,
  I129: `Class/MOA: Urinary antiseptic antibiotic; concentrates in urine.\nIndications: Uncomplicated cystitis.\nAdult dosing (typical): 100 mg BID for 5 days (common regimen).\nCounseling: Take with food; not for pyelonephritis/systemic infection.`,
  I130: `Class/MOA: ACE inhibitor.\nIndications: Hypertension; CV risk reduction in select patients.\nKey risks: Cough, hyperkalemia, renal function changes; angioedema; pregnancy contraindication.\nCounseling: Monitor K+/kidney function; report facial swelling urgently.`,

    // fallback for everything else:
  };

  // ============================================================
  // STATE
  // ============================================================
  const state = {
    bases: ["I001","I002","I003"],
    discovered: [],
    nodes: new Map(),
    nextNodeId: 1,
    activeDiscTab: "ALL",
  };
  const terminated = new Set();

  const NODE = 92;
  const COMBINE_RADIUS = 60;
  const HOLD_MS = 140;

  const DISC_TABS = [
    { key:"ALL", label:"All" },
    { key:"HUB", label:"Hubs" },
    { key:"SYSTEM", label:"Systems" },
    { key:"MECH", label:"Mechanisms" },
    { key:"INDICATION", label:"Indications" },
    { key:"EFFECT", label:"Effects" },
    { key:"CLASS", label:"Classes" },
    { key:"COMPONENT", label:"Components" },
    { key:"DRUG", label:"Drugs" },
  ];

  // DOM refs
  const startScreen = document.getElementById("startScreen");
  const playBtn = document.getElementById("playBtn");
  const app = document.getElementById("app");
  const toastEl = document.getElementById("toast");
  const canvasWrap = document.getElementById("canvasWrap");
  const basesList = document.getElementById("basesList");
  const discoveredTabs = document.getElementById("discoveredTabs");
  const discoveredList = document.getElementById("discoveredList");
  const trashZone = document.getElementById("trashZone");
  const resetCanvasBtn = document.getElementById("resetCanvasBtn");

  // encyclopedia
  const encyBtn = document.getElementById("encyBtn");
  const encyOverlay = document.getElementById("encyOverlay");
  const encyClose = document.getElementById("encyClose");
  const encyTabRecipes = document.getElementById("encyTabRecipes");
  const encyTabIcons = document.getElementById("encyTabIcons");
  const recipesText = document.getElementById("recipesText");
  const iconsGrid = document.getElementById("iconsGrid");
  const recipesPane = document.getElementById("recipesPane");
  const iconsPane = document.getElementById("iconsPane");
  const encyIntro = document.getElementById("encyIntro");
  const encyIntroOk = document.getElementById("encyIntroOk");
  const encyIntroShade = document.getElementById("encyIntroShade");
  const encyBody = document.getElementById("encyBody");
  const encyHead = document.querySelector(".encyHead");
  let encyIntroShown = false;

  // spoiler
  const spoilerOverlay = document.getElementById("spoilerOverlay");
  const spoilerCancel = document.getElementById("spoilerCancel");
  const spoilerProceed = document.getElementById("spoilerProceed");
  let spoilerShownOnce = false;

  // tutorial
  const tutorialOverlay = document.getElementById("tutorialOverlay");
  const shadeTop = document.getElementById("shadeTop");
  const shadeLeft = document.getElementById("shadeLeft");
  const shadeRight = document.getElementById("shadeRight");
  const shadeBottom = document.getElementById("shadeBottom");
  const tBubble = document.getElementById("tBubble");
  const tTitle = document.getElementById("tTitle");
  const tText = document.getElementById("tText");
  const tHint = document.getElementById("tHint");
  const tSkipBtn = document.getElementById("tSkipBtn");
  const tNextBtn = document.getElementById("tNextBtn");

  // context menu
  const ctxMenu = document.getElementById("ctxMenu");
  const ctxLearn = document.getElementById("ctxLearn");
  const ctxTerminate = document.getElementById("ctxTerminate");
  const ctxSep = document.getElementById("ctxSep");
  let ctxTargetItemId = null;

  // learn more
  const learnOverlay = document.getElementById("learnOverlay");
  const lmTitle = document.getElementById("lmTitle");
  const lmMeta = document.getElementById("lmMeta");
  const lmDesc = document.getElementById("lmDesc");
  const lmIcon = document.getElementById("lmIcon");
  const lmName = document.getElementById("lmName");
  const lmBack = document.getElementById("lmBack");

  function toast(msg, kind=""){
    toastEl.textContent = msg;
    toastEl.style.color =
      kind==="good" ? "rgba(110, 231, 255, .95)" :
      kind==="bad"  ? "rgba(255, 143, 143, .95)" :
      "rgba(255,255,255,.65)";
  }

  function clamp(n, min, max){ return Math.max(min, Math.min(max, n)); }
  function getCanvasRect(){ return canvasWrap.getBoundingClientRect(); }
  function getTrashRect(){ return trashZone.getBoundingClientRect(); }
  function inRect(x,y,r){ return x>=r.left && x<=r.right && y>=r.top && y<=r.bottom; }
  function clientToCanvas(clientX, clientY){
    const r = getCanvasRect();
    return { x: clientX - r.left, y: clientY - r.top };
  }

  // unlock
  function unlock(itemId){
    if(terminated.has(itemId)) terminated.delete(itemId);
    if(state.bases.includes(itemId) || state.discovered.includes(itemId)){
      renderSidebar();
      return false;
    }
    state.discovered.push(itemId);
    renderSidebar();
    return true;
  }

  function craft(a,b){
    const k = keyFor(a,b);
    return RECIPES[k] || null;
  }

  // context menu
  function openContextMenu(itemId, x, y){
    ctxTargetItemId = itemId;
    const it = ITEMS[itemId];

    // Bases: only allow Learn more
    if(it.type === "BASE"){
      ctxTerminate.style.display = "none";
      ctxSep.style.display = "none";
    } else {
      ctxTerminate.style.display = "flex";
      ctxSep.style.display = "block";
    }

    const w = 190, h = (it.type === "BASE" ? 46 : 86);
    const vx = window.innerWidth, vy = window.innerHeight;
    const px = clamp(x, 10, vx - 10 - w);
    const py = clamp(y, 10, vy - 10 - h);
    ctxMenu.style.left = px + "px";
    ctxMenu.style.top = py + "px";
    ctxMenu.style.display = "block";

    if(tutorial.active){
      tutorialSignals.rcOpened = true;
      tutorialTryAdvance();
    }
  }
  function closeContextMenu(){
    ctxMenu.style.display = "none";
    ctxTargetItemId = null;
  }

  function terminateItem(itemId){
    const it = ITEMS[itemId];
    if(it.type === "BASE") return;
    terminated.add(itemId);
    renderSidebar();
    toast(`${it.name} terminated (hidden). Craft again to restore.`, "");
  }

  // learn more
  function openLearnMore(itemId){
    const it = ITEMS[itemId];
    const rec = ITEM_RECIPE[itemId];

    lmTitle.textContent = `Profile: ${it.id} — ${it.name}`;
    lmName.textContent = `${it.name}`;
    lmIcon.textContent = it.emoji;

    if(rec === null){
      lmMeta.textContent = `Type: ${it.type}\nRecipe: Base item (starter).`;
    } else if(rec && rec.a && rec.b){
      const A = ITEMS[rec.a], B = ITEMS[rec.b];
      lmMeta.textContent =
        `Type: ${it.type}\nRecipe: ${rec.a} ${A.emoji} (${A.name}) + ${rec.b} ${B.emoji} (${B.name}) → ${itemId} ${it.emoji} (${it.name})`;
    } else {
      lmMeta.textContent = `Type: ${it.type}\nRecipe: Unknown / not recorded.`;
    }

    lmDesc.textContent = ITEM_DESC[itemId] || `No description yet for ${it.name}.`;

    learnOverlay.style.display = "block";
    learnOverlay.setAttribute("aria-hidden","false");
    closeContextMenu();

    if(tutorial.active){
      tutorialSignals.learnOpened = true;
      tutorialTryAdvance();
    }
  }
  function closeLearnMore(){
    learnOverlay.style.display = "none";
    learnOverlay.setAttribute("aria-hidden","true");
  }
  lmBack.addEventListener("click", closeLearnMore);
  learnOverlay.addEventListener("pointerdown", (e) => { if(e.target === learnOverlay) closeLearnMore(); });

  ctxLearn.addEventListener("click", () => {
    if(!ctxTargetItemId) return;
    openLearnMore(ctxTargetItemId);
  });
  ctxTerminate.addEventListener("click", () => {
    if(!ctxTargetItemId) return;
    terminateItem(ctxTargetItemId);
    closeContextMenu();
    if(tutorial.active){
      tutorialSignals.terminatedUsed = true;
      tutorialTryAdvance();
    }
  });

  window.addEventListener("pointerdown", (e) => {
    if(!ctxMenu.contains(e.target)) closeContextMenu();
  });
  window.addEventListener("scroll", closeContextMenu, { passive:true });
  window.addEventListener("resize", closeContextMenu);
  document.querySelector(".sidebar").addEventListener("contextmenu", (e) => e.preventDefault());

  // sidebar rendering
  function renderItemButton(itemId){
    const it = ITEMS[itemId];
    const btn = document.createElement("div");
    btn.className = "itemBtn";
    btn.dataset.itemId = itemId;
    btn.innerHTML = `
      <div class="itemLeft">
        <div class="itemIcon">${it.emoji}</div>
        <div class="itemName">${it.id} — ${it.name}</div>
      </div>
      <div class="itemTag">${TAG_FOR_TYPE[it.type] || it.type}</div>
    `;

    btn.addEventListener("click", () => {
      spawnNode(itemId);
      toast(`Spawned ${it.name}. Hold to drag.`, "");
      if(tutorial.active && tutorial.steps[tutorial.step]?.id === "pick2bases" && state.bases.includes(itemId)){
        tutorialSignals.baseClicks++;
        tutorialTryAdvance();
      }
    });

    btn.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      openContextMenu(itemId, e.clientX, e.clientY);
    });

    return btn;
  }

  function renderDiscoveredTabs(){
    discoveredTabs.innerHTML = "";
    for(const t of DISC_TABS){
      const b = document.createElement("button");
      b.type = "button";
      b.className = "tabBtn" + (state.activeDiscTab === t.key ? " active" : "");
      b.textContent = t.label;
      b.addEventListener("click", () => {
        state.activeDiscTab = t.key;
        renderSidebar();
      });
      discoveredTabs.appendChild(b);
    }
  }

  function discoveredByActiveTab(){
    const visible = state.discovered.filter(id => !terminated.has(id));
    if(state.activeDiscTab === "ALL") return visible;
    return visible.filter(id => ITEMS[id]?.type === state.activeDiscTab);
  }

  function emptyGroupMessage(tabKey){
    const label = (DISC_TABS.find(t => t.key === tabKey)?.label) || tabKey;
    return `Nothing discovered in "${label}" yet.\nKeep combining items to unlock more!`;
  }

  function renderSidebar(){
    basesList.innerHTML = "";
    state.bases.filter(id => !terminated.has(id)).forEach(id => basesList.appendChild(renderItemButton(id)));

    renderDiscoveredTabs();
    discoveredList.innerHTML = "";
    const visibleInTab = discoveredByActiveTab();

    if(visibleInTab.length === 0){
      const empty = document.createElement("div");
      empty.style.padding = "10px";
      empty.style.color = "rgba(255,255,255,.60)";
      empty.style.fontSize = "12px";
      empty.style.whiteSpace = "pre-line";
      empty.textContent = emptyGroupMessage(state.activeDiscTab);
      discoveredList.appendChild(empty);
    } else {
      visibleInTab.forEach(id => discoveredList.appendChild(renderItemButton(id)));
    }
  }

  // encyclopedia
  function recipeBookText(){
    const lines = [];
    lines.push("BASICS");
    lines.push("• Build hubs from the 3 starters.");
    lines.push("• Systems + Mechanisms → Classes/Pathways.");
    lines.push("• Classes + Effects → Final Drugs.");
    lines.push("• Special combo: craft component, then apply it to the base drug.");
    lines.push("");
    lines.push("ALL VALID RECIPES");
    const entries = Object.entries(RECIPES)
      .map(([k,res]) => ({ k, res }))
      .sort((a,b) => a.res.localeCompare(b.res));
    for(const e of entries){
      const [a,b] = e.k.split("|");
      const A = ITEMS[a], B = ITEMS[b], R = ITEMS[e.res];
      lines.push(`${a} ${A.emoji} (${A.name}) + ${b} ${B.emoji} (${B.name})  →  ${e.res} ${R.emoji} (${R.name})`);
    }
    return lines.join("\n");
  }

  function groupItemsByType(){
    const groups = {};
    for(const id in ITEMS){
      const t = ITEMS[id].type;
      (groups[t] ||= []).push(id);
    }
    for(const t in groups){
      groups[t].sort((a,b) => ITEMS[a].name.localeCompare(ITEMS[b].name));
    }
    return groups;
  }

  function renderAllIconsIndex(){
    iconsGrid.innerHTML = "";
    const groups = groupItemsByType();
    const order = ["BASE","HUB","SYSTEM","MECH","INDICATION","EFFECT","CLASS","COMPONENT","DRUG"];
    for(const t of order){
      const ids = groups[t] || [];
      const head = document.createElement("div");
      head.style.margin = "6px 2px 2px";
      head.style.fontWeight = "950";
      head.style.color = "rgba(255,255,255,.84)";
      head.style.fontSize = "12px";
      head.textContent = `${TAG_FOR_TYPE[t] || t} (${ids.length})`;
      iconsGrid.appendChild(head);

      for(const id of ids){
        const btn = document.createElement("div");
        btn.className = "itemBtn";
        btn.innerHTML = `
          <div class="itemLeft">
            <div class="itemIcon">${ITEMS[id].emoji}</div>
            <div class="itemName">${id} — ${ITEMS[id].name}</div>
          </div>
          <div class="itemTag">${TAG_FOR_TYPE[t] || t}</div>
        `;
        btn.addEventListener("click", () => openLearnMore(id));
        iconsGrid.appendChild(btn);
      }
    }
  }

  function showEncyTab(which){
    const isRecipes = which === "recipes";
    encyTabRecipes.classList.toggle("active", isRecipes);
    encyTabIcons.classList.toggle("active", !isRecipes);
    recipesPane.style.display = isRecipes ? "flex" : "none";
    iconsPane.style.display = isRecipes ? "none" : "flex";
  }

  // NEW: intro focus mode (darken behind + block clicks) until "Got it"
  function showEncyIntro(){
    if(encyIntroShown) return;
    encyIntro.style.display = "block";
    encyIntroShade.style.display = "block";
    encyBody.style.pointerEvents = "none";
    encyHead.style.pointerEvents = "none";
  }
  function hideEncyIntro(){
    encyIntroShown = true;
    encyIntro.style.display = "none";
    encyIntroShade.style.display = "none";
    encyBody.style.pointerEvents = "auto";
    encyHead.style.pointerEvents = "auto";
  }
  encyIntroOk.addEventListener("click", hideEncyIntro);

  function openEncyclopedia(){
    recipesText.textContent = recipeBookText();
    renderAllIconsIndex();
    showEncyTab("recipes");
    encyOverlay.style.display = "block";
    encyOverlay.setAttribute("aria-hidden","false");
    if(!encyIntroShown) showEncyIntro();
  }
  function closeEncyclopedia(){
    encyOverlay.style.display = "none";
    encyOverlay.setAttribute("aria-hidden","true");
  }

  encyTabRecipes.addEventListener("click", () => showEncyTab("recipes"));
  encyTabIcons.addEventListener("click", () => showEncyTab("icons"));
  encyClose.addEventListener("click", closeEncyclopedia);
  encyOverlay.addEventListener("pointerdown", (e) => { if(e.target === encyOverlay) closeEncyclopedia(); });

  // spoiler gating
  function requestEncyclopediaOpen(){
    if(!spoilerShownOnce){
      spoilerOverlay.style.display = "block";
      spoilerOverlay.setAttribute("aria-hidden","false");
      return;
    }
    openEncyclopedia();
  }
  function closeSpoiler(){
    spoilerOverlay.style.display = "none";
    spoilerOverlay.setAttribute("aria-hidden","true");
  }
  spoilerCancel.addEventListener("click", closeSpoiler);
  spoilerProceed.addEventListener("click", () => {
    spoilerShownOnce = true;
    closeSpoiler();
    openEncyclopedia();
  });
  spoilerOverlay.addEventListener("pointerdown", (e) => { if(e.target === spoilerOverlay) closeSpoiler(); });

  encyBtn.addEventListener("click", requestEncyclopediaOpen);

  // nodes and drag
  function applyTransform(n){
    const el = n.el;
    el.style.setProperty("--x", n.x + "px");
    el.style.setProperty("--y", n.y + "px");
    const lift = n.dragging ? -6 : 0;
    const scale = n.dragging ? 1.06 : 1.0;
    el.style.transform = `translate3d(${n.x}px, ${n.y + lift}px, 0) rotate(${n.rot}deg) scale(${scale})`;
  }
  function stopGlowOnInteract(el){
    if(el.classList.contains("ringGlow")) el.classList.remove("ringGlow");
  }
  function markInvalid(node, on=true){
    if(!node) return;
    if(on){
      node.el.classList.add("invalid","jitter");
    } else {
      node.el.classList.remove("invalid","jitter");
    }
  }
  function separateInvalidPair(aNode, bNode){
    const ax = aNode.x + NODE/2, ay = aNode.y + NODE/2;
    const bx = bNode.x + NODE/2, by = bNode.y + NODE/2;
    let dx = ax - bx, dy = ay - by;
    let len = Math.hypot(dx,dy) || 1;
    dx /= len; dy /= len;

    const push = 46;
    aNode.tx = aNode.x + dx*push;
    aNode.ty = aNode.y + dy*push;
    bNode.tx = bNode.x - dx*push;
    bNode.ty = bNode.y - dy*push;

    const r = getCanvasRect();
    aNode.tx = clamp(aNode.tx, 0, r.width - NODE);
    aNode.ty = clamp(aNode.ty, 0, r.height - NODE);
    bNode.tx = clamp(bNode.tx, 0, r.width - NODE);
    bNode.ty = clamp(bNode.ty, 0, r.height - NODE);
  }

  function spawnNode(itemId, opts={}){
    const r = getCanvasRect();
    let x = opts.x ?? (38 + Math.random()*220);
    let y = opts.y ?? (70 + Math.random()*180);
    x = clamp(x, 0, r.width - NODE);
    y = clamp(y, 0, r.height - NODE);

    const nodeId = String(state.nextNodeId++);
    const it = ITEMS[itemId];

    const el = document.createElement("div");
    el.className = "node";
    el.dataset.nodeId = nodeId;
    el.dataset.itemId = itemId;
    el.innerHTML = `<div class="ico">${it.emoji}</div><div class="txt">${it.name}</div>`;

    const n = {
      nodeId, itemId,
      x, y, tx:x, ty:y,
      vx:0, vy:0,
      rot:0,
      dragging:false,
      originX:x, originY:y,
      grabOX:NODE/2, grabOY:NODE/2,
      holdTimer:null,
      pointerId:null,
      el
    };

    canvasWrap.appendChild(el);
    applyTransform(n);

    el.classList.add("poof");
    setTimeout(() => el.classList.remove("poof"), 300);

    el.addEventListener("pointerdown", (e) => {
      stopGlowOnInteract(el);
      markInvalid(n,false);

      e.preventDefault();
      el.setPointerCapture(e.pointerId);
      n.pointerId = e.pointerId;

      el.style.zIndex = String(1000 + (Date.now() % 1000));
      n.originX = n.x;
      n.originY = n.y;

      const b = el.getBoundingClientRect();
      n.grabOX = e.clientX - b.left;
      n.grabOY = e.clientY - b.top;

      if(n.holdTimer) clearTimeout(n.holdTimer);
      n.holdTimer = setTimeout(() => {
        n.dragging = true;
        el.classList.add("pickedUp");
        toast("Dragging… drop on canvas or trash.", "");
      }, HOLD_MS);
    });

    el.addEventListener("pointermove", (e) => {
      if(n.pointerId !== e.pointerId) return;
      const tr = getTrashRect();
      if(inRect(e.clientX, e.clientY, tr)) trashZone.classList.add("hot");
      else trashZone.classList.remove("hot");

      if(!n.dragging) return;
      const c = clientToCanvas(e.clientX, e.clientY);
      n.tx = c.x - n.grabOX;
      n.ty = c.y - n.grabOY;
    });

    el.addEventListener("pointerup", (e) => {
      if(n.pointerId !== e.pointerId) return;

      el.releasePointerCapture(e.pointerId);
      n.pointerId = null;

      if(n.holdTimer) clearTimeout(n.holdTimer);
      n.holdTimer = null;

      if(!n.dragging){
        trashZone.classList.remove("hot");
        toast("Hold to drag.", "");
        return;
      }

      n.dragging = false;
      el.classList.remove("pickedUp");
      trashZone.classList.remove("hot");

      const cr = getCanvasRect();
      const tr = getTrashRect();
      const overTrash = inRect(e.clientX, e.clientY, tr);
      const overCanvas = inRect(e.clientX, e.clientY, cr);

      if(overTrash){
        deleteNode(n.nodeId);
        toast("Deleted.", "");
        return;
      }

      if(!overCanvas){
        n.tx = n.originX;
        n.ty = n.originY;
        n.vx *= 0.2; n.vy *= 0.2;
        el.classList.add("impact");
        setTimeout(() => el.classList.remove("impact"), 200);
        toast("Invalid drop — returned.", "bad");
        return;
      }

      const rr = getCanvasRect();
      n.tx = clamp(n.tx, 0, rr.width - NODE);
      n.ty = clamp(n.ty, 0, rr.height - NODE);

      el.classList.add("impact");
      setTimeout(() => el.classList.remove("impact"), 220);

      const other = findNearestForCombine(n);
      if(other){
        const a = n.itemId;
        const b = other.itemId;
        const result = craft(a,b);

        if(!result){
          toast("INVALID RECIPE", "bad");
          markInvalid(n,true);
          markInvalid(other,true);
          separateInvalidPair(n, other);
          setTimeout(() => {
            markInvalid(n,false);
            markInvalid(other,false);
          }, 1000);
          return;
        }

        const newlyUnlocked = unlock(result);
        const midX = (n.x + other.x)/2 + 8;
        const midY = (n.y + other.y)/2 + 8;

        deleteNode(n.nodeId);
        deleteNode(other.nodeId);

        const newNode = spawnNode(result, { x: midX, y: midY });
        newNode.el.classList.add("pop");
        setTimeout(() => newNode.el.classList.remove("pop"), 260);

        if(newlyUnlocked){
          newNode.el.classList.add("ringGlow");
          setTimeout(() => newNode.el.classList.remove("ringGlow"), 2000);
        }

        toast(`${ITEMS[a].name} + ${ITEMS[b].name} → ${ITEMS[result].name}`, "good");

        if(tutorial.active && tutorial.steps[tutorial.step]?.id === "combine"){
          tutorialSignals.combined = true;
          tutorialTryAdvance();
        }
      } else {
        toast("Dropped.", "");
      }
    });

    el.addEventListener("pointercancel", () => {
      if(n.holdTimer) clearTimeout(n.holdTimer);
      n.holdTimer = null;
      n.pointerId = null;
      n.dragging = false;
      el.classList.remove("pickedUp");
      trashZone.classList.remove("hot");
    });

    state.nodes.set(nodeId, n);
    return n;
  }

  function deleteNode(nodeId){
    const n = state.nodes.get(nodeId);
    if(!n) return;
    if(n.holdTimer) clearTimeout(n.holdTimer);
    n.el.remove();
    state.nodes.delete(nodeId);
  }

  function findNearestForCombine(n){
    const cx = n.x + NODE/2;
    const cy = n.y + NODE/2;
    let best = null, bestD = Infinity;
    for(const other of state.nodes.values()){
      if(other.nodeId === n.nodeId) continue;
      const ox = other.x + NODE/2;
      const oy = other.y + NODE/2;
      const d = Math.hypot(ox - cx, oy - cy);
      if(d < COMBINE_RADIUS && d < bestD){ bestD = d; best = other; }
    }
    return best;
  }

  // animation loop
  function tick(){
    const r = getCanvasRect();
    for(const n of state.nodes.values()){
      const dx = n.tx - n.x;
      const dy = n.ty - n.y;

      n.vx = (n.vx + dx * 0.55) * 0.58;
      n.vy = (n.vy + dy * 0.55) * 0.58;

      n.x += n.vx;
      n.y += n.vy;

      if(n.dragging){
        const pad = 260;
        n.x = clamp(n.x, -pad, r.width - NODE + pad);
        n.y = clamp(n.y, -pad, r.height - NODE + pad);
        n.rot = clamp(n.vx * 0.8, -14, 14);
      } else {
        n.x = clamp(n.x, -40, r.width - NODE + 40);
        n.y = clamp(n.y, -40, r.height - NODE + 40);
        n.rot *= 0.85;
        if(Math.abs(n.rot) < 0.05) n.rot = 0;
      }

      applyTransform(n);
    }
    requestAnimationFrame(tick);
  }

  // reset canvas
  function resetCanvas(){
    const ids = Array.from(state.nodes.keys());
    ids.forEach(deleteNode);
    toast("Canvas cleared.", "");
  }
  resetCanvasBtn.addEventListener("click", resetCanvas);

  // tutorial
  const tutorialSignals = {
    baseClicks: 0,
    combined: false,
    rcOpened: false,
    learnOpened: false,
    terminatedUsed: false
  };

  const tutorial = {
    active: false,
    step: 0,
    autoLock: false,
    steps: [
      {
        id: "welcome",
        title: "Welcome to Build-A-Drug!",
        text: "Drag & combine items on the canvas to discover new pharmacology concepts.",
        hint: "Press Next to continue.",
        target: () => document.getElementById("canvasWrap"),
        require: null
      },
      {
        id: "layout",
        title: "Screen layout",
        text: "Right side: Bases + Discovered list.\nLeft side: Canvas where you combine items.",
        hint: "Press Next to continue.",
        target: () => document.getElementById("mainLayout"),
        require: null
      },
      {
        id: "pick2bases",
        title: "Select 2 base icons",
        text: "Click TWO base items in the Bases list to spawn them on the canvas.",
        hint: "Action required: click TWO bases.",
        target: () => document.getElementById("basesPanel"),
        require: () => tutorialSignals.baseClicks >= 2,
        autoAdvance: true
      },
      {
        id: "combine",
        title: "Combine them",
        text: "Hold to drag and drop near another.\nValid recipes create a new item.\nInvalid recipes will reject (red + jitter).",
        hint: "Action required: create your first valid combination.",
        target: () => document.getElementById("canvasWrap"),
        require: () => tutorialSignals.combined === true,
        autoAdvance: true
      },
      {
        id: "rightclick",
        title: "Right-click options",
        text: "Right-click any item in the right column:\n• Learn more\n• Terminate (non-bases only)",
        hint: "Action required: right-click, then use Learn more OR Terminate.",
        target: () => document.getElementById("discoveredPanel"),
        require: () => tutorialSignals.rcOpened && (tutorialSignals.learnOpened || tutorialSignals.terminatedUsed),
        autoAdvance: true
      },
      {
        id: "finish",
        title: "Keep crafting!",
        text: "Discover pathways, effects, and final drugs.\nUse 📚 reference library if you ever want the full recipe book & profiles.",
        hint: "Press Next to finish.",
        target: () => document.getElementById("discoveredPanel"),
        require: null
      },
    ]
  };

  function tutorialStart(){
    tutorial.active = true;
    tutorial.step = 0;
    tutorial.autoLock = false;
    tutorialSignals.baseClicks = 0;
    tutorialSignals.combined = false;
    tutorialSignals.rcOpened = false;
    tutorialSignals.learnOpened = false;
    tutorialSignals.terminatedUsed = false;

    tutorialOverlay.style.display = "block";
    tutorialOverlay.setAttribute("aria-hidden","false");
    tutorialRender();
  }
  function tutorialStop(){
    tutorial.active = false;
    tutorialOverlay.style.display = "none";
    tutorialOverlay.setAttribute("aria-hidden","true");
  }

  function tutorialRender(){
    if(!tutorial.active) return;
    const s = tutorial.steps[tutorial.step];
    if(!s){ tutorialStop(); return; }

    const el = s.target?.();
    const rect = el ? el.getBoundingClientRect() : {left:20, top:20, right:320, bottom:160};
    const pad = 10;
    const hole = { left: rect.left - pad, top: rect.top - pad, right: rect.right + pad, bottom: rect.bottom + pad };
    const vw = window.innerWidth, vh = window.innerHeight;

    shadeTop.style.left = "0px";
    shadeTop.style.top = "0px";
    shadeTop.style.width = vw + "px";
    shadeTop.style.height = Math.max(0, hole.top) + "px";

    shadeLeft.style.left = "0px";
    shadeLeft.style.top = Math.max(0, hole.top) + "px";
    shadeLeft.style.width = Math.max(0, hole.left) + "px";
    shadeLeft.style.height = Math.max(0, hole.bottom - hole.top) + "px";

    shadeRight.style.left = Math.max(0, hole.right) + "px";
    shadeRight.style.top = Math.max(0, hole.top) + "px";
    shadeRight.style.width = Math.max(0, vw - hole.right) + "px";
    shadeRight.style.height = Math.max(0, hole.bottom - hole.top) + "px";

    shadeBottom.style.left = "0px";
    shadeBottom.style.top = Math.max(0, hole.bottom) + "px";
    shadeBottom.style.width = vw + "px";
    shadeBottom.style.height = Math.max(0, vh - hole.bottom) + "px";

    tTitle.textContent = s.title;
    tText.textContent = s.text;
    tHint.textContent = s.hint;

    const canNext = (typeof s.require !== "function") || s.require();
    tNextBtn.disabled = !canNext;

    const bubbleW = Math.min(380, vw - 24);
    const bubbleX = clamp(hole.left, 12, vw - 12 - bubbleW);
    let bubbleY = hole.top - 190;
    if(bubbleY < 12) bubbleY = hole.bottom + 12;
    bubbleY = clamp(bubbleY, 12, vh - 12 - 220);

    tBubble.style.left = bubbleX + "px";
    tBubble.style.top = bubbleY + "px";
  }

  function tutorialNext(){
    if(!tutorial.active) return;
    const s = tutorial.steps[tutorial.step];
    if(s && typeof s.require === "function" && !s.require()){
      toast("Complete the tutorial action first.", "bad");
      return;
    }
    tutorial.step++;
    tutorial.autoLock = false;
    if(tutorial.step >= tutorial.steps.length){
      tutorialStop();
      toast("Tutorial complete! Keep building.", "good");
    } else {
      tutorialRender();
    }
  }
  function tutorialTryAdvance(){
    if(!tutorial.active) return;
    const s = tutorial.steps[tutorial.step];
    if(!s) return;

    if(typeof s.require === "function") tNextBtn.disabled = !s.require();
    if(s.autoAdvance && typeof s.require === "function" && s.require() && !tutorial.autoLock){
      tutorial.autoLock = true;
      setTimeout(() => tutorialNext(), 280);
    }
  }

  tNextBtn.addEventListener("click", tutorialNext);
  tSkipBtn.addEventListener("click", () => { tutorialStop(); toast("Tutorial skipped.", ""); });
  window.addEventListener("resize", () => { if(tutorial.active) tutorialRender(); });

  // start
  playBtn.addEventListener("click", () => {
    startScreen.style.display = "none";
    app.style.display = "block";
    renderSidebar();
    toast("Click to spawn. Hold to drag. Only valid recipes craft.", "");
    requestAnimationFrame(tick);
    setTimeout(() => tutorialStart(), 150);
  });

  // keep nodes in-bounds on resize
  window.addEventListener("resize", () => {
    const r = getCanvasRect();
    for(const n of state.nodes.values()){
      n.x = clamp(n.x, 0, r.width - NODE);
      n.y = clamp(n.y, 0, r.height - NODE);
      n.tx = clamp(n.tx, 0, r.width - NODE);
      n.ty = clamp(n.ty, 0, r.height - NODE);
      applyTransform(n);
    }
  });

  renderSidebar();