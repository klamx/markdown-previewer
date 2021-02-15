import React, { useState } from "react";
import marked from "marked";

function App() {
  const renderer = new marked.Renderer();
  const [markdown, setMarkdown] = useState(start);

  marked.setOptions({
    breaks: true,
  });

  const clear = () => {
    setMarkdown("");
  };

  // document.getElementById("preview").innerHTML = marked(e.target.value);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 mt-4" style={{ height: "10vh" }}>
          <span className="h1 ">Editor</span>
          <button
            onClick={clear}
            className="btn btn-outline-danger float-right"
          >
            Clear
          </button>
        </div>
        <div className="col-6 mt-4" style={{ height: "10vh" }}>
          <span className="h1 ">Markdown Previewer</span>
        </div>
      </div>
      <div className="row">
        <textarea
          onChange={(e) => {
            setMarkdown(e.target.value);
          }}
          name=""
          id="editor"
          cols="10"
          rows="31"
          className="col-6 mt-2"
          value={markdown}
          style={{ height: "80vh", outlineStyle: "none", borderRadius: 5 }}
        ></textarea>
        <div
          id="preview"
          className="col-6 bg-light mt-2"
          style={{
            height: "80vh",
            overflowY: "auto",
            borderRadius: 5,
            color: "#222",
          }}
          dangerouslySetInnerHTML={{
            __html: marked(markdown, { renderer: renderer }),
          }}
        />
      </div>
    </div>
  );
}

const start = `# Quid causa numen odoratas accensa sonanti primum

## Teneo tollit lacrimae

Lorem markdownum vellemque habitatis, dolore loqui, aufer in. [Suis quae quod]
litore percussit studii quam melior: speciem in magni, et. Inmiscuit honor,
mitissima tantum Redditus: utque nominibus illi. Ausi illius [priores] locutum
lux Taenaria amnis, in adeunda mandat _placent_ stravit _sum trahunt delapsa_;
concilio!

> Est parvae acti putant: nec: cessit, et sidera adesset medii. Quae fuit omnia
> mentes quamquam, terrarumque?

Est quos facto per; __ligno__ nullo portis sola armo me superesse habet non
caput manifesta ille linguae quo! Longi isdem fratrem ignes tulit, invenio; nam
neque et sacras imis vides et cornu. Dea enim nais est Pergama magis propulit
vidit stuppea nubibus _auditque Fames_ et nec.

## Frequentant laboriferi passu quinquennia natae Cinyra legem

Hostem quid natus quae __aura vultu totidem__ germana, _aut pedumque_,
lacrimavit [inritamina]. Nefanda __sub__ est arbiter a auras Lucifer Phoebus ut
vocando aether sollicita saepe Haemoniam obliquaque primis arma: exigua.

1. Pectoris colunt sit
2. Cephalus florentia praescius modo ardua dentibus
3. Frondes virginibus iamque
4. Celsior viroque
5. Maternae ipse Tempus iacebat
6. Ignis pectora magna videt

Haud cervix _habet salix reticere_ aequali esse ianua Lucifer Lycaoniae. Quid
ipse spes fuerat et ante per manant sint, hoc? In Achilleos ungula Aeacon! Os
pedibus Turpe, in non iamque cernam, sum exorata.

    hdv_character_services += soPage(parityEideText.cybercrimeDomainDma.cdfs(
            petaflopsMacroHard(linkedinScalableOpengl, sectorBaseCell, font),
            fileLinkRw), petabyte);
    coreCopy.printerProgressive = quad_cc(41);
    if (autoresponder.basic_codec_backbone(core)) {
        dockErrorDv = bounceDirectPpl;
    } else {
        system_p_service(deprecatedDel + dongle, smishing_mask);
        parse = powerHttps;
        system.wildcard_motherboard_recycle(fileSyncTweak);
    }
    if (757503) {
        file(lock, ultra_dll_wavelength - vertical);
    } else {
        data_im.storage_truncate_full.boolean(left_mtu_youtube);
        odbc_editor = hertzBoolean;
        warmStationMetal.ccCropClass(client + -2);
    }

Sponte munera festa puppimque ingenti, gentisque erigitur in armis sed: est hanc
in pater: haud? Mihi arcum quam stivave molle supplex; infestus est purpureus et
quoque dilexit [gladios].

[Suis quae quod]: http://www.serummonere.com/tum.php
[gladios]: http://echovisus.org/ad-cycnum.php
[inritamina]: http://illinc.org/
[priores]: http://www.spicis.io/`;

export default App;
