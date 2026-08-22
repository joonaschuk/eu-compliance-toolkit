const questions = [
  {
    id: "q1",
    en: {
      question: "What best describes the primary purpose of your AI system?",
      hint: "Select the option that most closely matches your situation.",
    },
    fi: {
      question: "Mikä kuvaa parhaiten tekoälyjärjestelmäsi ensisijaista käyttötarkoitusta?",
      hint: "Valitse vaihtoehto, joka vastaa parhaiten tilannettasi.",
    },
    type: "single",
    options: [
      {
        id: "q1_a",
        en: "It is used exclusively for military, defence, or national security purposes",
        fi: "Sitä käytetään yksinomaan sotilaallisiin, puolustuksellisiin tai kansallisen turvallisuuden tarkoituksiin",
        result: {
          type: "out_of_scope",
          article: "Article 2(3)",
          en: {
            title: "Out of Scope",
            explanation:
              "AI systems used exclusively for military, defence, or national security purposes are excluded from the EU AI Act.",
            obligations: "No obligations under the EU AI Act apply.",
          },
          fi: {
            title: "Soveltamisalan ulkopuolella",
            explanation:
              "Yksinomaan sotilaallisiin, puolustuksellisiin tai kansallisen turvallisuuden tarkoituksiin käytettävät tekoälyjärjestelmät on suljettu EU:n tekoälylain soveltamisalan ulkopuolelle.",
            obligations: "EU:n tekoälylaki ei aseta velvoitteita.",
          },
        },
      },
      {
        id: "q1_b",
        en: "It is a research or development prototype not yet placed on the market",
        fi: "Se on tutkimus- tai kehitysprototyppi, jota ei ole vielä saatettu markkinoille",
        result: {
          type: "out_of_scope",
          article: "Article 2(8)",
          en: {
            title: "Out of Scope",
            explanation:
              "AI systems under research and development, prior to being placed on the market or put into service, are excluded from the EU AI Act. Note: testing in real-world conditions is not excluded.",
            obligations: "No obligations under the EU AI Act apply at this stage.",
          },
          fi: {
            title: "Soveltamisalan ulkopuolella",
            explanation:
              "Tutkimus- ja kehitysvaiheessa olevat tekoälyjärjestelmät, joita ei ole vielä saatettu markkinoille tai otettu käyttöön, on suljettu EU:n tekoälylain soveltamisalan ulkopuolelle. Huomio: todellisissa olosuhteissa tapahtuva testaus ei ole poissuljettu.",
            obligations: "EU:n tekoälylaki ei aseta velvoitteita tässä vaiheessa.",
          },
        },
      },
      {
        id: "q1_c",
        en: "It is used only by an individual for personal, non-professional activities",
        fi: "Sitä käyttää ainoastaan yksityishenkilö henkilökohtaisiin, ei-ammatillisiin tarkoituksiin",
        result: {
          type: "out_of_scope",
          article: "Article 2(10)",
          en: {
            title: "Out of Scope",
            explanation:
              "The EU AI Act does not apply to obligations of deployers who are natural persons using AI systems in the course of a purely personal non-professional activity.",
            obligations: "No obligations under the EU AI Act apply.",
          },
          fi: {
            title: "Soveltamisalan ulkopuolella",
            explanation:
              "EU:n tekoälylakia ei sovelleta käyttäjiin, jotka ovat luonnollisia henkilöitä käyttämässä tekoälyjärjestelmiä puhtaasti henkilökohtaisessa ei-ammatillisessa toiminnassa.",
            obligations: "EU:n tekoälylaki ei aseta velvoitteita.",
          },
        },
      },
      {
        id: "q1_d",
        en: "None of the above",
        fi: "Ei mikään yllä olevista",
        next: "q2",
      },
    ],
  },
  {
    id: "q2",
    en: {
      question:
        "Does your system infer outputs — such as predictions, recommendations, decisions, or generated content — from inputs it receives?",
      hint: "A system that only executes explicitly predefined rules without any inference does not qualify as an AI system under the EU AI Act.",
    },
    fi: {
      question:
        "Tuottaako järjestelmäsi päätelmiä — kuten ennusteita, suosituksia, päätöksiä tai generoitua sisältöä — saamistaan syötteistä?",
      hint: "Järjestelmä, joka ainoastaan toteuttaa etukäteen määriteltyjä sääntöjä ilman päättelykykyä, ei ole EU:n tekoälylain mukainen tekoälyjärjestelmä.",
    },
    type: "single",
    options: [
      {
        id: "q2_a",
        en: "Yes, it infers outputs from inputs",
        fi: "Kyllä, se tuottaa päätelmiä syötteistä",
        next: "q3",
      },
      {
        id: "q2_b",
        en: "No, it only follows fixed, manually programmed rules",
        fi: "Ei, se ainoastaan noudattaa kiinteitä, manuaalisesti ohjelmoituja sääntöjä",
        result: {
          type: "not_ai_system",
          article: "Article 3(1)",
          en: {
            title: "Not an AI System under the EU AI Act",
            explanation:
              "Your system does not meet the definition of an AI system under the EU AI Act. The Act only applies to machine-based systems that infer outputs from inputs. Systems based solely on manually defined rules are not covered.",
            obligations: "No obligations under the EU AI Act apply.",
          },
          fi: {
            title: "Ei tekoälyjärjestelmä EU:n tekoälylain mukaan",
            explanation:
              "Järjestelmäsi ei täytä EU:n tekoälylain mukaista tekoälyjärjestelmän määritelmää. Lakia sovelletaan vain konepohjaisiin järjestelmiin, jotka tuottavat päätelmiä syötteistä. Pelkästään manuaalisesti määriteltyihin sääntöihin perustuvat järjestelmät eivät kuulu soveltamisalaan.",
            obligations: "EU:n tekoälylaki ei aseta velvoitteita.",
          },
        },
      },
    ],
  },
  {
    id: "q3",
    en: {
      question: "Does your system do any of the following?",
      hint: "Select all that apply. These practices are prohibited under the EU AI Act regardless of the intended purpose.",
    },
    fi: {
      question: "Tekeekö järjestelmäsi mitään seuraavista?",
      hint: "Valitse kaikki sopivat. Nämä käytännöt ovat kiellettyjä EU:n tekoälylain nojalla riippumatta käyttötarkoituksesta.",
    },
    type: "multi",
    options: [
      {
        id: "q3_a",
        en: "Uses subliminal or manipulative techniques to distort a person's behaviour in a way that causes or is likely to cause significant harm",
        fi: "Käyttää subliminaalisia tai manipulatiivisia tekniikoita henkilön käyttäytymisen vääristämiseksi tavalla, joka aiheuttaa tai todennäköisesti aiheuttaa merkittävää haittaa",
        article: "Article 5(1)(a)",
      },
      {
        id: "q3_b",
        en: "Exploits vulnerabilities of people due to age, disability, or socioeconomic situation to distort their behaviour harmfully",
        fi: "Hyödyntää henkilöiden haavoittuvuuksia iän, vamman tai sosioekonomisen tilanteen vuoksi heidän käyttäytymisensä haitalliseksi vääristämiseksi",
        article: "Article 5(1)(b)",
      },
      {
        id: "q3_c",
        en: "Evaluates or classifies people based on their social behaviour over time, leading to detrimental treatment unrelated to the original context (social scoring)",
        fi: "Arvioi tai luokittelee henkilöitä heidän sosiaalisen käyttäytymisensä perusteella ajan mittaan tavalla, joka johtaa haitalliseen kohteluun alkuperäiseen asiayhteyteen liittymättömissä yhteyksissä (sosiaalinen pisteytys)",
        article: "Article 5(1)(c)",
      },
      {
        id: "q3_d",
        en: "Assesses the risk of a person committing a crime based solely on profiling or personality traits",
        fi: "Arvioi henkilön riskiä syyllistyä rikokseen pelkästään profiloinnin tai persoonallisuuden piirteiden perusteella",
        article: "Article 5(1)(d)",
      },
      {
        id: "q3_e",
        en: "Creates or expands facial recognition databases through untargeted scraping of facial images from the internet or CCTV",
        fi: "Luo tai laajentaa kasvojentunnistustietokantoja kohdentamattomalla kasvokuvien keräämisellä internetistä tai valvontakameroista",
        article: "Article 5(1)(e)",
      },
      {
        id: "q3_f",
        en: "Infers emotions of individuals in the workplace or educational settings (unless for medical or safety purposes)",
        fi: "Päättelee henkilöiden tunteita työpaikalla tai oppilaitoksissa (ellei lääketieteellisiin tai turvallisuustarkoituksiin)",
        article: "Article 5(1)(f)",
      },
      {
        id: "q3_g",
        en: "Categorises people based on biometric data to infer race, political opinions, trade union membership, religion, or sexual orientation",
        fi: "Luokittelee henkilöitä biometristen tietojen perusteella rotuun, poliittisiin mielipiteisiin, ammattiliiton jäsenyyteen, uskontoon tai seksuaaliseen suuntautumiseen päättelemiseksi",
        article: "Article 5(1)(g)",
      },
      {
        id: "q3_h",
        en: "Performs real-time remote biometric identification in publicly accessible spaces for law enforcement purposes",
        fi: "Suorittaa reaaliaikaista etäbiometrista tunnistamista julkisesti saavutettavissa tiloissa lainvalvontatarkoituksiin",
        article: "Article 5(1)(h)",
      },
      {
        id: "q3_none",
        en: "None of the above",
        fi: "Ei mikään yllä olevista",
        next: "q4",
        exclusive: true,
      },
    ],
    prohibitedResult: {
      type: "prohibited",
      en: {
        title: "Prohibited Practice",
        explanation:
          "Your AI system involves one or more practices that are explicitly prohibited under the EU AI Act. These prohibitions apply regardless of the intended purpose or the benefits the system may provide.",
        obligations:
          "Placing on the market, putting into service, or using this system is prohibited. Violations are subject to fines of up to €35,000,000 or 7% of total worldwide annual turnover, whichever is higher.",
      },
      fi: {
        title: "Kielletty käytäntö",
        explanation:
          "Tekoälyjärjestelmäsi sisältää yhden tai useamman käytännön, jotka ovat nimenomaisesti kiellettyjä EU:n tekoälylaissa. Nämä kiellot koskevat riippumatta käyttötarkoituksesta tai järjestelmän mahdollisista hyödyistä.",
        obligations:
          "Tämän järjestelmän markkinoille saattaminen, käyttöönotto tai käyttäminen on kielletty. Rikkomuksista voidaan määrätä sakkoja enintään 35 000 000 euroa tai 7 % maailmanlaajuisesta vuotuisesta kokonaisliikevaihdosta, sen mukaan kumpi on suurempi.",
      },
    },
  },
  {
    id: "q4",
    en: {
      question:
        "Is your AI system a safety component of a product covered by EU harmonisation legislation — such as medical devices, machinery, vehicles, aviation equipment, or toys?",
      hint: "Safety components are systems used to directly protect the physical integrity of a product or the health and safety of persons.",
    },
    fi: {
      question:
        "Onko tekoälyjärjestelmäsi EU:n yhdenmukaistamislainsäädännön kattaman tuotteen turvakomponentti — kuten lääkinnälliset laitteet, koneet, ajoneuvot, ilmailulaitteet tai lelut?",
      hint: "Turvakomponentit ovat järjestelmiä, joita käytetään suoraan suojelemaan tuotteen fyysistä eheyttä tai henkilöiden terveyttä ja turvallisuutta.",
    },
    type: "single",
    options: [
      {
        id: "q4_a",
        en: "Yes",
        fi: "Kyllä",
        next: "q4b",
      },
      {
        id: "q4_b",
        en: "No",
        fi: "Ei",
        next: "q5",
      },
    ],
  },
  {
    id: "q4b",
    en: {
      question:
        "Does that product require third-party conformity assessment under the relevant EU harmonisation legislation?",
      hint: "Third-party conformity assessment means an independent body (notified body) must verify that the product meets the requirements before it can be placed on the market.",
    },
    fi: {
      question:
        "Edellyttääkö kyseinen tuote kolmannen osapuolen vaatimustenmukaisuuden arviointia asiaankuuluvan EU:n yhdenmukaistamislainsäädännön nojalla?",
      hint: "Kolmannen osapuolen vaatimustenmukaisuuden arviointi tarkoittaa, että riippumattoman elimen (ilmoitetun laitoksen) on varmistettava, että tuote täyttää vaatimukset ennen kuin se voidaan saattaa markkinoille.",
    },
    type: "single",
    options: [
      {
        id: "q4b_a",
        en: "Yes, third-party conformity assessment is required",
        fi: "Kyllä, kolmannen osapuolen vaatimustenmukaisuuden arviointi vaaditaan",
        result: {
          type: "high_risk",
          article: "Article 6(1)",
          en: {
            title: "High-Risk AI System",
            explanation:
              "Your AI system is classified as high-risk because it is a safety component of a product that requires third-party conformity assessment under EU harmonisation legislation.",
            obligations:
              "You must comply with all requirements in Chapter III, Section 2 of the EU AI Act, including risk management, data governance, technical documentation, transparency, human oversight, and accuracy requirements. Conformity assessment must be carried out as part of the procedure required under the relevant harmonisation legislation.",
          },
          fi: {
            title: "Korkean riskin tekoälyjärjestelmä",
            explanation:
              "Tekoälyjärjestelmäsi luokitellaan korkean riskin järjestelmäksi, koska se on EU:n yhdenmukaistamislainsäädännön mukaista kolmannen osapuolen vaatimustenmukaisuuden arviointia edellyttävän tuotteen turvakomponentti.",
            obligations:
              "Sinun on noudatettava kaikkia EU:n tekoälylain III luvun 2 jakson vaatimuksia, mukaan lukien riskienhallinta, tietojen hallinta, tekninen dokumentaatio, avoimuus, ihmisen valvonta ja tarkkuusvaatimukset. Vaatimustenmukaisuuden arviointi on suoritettava osana asiaankuuluvan yhdenmukaistamislainsäädännön edellyttämää menettelyä.",
          },
        },
      },
      {
        id: "q4b_b",
        en: "No, third-party conformity assessment is not required",
        fi: "Ei, kolmannen osapuolen vaatimustenmukaisuuden arviointia ei vaadita",
        next: "q5",
      },
    ],
  },
  {
    id: "q5",
    en: {
      question:
        "In which area will your AI system primarily be used?",
      hint: "Select the area that best describes the main context of use. If multiple areas apply, select the most relevant one.",
    },
    fi: {
      question: "Millä alalla tekoälyjärjestelmääsi käytetään ensisijaisesti?",
      hint: "Valitse alue, joka parhaiten kuvaa pääasiallista käyttöympäristöä. Jos useita alueita soveltuu, valitse sopivin.",
    },
    type: "single",
    options: [
      {
        id: "q5_biometrics",
        en: "Biometrics — identifying, categorising, or inferring emotions from people using biometric data",
        fi: "Biometriikka — henkilöiden tunnistaminen, luokittelu tai tunteiden päätteleminen biometristen tietojen avulla",
        next: "q5_biometrics_detail",
      },
      {
        id: "q5_infrastructure",
        en: "Critical infrastructure — managing or operating energy, water, transport, or digital infrastructure",
        fi: "Kriittinen infrastruktuuri — energian, veden, liikenteen tai digitaalisen infrastruktuurin hallinta tai käyttö",
        result: {
          type: "high_risk",
          article: "Article 6(2), Annex III, point 2",
          en: {
            title: "High-Risk AI System",
            explanation:
              "AI systems intended to be used as safety components in the management and operation of critical infrastructure are classified as high-risk under the EU AI Act.",
            obligations:
              "You must comply with all requirements in Chapter III, Section 2 of the EU AI Act, including risk management, data governance, technical documentation, transparency, human oversight, and accuracy and robustness requirements.",
          },
          fi: {
            title: "Korkean riskin tekoälyjärjestelmä",
            explanation:
              "Tekoälyjärjestelmät, joita on tarkoitus käyttää turvakomponentteina kriittisen infrastruktuurin hallinnassa ja käytössä, luokitellaan korkean riskin järjestelmiksi EU:n tekoälylaissa.",
            obligations:
              "Sinun on noudatettava kaikkia EU:n tekoälylain III luvun 2 jakson vaatimuksia, mukaan lukien riskienhallinta, tietojen hallinta, tekninen dokumentaatio, avoimuus, ihmisen valvonta sekä tarkkuus- ja luotettavuusvaatimukset.",
          },
        },
      },
      {
        id: "q5_education",
        en: "Education and vocational training",
        fi: "Koulutus ja ammatillinen koulutus",
        next: "q5_education_detail",
      },
      {
        id: "q5_employment",
        en: "Employment, HR, or workforce management",
        fi: "Työllisyys, henkilöstöhallinto tai työvoimanhallinta",
        next: "q5_employment_detail",
      },
      {
        id: "q5_services",
        en: "Essential public or private services — social benefits, credit scoring, insurance, or emergency services",
        fi: "Välttämättömät julkiset tai yksityiset palvelut — sosiaaliset etuudet, luottoluokitus, vakuutukset tai hätäpalvelut",
        next: "q5_services_detail",
      },
      {
        id: "q5_lawenforcement",
        en: "Law enforcement",
        fi: "Lainvalvonta",
        next: "q5_lawenforcement_detail",
      },
      {
        id: "q5_migration",
        en: "Migration, asylum, or border control management",
        fi: "Maahanmuutto, turvapaikka-asiat tai rajavalvonnan hallinta",
        next: "q5_migration_detail",
      },
      {
        id: "q5_justice",
        en: "Administration of justice or democratic processes",
        fi: "Oikeudenhoidon hallinto tai demokraattiset prosessit",
        next: "q5_justice_detail",
      },
      {
        id: "q5_none",
        en: "None of the above",
        fi: "Ei mikään yllä olevista",
        next: "q7",
      },
    ],
  },
  {
    id: "q5_biometrics_detail",
    en: {
      question: "Which best describes your system's function in the area of biometrics?",
      hint: "Remote biometric identification means identifying people at a distance without their active involvement.",
    },
    fi: {
      question: "Mikä kuvaa parhaiten järjestelmäsi toimintoa biometriikan alalla?",
      hint: "Etäbiometrinen tunnistaminen tarkoittaa henkilöiden tunnistamista etäältä ilman heidän aktiivista osallistumistaan.",
    },
    type: "single",
    options: [
      {
        id: "q5_bio_a",
        en: "Remote biometric identification — identifying people at a distance without their active involvement",
        fi: "Etäbiometrinen tunnistaminen — henkilöiden tunnistaminen etäältä ilman heidän aktiivista osallistumistaan",
        result: {
          type: "high_risk",
          article: "Article 6(2), Annex III, point 1(a)",
          en: {
            title: "High-Risk AI System",
            explanation:
              "Remote biometric identification systems are classified as high-risk under the EU AI Act. This excludes systems used solely for biometric verification, where the sole purpose is to confirm that a specific person is who they claim to be.",
            obligations:
              "You must comply with all requirements in Chapter III, Section 2, including risk management, data governance, technical documentation, transparency, human oversight, and accuracy requirements.",
          },
          fi: {
            title: "Korkean riskin tekoälyjärjestelmä",
            explanation:
              "Etäbiometriset tunnistamisjärjestelmät luokitellaan korkean riskin järjestelmiksi EU:n tekoälylaissa. Tämä ei koske järjestelmiä, joita käytetään yksinomaan biometriseen todentamiseen, jonka ainoana tarkoituksena on vahvistaa, että tietty henkilö on se, joksi hän väittää olevansa.",
            obligations:
              "Sinun on noudatettava kaikkia III luvun 2 jakson vaatimuksia, mukaan lukien riskienhallinta, tietojen hallinta, tekninen dokumentaatio, avoimuus, ihmisen valvonta ja tarkkuusvaatimukset.",
          },
        },
      },
      {
        id: "q5_bio_b",
        en: "Biometric categorisation — assigning people to categories based on sensitive attributes such as race, religion, or political opinion",
        fi: "Biometrinen luokittelu — henkilöiden luokittelu kategorioihin arkaluonteisten ominaisuuksien, kuten rodun, uskonnon tai poliittisen mielipiteen perusteella",
        result: {
          type: "high_risk",
          article: "Article 6(2), Annex III, point 1(b)",
          en: {
            title: "High-Risk AI System",
            explanation:
              "AI systems intended for biometric categorisation according to sensitive or protected attributes are classified as high-risk under the EU AI Act.",
            obligations:
              "You must comply with all requirements in Chapter III, Section 2, including risk management, data governance, technical documentation, transparency, human oversight, and accuracy requirements.",
          },
          fi: {
            title: "Korkean riskin tekoälyjärjestelmä",
            explanation:
              "Tekoälyjärjestelmät, jotka on tarkoitettu biometriseen luokitteluun arkaluonteisten tai suojeltujen ominaisuuksien mukaan, luokitellaan korkean riskin järjestelmiksi EU:n tekoälylaissa.",
            obligations:
              "Sinun on noudatettava kaikkia III luvun 2 jakson vaatimuksia, mukaan lukien riskienhallinta, tietojen hallinta, tekninen dokumentaatio, avoimuus, ihmisen valvonta ja tarkkuusvaatimukset.",
          },
        },
      },
      {
        id: "q5_bio_c",
        en: "Emotion recognition — identifying or inferring emotions of individuals based on biometric data",
        fi: "Tunteiden tunnistaminen — henkilöiden tunteiden tunnistaminen tai päätteleminen biometristen tietojen perusteella",
        result: {
          type: "high_risk",
          article: "Article 6(2), Annex III, point 1(c)",
          en: {
            title: "High-Risk AI System",
            explanation:
              "Emotion recognition systems are classified as high-risk under the EU AI Act, unless they are prohibited under Article 5 (e.g. emotion recognition in workplace or educational settings).",
            obligations:
              "You must comply with all requirements in Chapter III, Section 2, including risk management, data governance, technical documentation, transparency, human oversight, and accuracy requirements.",
          },
          fi: {
            title: "Korkean riskin tekoälyjärjestelmä",
            explanation:
              "Tunteiden tunnistamisjärjestelmät luokitellaan korkean riskin järjestelmiksi EU:n tekoälylaissa, ellei niitä ole kielletty 5 artiklan nojalla (esim. tunteiden tunnistaminen työpaikalla tai oppilaitoksissa).",
            obligations:
              "Sinun on noudatettava kaikkia III luvun 2 jakson vaatimuksia, mukaan lukien riskienhallinta, tietojen hallinta, tekninen dokumentaatio, avoimuus, ihmisen valvonta ja tarkkuusvaatimukset.",
          },
        },
      },
      {
        id: "q5_bio_d",
        en: "Biometric verification only — confirming that a specific person is who they claim to be (e.g. unlocking a device or accessing a service)",
        fi: "Ainoastaan biometrinen todentaminen — vahvistaminen, että tietty henkilö on se, joksi hän väittää olevansa (esim. laitteen avaaminen tai palveluun pääsy)",
        next: "q7",
      },
    ],
  },
  {
    id: "q5_education_detail",
    en: {
      question: "Which best describes your system's function in education or vocational training?",
      hint: "Select the option that most closely matches your system's intended use.",
    },
    fi: {
      question: "Mikä kuvaa parhaiten järjestelmäsi toimintoa koulutuksessa tai ammatillisessa koulutuksessa?",
      hint: "Valitse vaihtoehto, joka vastaa parhaiten järjestelmäsi aiottu käyttötarkoitusta.",
    },
    type: "single",
    options: [
      {
        id: "q5_edu_a",
        en: "Determining access or admission to educational institutions or programmes",
        fi: "Pääsyn tai hyväksynnän määrittäminen oppilaitoksiin tai ohjelmiin",
        result: {
          type: "high_risk",
          article: "Article 6(2), Annex III, point 3(a)",
          en: {
            title: "High-Risk AI System",
            explanation:
              "AI systems intended to determine access or admission to educational and vocational training institutions are classified as high-risk under the EU AI Act.",
            obligations:
              "You must comply with all requirements in Chapter III, Section 2, including risk management, data governance, technical documentation, transparency, human oversight, and accuracy requirements.",
          },
          fi: {
            title: "Korkean riskin tekoälyjärjestelmä",
            explanation:
              "Tekoälyjärjestelmät, jotka on tarkoitettu määrittämään pääsy koulutus- ja ammatillisiin oppilaitoksiin, luokitellaan korkean riskin järjestelmiksi EU:n tekoälylaissa.",
            obligations:
              "Sinun on noudatettava kaikkia III luvun 2 jakson vaatimuksia, mukaan lukien riskienhallinta, tietojen hallinta, tekninen dokumentaatio, avoimuus, ihmisen valvonta ja tarkkuusvaatimukset.",
          },
        },
      },
      {
        id: "q5_edu_b",
        en: "Evaluating learning outcomes or assessing the appropriate level of education for an individual",
        fi: "Oppimistulosten arviointi tai henkilölle sopivan koulutustason arviointi",
        result: {
          type: "high_risk",
          article: "Article 6(2), Annex III, point 3(b) and 3(c)",
          en: {
            title: "High-Risk AI System",
            explanation:
              "AI systems intended to evaluate learning outcomes or assess the appropriate level of education for an individual are classified as high-risk under the EU AI Act.",
            obligations:
              "You must comply with all requirements in Chapter III, Section 2, including risk management, data governance, technical documentation, transparency, human oversight, and accuracy requirements.",
          },
          fi: {
            title: "Korkean riskin tekoälyjärjestelmä",
            explanation:
              "Tekoälyjärjestelmät, jotka on tarkoitettu arvioimaan oppimistuloksia tai henkilölle sopivaa koulutustasoa, luokitellaan korkean riskin järjestelmiksi EU:n tekoälylaissa.",
            obligations:
              "Sinun on noudatettava kaikkia III luvun 2 jakson vaatimuksia, mukaan lukien riskienhallinta, tietojen hallinta, tekninen dokumentaatio, avoimuus, ihmisen valvonta ja tarkkuusvaatimukset.",
          },
        },
      },
      {
        id: "q5_edu_c",
        en: "Monitoring and detecting prohibited behaviour of students during tests",
        fi: "Opiskelijoiden kielletyn käyttäytymisen valvonta ja havaitseminen kokeiden aikana",
        result: {
          type: "high_risk",
          article: "Article 6(2), Annex III, point 3(d)",
          en: {
            title: "High-Risk AI System",
            explanation:
              "AI systems intended to monitor and detect prohibited behaviour of students during tests are classified as high-risk under the EU AI Act.",
            obligations:
              "You must comply with all requirements in Chapter III, Section 2, including risk management, data governance, technical documentation, transparency, human oversight, and accuracy requirements.",
          },
          fi: {
            title: "Korkean riskin tekoälyjärjestelmä",
            explanation:
              "Tekoälyjärjestelmät, jotka on tarkoitettu valvomaan ja havaitsemaan opiskelijoiden kiellettyä käyttäytymistä kokeiden aikana, luokitellaan korkean riskin järjestelmiksi EU:n tekoälylaissa.",
            obligations:
              "Sinun on noudatettava kaikkia III luvun 2 jakson vaatimuksia, mukaan lukien riskienhallinta, tietojen hallinta, tekninen dokumentaatio, avoimuus, ihmisen valvonta ja tarkkuusvaatimukset.",
          },
        },
      },
      {
        id: "q5_edu_d",
        en: "None of these specifically",
        fi: "Ei mikään näistä erityisesti",
        next: "q7",
      },
    ],
  },
  {
    id: "q5_employment_detail",
    en: {
      question: "Which best describes your system's function in employment or workforce management?",
      hint: "Select the option that most closely matches your system's intended use.",
    },
    fi: {
      question: "Mikä kuvaa parhaiten järjestelmäsi toimintoa työllisyydessä tai työvoimanhallinnassa?",
      hint: "Valitse vaihtoehto, joka vastaa parhaiten järjestelmäsi aiottu käyttötarkoitusta.",
    },
    type: "single",
    options: [
      {
        id: "q5_emp_a",
        en: "Recruitment or selection of candidates — such as screening CVs, ranking applicants, or targeting job advertisements",
        fi: "Ehdokkaiden rekrytointi tai valinta — kuten ansioluetteloiden seulonta, hakijoiden järjestäminen tai työpaikkailmoitusten kohdentaminen",
        result: {
          type: "high_risk",
          article: "Article 6(2), Annex III, point 4(a)",
          en: {
            title: "High-Risk AI System",
            explanation:
              "AI systems intended to be used for recruitment or selection of natural persons, including placing targeted job advertisements, analysing applications, and evaluating candidates, are classified as high-risk.",
            obligations:
              "You must comply with all requirements in Chapter III, Section 2, including risk management, data governance, technical documentation, transparency, human oversight, and accuracy requirements.",
          },
          fi: {
            title: "Korkean riskin tekoälyjärjestelmä",
            explanation:
              "Tekoälyjärjestelmät, jotka on tarkoitettu luonnollisten henkilöiden rekrytointiin tai valintaan, mukaan lukien kohdennettujen työpaikkailmoitusten julkaiseminen, hakemusten analysointi ja ehdokkaiden arviointi, luokitellaan korkean riskin järjestelmiksi.",
            obligations:
              "Sinun on noudatettava kaikkia III luvun 2 jakson vaatimuksia, mukaan lukien riskienhallinta, tietojen hallinta, tekninen dokumentaatio, avoimuus, ihmisen valvonta ja tarkkuusvaatimukset.",
          },
        },
      },
      {
        id: "q5_emp_b",
        en: "Decisions affecting promotion, termination, or work conditions",
        fi: "Ylennettyihin, irtisanomisiin tai työolosuhteisiin vaikuttavat päätökset",
        result: {
          type: "high_risk",
          article: "Article 6(2), Annex III, point 4(b)",
          en: {
            title: "High-Risk AI System",
            explanation:
              "AI systems intended to make decisions affecting terms of work-related relationships, promotion or termination of work-related contractual relationships are classified as high-risk.",
            obligations:
              "You must comply with all requirements in Chapter III, Section 2, including risk management, data governance, technical documentation, transparency, human oversight, and accuracy requirements.",
          },
          fi: {
            title: "Korkean riskin tekoälyjärjestelmä",
            explanation:
              "Tekoälyjärjestelmät, jotka on tarkoitettu tekemään työsuhteen ehtoihin, ylentämiseen tai työsopimuksen irtisanomiseen vaikuttavia päätöksiä, luokitellaan korkean riskin järjestelmiksi.",
            obligations:
              "Sinun on noudatettava kaikkia III luvun 2 jakson vaatimuksia, mukaan lukien riskienhallinta, tietojen hallinta, tekninen dokumentaatio, avoimuus, ihmisen valvonta ja tarkkuusvaatimukset.",
          },
        },
      },
      {
        id: "q5_emp_c",
        en: "Allocating tasks based on individual behaviour or personal characteristics",
        fi: "Tehtävien jakaminen yksilöllisen käyttäytymisen tai henkilökohtaisten ominaisuuksien perusteella",
        result: {
          type: "high_risk",
          article: "Article 6(2), Annex III, point 4(b)",
          en: {
            title: "High-Risk AI System",
            explanation:
              "AI systems intended to allocate tasks on the basis of individual behaviour or personal traits or characteristics are classified as high-risk under the EU AI Act.",
            obligations:
              "You must comply with all requirements in Chapter III, Section 2, including risk management, data governance, technical documentation, transparency, human oversight, and accuracy requirements.",
          },
          fi: {
            title: "Korkean riskin tekoälyjärjestelmä",
            explanation:
              "Tekoälyjärjestelmät, jotka on tarkoitettu jakamaan tehtäviä yksilöllisen käyttäytymisen tai henkilökohtaisten piirteiden tai ominaisuuksien perusteella, luokitellaan korkean riskin järjestelmiksi EU:n tekoälylaissa.",
            obligations:
              "Sinun on noudatettava kaikkia III luvun 2 jakson vaatimuksia, mukaan lukien riskienhallinta, tietojen hallinta, tekninen dokumentaatio, avoimuus, ihmisen valvonta ja tarkkuusvaatimukset.",
          },
        },
      },
      {
        id: "q5_emp_d",
        en: "Monitoring or evaluating employee performance or behaviour",
        fi: "Työntekijöiden suorituksen tai käyttäytymisen seuranta tai arviointi",
        result: {
          type: "high_risk",
          article: "Article 6(2), Annex III, point 4(b)",
          en: {
            title: "High-Risk AI System",
            explanation:
              "AI systems intended to monitor and evaluate the performance and behaviour of persons in work-related contractual relationships are classified as high-risk under the EU AI Act.",
            obligations:
              "You must comply with all requirements in Chapter III, Section 2, including risk management, data governance, technical documentation, transparency, human oversight, and accuracy requirements.",
          },
          fi: {
            title: "Korkean riskin tekoälyjärjestelmä",
            explanation:
              "Tekoälyjärjestelmät, jotka on tarkoitettu valvomaan ja arvioimaan työsopimussuhteessa olevien henkilöiden suoritusta ja käyttäytymistä, luokitellaan korkean riskin järjestelmiksi EU:n tekoälylaissa.",
            obligations:
              "Sinun on noudatettava kaikkia III luvun 2 jakson vaatimuksia, mukaan lukien riskienhallinta, tietojen hallinta, tekninen dokumentaatio, avoimuus, ihmisen valvonta ja tarkkuusvaatimukset.",
          },
        },
      },
      {
        id: "q5_emp_e",
        en: "None of these specifically",
        fi: "Ei mikään näistä erityisesti",
        next: "q7",
      },
    ],
  },
  {
    id: "q5_services_detail",
    en: {
      question: "Which best describes your system's function in essential services?",
      hint: "Select the option that most closely matches your system's intended use.",
    },
    fi: {
      question: "Mikä kuvaa parhaiten järjestelmäsi toimintoa välttämättömissä palveluissa?",
      hint: "Valitse vaihtoehto, joka vastaa parhaiten järjestelmäsi aiottu käyttötarkoitusta.",
    },
    type: "single",
    options: [
      {
        id: "q5_srv_a",
        en: "Evaluating eligibility for public assistance benefits or services such as healthcare or social security",
        fi: "Julkisen tuen etuuksien tai palvelujen, kuten terveydenhuollon tai sosiaaliturvan, saamisen edellytysten arviointi",
        result: {
          type: "high_risk",
          article: "Article 6(2), Annex III, point 5(a)",
          en: {
            title: "High-Risk AI System",
            explanation:
              "AI systems intended to evaluate the eligibility of natural persons for essential public assistance benefits and services, including healthcare services, are classified as high-risk.",
            obligations:
              "You must comply with all requirements in Chapter III, Section 2, including risk management, data governance, technical documentation, transparency, human oversight, and accuracy requirements.",
          },
          fi: {
            title: "Korkean riskin tekoälyjärjestelmä",
            explanation:
              "Tekoälyjärjestelmät, jotka on tarkoitettu arvioimaan luonnollisten henkilöiden oikeutta välttämättömiin julkisiin etuuksiin ja palveluihin, mukaan lukien terveydenhuoltopalvelut, luokitellaan korkean riskin järjestelmiksi.",
            obligations:
              "Sinun on noudatettava kaikkia III luvun 2 jakson vaatimuksia, mukaan lukien riskienhallinta, tietojen hallinta, tekninen dokumentaatio, avoimuus, ihmisen valvonta ja tarkkuusvaatimukset.",
          },
        },
      },
      {
        id: "q5_srv_b",
        en: "Evaluating creditworthiness or establishing credit scores",
        fi: "Luottokelpoisuuden arviointi tai luottopisteiden määrittäminen",
        result: {
          type: "high_risk",
          article: "Article 6(2), Annex III, point 5(b)",
          en: {
            title: "High-Risk AI System",
            explanation:
              "AI systems intended to evaluate the creditworthiness of natural persons or establish their credit score are classified as high-risk, with the exception of systems used for detecting financial fraud.",
            obligations:
              "You must comply with all requirements in Chapter III, Section 2, including risk management, data governance, technical documentation, transparency, human oversight, and accuracy requirements.",
          },
          fi: {
            title: "Korkean riskin tekoälyjärjestelmä",
            explanation:
              "Tekoälyjärjestelmät, jotka on tarkoitettu arvioimaan luonnollisten henkilöiden luottokelpoisuutta tai määrittämään heidän luottopisteitään, luokitellaan korkean riskin järjestelmiksi, lukuun ottamatta rahoituspetosten havaitsemiseen käytettäviä järjestelmiä.",
            obligations:
              "Sinun on noudatettava kaikkia III luvun 2 jakson vaatimuksia, mukaan lukien riskienhallinta, tietojen hallinta, tekninen dokumentaatio, avoimuus, ihmisen valvonta ja tarkkuusvaatimukset.",
          },
        },
      },
      {
        id: "q5_srv_c",
        en: "Risk assessment and pricing for life or health insurance",
        fi: "Henki- tai sairausvakuutusten riskien arviointi ja hinnoittelu",
        result: {
          type: "high_risk",
          article: "Article 6(2), Annex III, point 5(c)",
          en: {
            title: "High-Risk AI System",
            explanation:
              "AI systems intended to be used for risk assessment and pricing in relation to natural persons in the case of life and health insurance are classified as high-risk.",
            obligations:
              "You must comply with all requirements in Chapter III, Section 2, including risk management, data governance, technical documentation, transparency, human oversight, and accuracy requirements.",
          },
          fi: {
            title: "Korkean riskin tekoälyjärjestelmä",
            explanation:
              "Tekoälyjärjestelmät, jotka on tarkoitettu luonnollisten henkilöiden henki- ja sairausvakuutusten riskien arviointiin ja hinnoitteluun, luokitellaan korkean riskin järjestelmiksi.",
            obligations:
              "Sinun on noudatettava kaikkia III luvun 2 jakson vaatimuksia, mukaan lukien riskienhallinta, tietojen hallinta, tekninen dokumentaatio, avoimuus, ihmisen valvonta ja tarkkuusvaatimukset.",
          },
        },
      },
      {
        id: "q5_srv_d",
        en: "Evaluating or dispatching emergency first response services",
        fi: "Hätäensivastepalvelujen arviointi tai lähettäminen",
        result: {
          type: "high_risk",
          article: "Article 6(2), Annex III, point 5(d)",
          en: {
            title: "High-Risk AI System",
            explanation:
              "AI systems intended to evaluate and classify emergency calls or to dispatch emergency first response services, including police, firefighters, and medical aid, are classified as high-risk.",
            obligations:
              "You must comply with all requirements in Chapter III, Section 2, including risk management, data governance, technical documentation, transparency, human oversight, and accuracy requirements.",
          },
          fi: {
            title: "Korkean riskin tekoälyjärjestelmä",
            explanation:
              "Tekoälyjärjestelmät, jotka on tarkoitettu arvioimaan ja luokittelemaan hätäpuheluja tai lähettämään hätäensivastepalveluja, mukaan lukien poliisi, palomiehet ja ensihoito, luokitellaan korkean riskin järjestelmiksi.",
            obligations:
              "Sinun on noudatettava kaikkia III luvun 2 jakson vaatimuksia, mukaan lukien riskienhallinta, tietojen hallinta, tekninen dokumentaatio, avoimuus, ihmisen valvonta ja tarkkuusvaatimukset.",
          },
        },
      },
      {
        id: "q5_srv_e",
        en: "None of these specifically",
        fi: "Ei mikään näistä erityisesti",
        next: "q7",
      },
    ],
  },
  {
    id: "q5_lawenforcement_detail",
    en: {
      question: "Which best describes your system's function in law enforcement?",
      hint: "Select the option that most closely matches your system's intended use.",
    },
    fi: {
      question: "Mikä kuvaa parhaiten järjestelmäsi toimintoa lainvalvonnassa?",
      hint: "Valitse vaihtoehto, joka vastaa parhaiten järjestelmäsi aiottu käyttötarkoitusta.",
    },
    type: "single",
    options: [
      {
        id: "q5_law_a",
        en: "Assessing the risk of a person becoming a victim of criminal offences",
        fi: "Henkilön rikosten uhriksi joutumisen riskin arviointi",
        result: {
          type: "high_risk",
          article: "Article 6(2), Annex III, point 6(a)",
          en: {
            title: "High-Risk AI System",
            explanation:
              "AI systems intended to assess the risk of a natural person becoming a victim of criminal offences, used by or on behalf of law enforcement authorities, are classified as high-risk.",
            obligations:
              "You must comply with all requirements in Chapter III, Section 2, including risk management, data governance, technical documentation, transparency, human oversight, and accuracy requirements.",
          },
          fi: {
            title: "Korkean riskin tekoälyjärjestelmä",
            explanation:
              "Tekoälyjärjestelmät, jotka on tarkoitettu arvioimaan luonnollisen henkilön riskiä joutua rikosten uhriksi ja joita käytetään lainvalvontaviranomaisten puolesta tai toimesta, luokitellaan korkean riskin järjestelmiksi.",
            obligations:
              "Sinun on noudatettava kaikkia III luvun 2 jakson vaatimuksia, mukaan lukien riskienhallinta, tietojen hallinta, tekninen dokumentaatio, avoimuus, ihmisen valvonta ja tarkkuusvaatimukset.",
          },
        },
      },
      {
        id: "q5_law_b",
        en: "Polygraphs or similar tools to assess truthfulness",
        fi: "Polygrafit tai vastaavat totuudenmukaisuuden arviointivälineet",
        result: {
          type: "high_risk",
          article: "Article 6(2), Annex III, point 6(b)",
          en: {
            title: "High-Risk AI System",
            explanation:
              "AI systems intended to be used by or on behalf of law enforcement authorities as polygraphs or similar tools are classified as high-risk.",
            obligations:
              "You must comply with all requirements in Chapter III, Section 2, including risk management, data governance, technical documentation, transparency, human oversight, and accuracy requirements.",
          },
          fi: {
            title: "Korkean riskin tekoälyjärjestelmä",
            explanation:
              "Tekoälyjärjestelmät, jotka on tarkoitettu käytettäväksi lainvalvontaviranomaisten puolesta tai toimesta polygrafina tai vastaavana välineenä, luokitellaan korkean riskin järjestelmiksi.",
            obligations:
              "Sinun on noudatettava kaikkia III luvun 2 jakson vaatimuksia, mukaan lukien riskienhallinta, tietojen hallinta, tekninen dokumentaatio, avoimuus, ihmisen valvonta ja tarkkuusvaatimukset.",
          },
        },
      },
      {
        id: "q5_law_c",
        en: "Evaluating the reliability of evidence in criminal investigations or prosecutions",
        fi: "Todisteiden luotettavuuden arviointi rikostutkinnassa tai syytteeseenpanossa",
        result: {
          type: "high_risk",
          article: "Article 6(2), Annex III, point 6(c)",
          en: {
            title: "High-Risk AI System",
            explanation:
              "AI systems intended to evaluate the reliability of evidence in the course of investigation or prosecution of criminal offences are classified as high-risk.",
            obligations:
              "You must comply with all requirements in Chapter III, Section 2, including risk management, data governance, technical documentation, transparency, human oversight, and accuracy requirements.",
          },
          fi: {
            title: "Korkean riskin tekoälyjärjestelmä",
            explanation:
              "Tekoälyjärjestelmät, jotka on tarkoitettu arvioimaan todisteiden luotettavuutta rikosasioiden tutkinnan tai syytteeseenpanon yhteydessä, luokitellaan korkean riskin järjestelmiksi.",
            obligations:
              "Sinun on noudatettava kaikkia III luvun 2 jakson vaatimuksia, mukaan lukien riskienhallinta, tietojen hallinta, tekninen dokumentaatio, avoimuus, ihmisen valvonta ja tarkkuusvaatimukset.",
          },
        },
      },
      {
        id: "q5_law_d",
        en: "Assessing the risk of a person offending or re-offending, or profiling during criminal investigations",
        fi: "Henkilön rikoksentekemis- tai uusimisriskin arviointi tai profilointi rikostutkinnassa",
        result: {
          type: "high_risk",
          article: "Article 6(2), Annex III, point 6(d) and 6(e)",
          en: {
            title: "High-Risk AI System",
            explanation:
              "AI systems intended to assess the risk of offending or re-offending, or to profile individuals during criminal investigations, are classified as high-risk. Note: assessing re-offending risk based solely on profiling or personality traits is prohibited under Article 5(1)(d).",
            obligations:
              "You must comply with all requirements in Chapter III, Section 2, including risk management, data governance, technical documentation, transparency, human oversight, and accuracy requirements.",
          },
          fi: {
            title: "Korkean riskin tekoälyjärjestelmä",
            explanation:
              "Tekoälyjärjestelmät, jotka on tarkoitettu arvioimaan rikoksentekemis- tai uusimisriskiä tai profiloimaan henkilöitä rikostutkinnan aikana, luokitellaan korkean riskin järjestelmiksi. Huomio: uusimisriskin arviointi pelkästään profiloinnin tai persoonallisuuden piirteiden perusteella on kielletty 5 artiklan 1 kohdan d alakohdan nojalla.",
            obligations:
              "Sinun on noudatettava kaikkia III luvun 2 jakson vaatimuksia, mukaan lukien riskienhallinta, tietojen hallinta, tekninen dokumentaatio, avoimuus, ihmisen valvonta ja tarkkuusvaatimukset.",
          },
        },
      },
      {
        id: "q5_law_e",
        en: "None of these specifically",
        fi: "Ei mikään näistä erityisesti",
        next: "q7",
      },
    ],
  },
  {
    id: "q5_migration_detail",
    en: {
      question: "Which best describes your system's function in migration, asylum, or border control?",
      hint: "Select the option that most closely matches your system's intended use.",
    },
    fi: {
      question: "Mikä kuvaa parhaiten järjestelmäsi toimintoa maahanmuutossa, turvapaikka-asioissa tai rajavalvonnassa?",
      hint: "Valitse vaihtoehto, joka vastaa parhaiten järjestelmäsi aiottu käyttötarkoitusta.",
    },
    type: "single",
    options: [
      {
        id: "q5_mig_a",
        en: "Polygraphs or similar tools used by competent authorities",
        fi: "Toimivaltaisten viranomaisten käyttämät polygrafit tai vastaavat välineet",
        result: {
          type: "high_risk",
          article: "Article 6(2), Annex III, point 7(a)",
          en: {
            title: "High-Risk AI System",
            explanation:
              "AI systems intended to be used by or on behalf of competent public authorities as polygraphs or similar tools in the context of migration, asylum, or border control are classified as high-risk.",
            obligations:
              "You must comply with all requirements in Chapter III, Section 2, including risk management, data governance, technical documentation, transparency, human oversight, and accuracy requirements.",
          },
          fi: {
            title: "Korkean riskin tekoälyjärjestelmä",
            explanation:
              "Tekoälyjärjestelmät, jotka on tarkoitettu toimivaltaisten viranomaisten käytettäväksi maahanmuuton, turvapaikka-asioiden tai rajavalvonnan yhteydessä polygrafina tai vastaavana välineenä, luokitellaan korkean riskin järjestelmiksi.",
            obligations:
              "Sinun on noudatettava kaikkia III luvun 2 jakson vaatimuksia, mukaan lukien riskienhallinta, tietojen hallinta, tekninen dokumentaatio, avoimuus, ihmisen valvonta ja tarkkuusvaatimukset.",
          },
        },
      },
      {
        id: "q5_mig_b",
        en: "Assessing risks posed by persons entering or seeking to enter a Member State",
        fi: "Jäsenvaltioon saapuvien tai saapumaan pyrkivien henkilöiden aiheuttamien riskien arviointi",
        result: {
          type: "high_risk",
          article: "Article 6(2), Annex III, point 7(b)",
          en: {
            title: "High-Risk AI System",
            explanation:
              "AI systems intended to assess security, irregular migration, or health risks posed by persons entering or who have entered a Member State are classified as high-risk.",
            obligations:
              "You must comply with all requirements in Chapter III, Section 2, including risk management, data governance, technical documentation, transparency, human oversight, and accuracy requirements.",
          },
          fi: {
            title: "Korkean riskin tekoälyjärjestelmä",
            explanation:
              "Tekoälyjärjestelmät, jotka on tarkoitettu arvioimaan jäsenvaltioon saapuvien tai siellä jo olevien henkilöiden aiheuttamia turvallisuus-, laittoman maahanmuuton tai terveysriskejä, luokitellaan korkean riskin järjestelmiksi.",
            obligations:
              "Sinun on noudatettava kaikkia III luvun 2 jakson vaatimuksia, mukaan lukien riskienhallinta, tietojen hallinta, tekninen dokumentaatio, avoimuus, ihmisen valvonta ja tarkkuusvaatimukset.",
          },
        },
      },
      {
        id: "q5_mig_c",
        en: "Assisting in examination of asylum, visa, or residence permit applications",
        fi: "Turvapaikka-, viisumi- tai oleskelulupahakemusten käsittelyn avustaminen",
        result: {
          type: "high_risk",
          article: "Article 6(2), Annex III, point 7(c)",
          en: {
            title: "High-Risk AI System",
            explanation:
              "AI systems intended to assist competent authorities in examining applications for asylum, visa, or residence permits and related complaints are classified as high-risk.",
            obligations:
              "You must comply with all requirements in Chapter III, Section 2, including risk management, data governance, technical documentation, transparency, human oversight, and accuracy requirements.",
          },
          fi: {
            title: "Korkean riskin tekoälyjärjestelmä",
            explanation:
              "Tekoälyjärjestelmät, jotka on tarkoitettu avustamaan toimivaltaisia viranomaisia turvapaikka-, viisumi- tai oleskelulupahakemusten ja niihin liittyvien valitusten käsittelyssä, luokitellaan korkean riskin järjestelmiksi.",
            obligations:
              "Sinun on noudatettava kaikkia III luvun 2 jakson vaatimuksia, mukaan lukien riskienhallinta, tietojen hallinta, tekninen dokumentaatio, avoimuus, ihmisen valvonta ja tarkkuusvaatimukset.",
          },
        },
      },
      {
        id: "q5_mig_d",
        en: "Detecting, recognising, or identifying persons in the context of border control (excluding travel document verification)",
        fi: "Henkilöiden havaitseminen, tunnistaminen tai identifiointi rajavalvonnan yhteydessä (matkustusasiakirjojen tarkistus pois lukien)",
        result: {
          type: "high_risk",
          article: "Article 6(2), Annex III, point 7(d)",
          en: {
            title: "High-Risk AI System",
            explanation:
              "AI systems intended to detect, recognise, or identify natural persons in the context of migration, asylum, or border control management are classified as high-risk, with the exception of the verification of travel documents.",
            obligations:
              "You must comply with all requirements in Chapter III, Section 2, including risk management, data governance, technical documentation, transparency, human oversight, and accuracy requirements.",
          },
          fi: {
            title: "Korkean riskin tekoälyjärjestelmä",
            explanation:
              "Tekoälyjärjestelmät, jotka on tarkoitettu havaitsemaan, tunnistamaan tai identifioimaan luonnollisia henkilöitä maahanmuuton, turvapaikka-asioiden tai rajavalvonnan hallinnon yhteydessä, luokitellaan korkean riskin järjestelmiksi, lukuun ottamatta matkustusasiakirjojen tarkistamista.",
            obligations:
              "Sinun on noudatettava kaikkia III luvun 2 jakson vaatimuksia, mukaan lukien riskienhallinta, tietojen hallinta, tekninen dokumentaatio, avoimuus, ihmisen valvonta ja tarkkuusvaatimukset.",
          },
        },
      },
      {
        id: "q5_mig_e",
        en: "None of these specifically",
        fi: "Ei mikään näistä erityisesti",
        next: "q7",
      },
    ],
  },
  {
    id: "q5_justice_detail",
    en: {
      question: "Which best describes your system's function in the administration of justice or democratic processes?",
      hint: "Select the option that most closely matches your system's intended use.",
    },
    fi: {
      question: "Mikä kuvaa parhaiten järjestelmäsi toimintoa oikeudenhoidon hallinnossa tai demokraattisissa prosesseissa?",
      hint: "Valitse vaihtoehto, joka vastaa parhaiten järjestelmäsi aiottu käyttötarkoitusta.",
    },
    type: "single",
    options: [
      {
        id: "q5_jus_a",
        en: "Assisting judicial authorities in researching or interpreting facts and law, or applying the law to specific cases",
        fi: "Oikeusviranomaisten avustaminen tosiseikkojen ja lain tutkimisessa tai tulkinnassa tai lain soveltamisessa tiettyihin tapauksiin",
        result: {
          type: "high_risk",
          article: "Article 6(2), Annex III, point 8(a)",
          en: {
            title: "High-Risk AI System",
            explanation:
              "AI systems intended to assist judicial authorities in researching and interpreting facts and the law, and in applying the law to concrete sets of facts, are classified as high-risk.",
            obligations:
              "You must comply with all requirements in Chapter III, Section 2, including risk management, data governance, technical documentation, transparency, human oversight, and accuracy requirements.",
          },
          fi: {
            title: "Korkean riskin tekoälyjärjestelmä",
            explanation:
              "Tekoälyjärjestelmät, jotka on tarkoitettu avustamaan oikeusviranomaisia tosiseikkojen ja lain tutkimisessa ja tulkitsemisessa sekä lain soveltamisessa konkreettisiin tosiseikkoihin, luokitellaan korkean riskin järjestelmiksi.",
            obligations:
              "Sinun on noudatettava kaikkia III luvun 2 jakson vaatimuksia, mukaan lukien riskienhallinta, tietojen hallinta, tekninen dokumentaatio, avoimuus, ihmisen valvonta ja tarkkuusvaatimukset.",
          },
        },
      },
      {
        id: "q5_jus_b",
        en: "Influencing the outcome of elections, referenda, or voting behaviour of individuals",
        fi: "Vaalien, kansanäänestysten tai henkilöiden äänestämiskäyttäytymisen tulokseen vaikuttaminen",
        result: {
          type: "high_risk",
          article: "Article 6(2), Annex III, point 8(b)",
          en: {
            title: "High-Risk AI System",
            explanation:
              "AI systems intended to influence the outcome of an election or referendum or the voting behaviour of natural persons are classified as high-risk. This does not include tools used solely to organise or structure political campaigns from an administrative or logistical point of view.",
            obligations:
              "You must comply with all requirements in Chapter III, Section 2, including risk management, data governance, technical documentation, transparency, human oversight, and accuracy requirements.",
          },
          fi: {
            title: "Korkean riskin tekoälyjärjestelmä",
            explanation:
              "Tekoälyjärjestelmät, jotka on tarkoitettu vaikuttamaan vaalien tai kansanäänestyksen tulokseen tai luonnollisten henkilöiden äänestämiskäyttäytymiseen, luokitellaan korkean riskin järjestelmiksi. Tämä ei koske välineitä, joita käytetään yksinomaan poliittisten kampanjoiden järjestämiseen hallinnollisesta tai logistisesta näkökulmasta.",
            obligations:
              "Sinun on noudatettava kaikkia III luvun 2 jakson vaatimuksia, mukaan lukien riskienhallinta, tietojen hallinta, tekninen dokumentaatio, avoimuus, ihmisen valvonta ja tarkkuusvaatimukset.",
          },
        },
      },
      {
        id: "q5_jus_c",
        en: "None of these specifically",
        fi: "Ei mikään näistä erityisesti",
        next: "q7",
      },
    ],
  },
  {
    id: "q6",
    en: {
      question: "Does your system meet any of the following conditions?",
      hint: "These conditions may exempt your system from being classified as high-risk, even if it falls within one of the Annex III areas. Select all that apply.",
    },
    fi: {
      question: "Täyttääkö järjestelmäsi jonkin seuraavista ehdoista?",
      hint: "Nämä ehdot voivat vapauttaa järjestelmäsi korkean riskin luokittelusta, vaikka se kuuluisikin johonkin liitteen III alueista. Valitse kaikki sopivat.",
    },
    type: "single",
    options: [
      {
        id: "q6_a",
        en: "It only performs a narrow procedural task — such as converting data formats, detecting duplicates, or classifying documents",
        fi: "Se suorittaa vain kapean menettelyllisen tehtävän — kuten tietomuotojen muuntamisen, kaksoiskappeleiden havaitsemisen tai asiakirjojen luokittelun",
        next: "q6b",
      },
      {
        id: "q6_b",
        en: "It only improves the result of a previously completed human activity",
        fi: "Se ainoastaan parantaa aiemmin suoritetun ihmistoiminnan tulosta",
        next: "q6b",
      },
      {
        id: "q6_c",
        en: "It only detects patterns in prior human decision-making without replacing or influencing human judgment",
        fi: "Se ainoastaan havaitsee kaavoja aiemmassa inhimillisessä päätöksenteossa korvaamatta tai vaikuttamatta ihmisen harkintaan",
        next: "q6b",
      },
      {
        id: "q6_d",
        en: "It only performs a preparatory task before a human assessment takes place",
        fi: "Se suorittaa vain valmistelevan tehtävän ennen ihmisen suorittamaa arviointia",
        next: "q6b",
      },
      {
        id: "q6_none",
        en: "None of the above",
        fi: "Ei mikään yllä olevista",
        result: {
          type: "high_risk",
          article: "Article 6(2), Annex III",
          en: {
            title: "High-Risk AI System",
            explanation:
              "Your AI system falls within one of the high-risk areas listed in Annex III and does not meet any of the conditions that would exempt it from the high-risk classification.",
            obligations:
              "You must comply with all requirements in Chapter III, Section 2 of the EU AI Act, including risk management, data governance, technical documentation, transparency, human oversight, and accuracy and robustness requirements.",
          },
          fi: {
            title: "Korkean riskin tekoälyjärjestelmä",
            explanation:
              "Tekoälyjärjestelmäsi kuuluu yhteen liitteessä III luetelluista korkean riskin alueista eikä täytä mitään ehtoja, jotka vapauttaisivat sen korkean riskin luokittelusta.",
            obligations:
              "Sinun on noudatettava kaikkia EU:n tekoälylain III luvun 2 jakson vaatimuksia, mukaan lukien riskienhallinta, tietojen hallinta, tekninen dokumentaatio, avoimuus, ihmisen valvonta sekä tarkkuus- ja luotettavuusvaatimukset.",
          },
        },
      },
    ],
  },
  {
    id: "q6b",
    en: {
      question: "Does your system involve profiling of individuals?",
      hint: "Profiling means automated processing of personal data to evaluate personal aspects of a natural person — for example, to analyse or predict aspects concerning performance at work, economic situation, health, personal preferences, or behaviour.",
    },
    fi: {
      question: "Sisältääkö järjestelmäsi henkilöiden profilointia?",
      hint: "Profilointi tarkoittaa henkilötietojen automaattista käsittelyä luonnollisen henkilön henkilökohtaisten näkökohtien arvioimiseksi — esimerkiksi työssä suoriutumiseen, taloudelliseen tilanteeseen, terveyteen, henkilökohtaisiin mieltymyksiin tai käyttäytymiseen liittyvien näkökohtien analysoimiseksi tai ennustamiseksi.",
    },
    type: "single",
    options: [
      {
        id: "q6b_yes",
        en: "Yes, it involves profiling of individuals",
        fi: "Kyllä, se sisältää henkilöiden profilointia",
        result: {
          type: "high_risk",
          article: "Article 6(3), last paragraph",
          en: {
            title: "High-Risk AI System",
            explanation:
              "Even though your system may otherwise qualify for an exemption from the high-risk classification, it involves profiling of individuals. Under the EU AI Act, any system that performs profiling of natural persons is always considered high-risk, regardless of other conditions.",
            obligations:
              "You must comply with all requirements in Chapter III, Section 2 of the EU AI Act, including risk management, data governance, technical documentation, transparency, human oversight, and accuracy and robustness requirements.",
          },
          fi: {
            title: "Korkean riskin tekoälyjärjestelmä",
            explanation:
              "Vaikka järjestelmäsi voisi muutoin täyttää korkean riskin luokittelusta vapauttamisen edellytykset, se sisältää henkilöiden profilointia. EU:n tekoälylain mukaan järjestelmä, joka suorittaa luonnollisten henkilöiden profilointia, katsotaan aina korkean riskin järjestelmäksi muista ehdoista riippumatta.",
            obligations:
              "Sinun on noudatettava kaikkia EU:n tekoälylain III luvun 2 jakson vaatimuksia, mukaan lukien riskienhallinta, tietojen hallinta, tekninen dokumentaatio, avoimuus, ihmisen valvonta sekä tarkkuus- ja luotettavuusvaatimukset.",
          },
        },
      },
      {
        id: "q6b_no",
        en: "No, it does not involve profiling of individuals",
        fi: "Ei, se ei sisällä henkilöiden profilointia",
        result: {
          type: "not_high_risk",
          article: "Article 6(3)–(4)",
          en: {
            title: "Not High-Risk — Documentation Required",
            explanation:
              "Your AI system falls within one of the Annex III areas but meets the conditions for exemption from the high-risk classification. It does not materially influence the outcome of decision-making and does not involve profiling.",
            obligations:
              "You are not subject to the full high-risk requirements. However, you must document your assessment before placing the system on the market or putting it into service, and register the system in the EU database. The documentation must be made available to national competent authorities upon request.",
          },
          fi: {
            title: "Ei korkean riskin järjestelmä — dokumentointi vaaditaan",
            explanation:
              "Tekoälyjärjestelmäsi kuuluu yhteen liitteen III alueista, mutta täyttää korkean riskin luokittelusta vapauttamisen edellytykset. Se ei olennaisesti vaikuta päätöksenteon lopputulokseen eikä sisällä profilointia.",
            obligations:
              "Sinuun ei sovelleta täysiä korkean riskin vaatimuksia. Sinun on kuitenkin dokumentoitava arviointisi ennen järjestelmän markkinoille saattamista tai käyttöönottoa ja rekisteröitävä järjestelmä EU:n tietokantaan. Dokumentaatio on pyynnöstä toimitettava kansallisille toimivaltaisille viranomaisille.",
          },
        },
      },
    ],
  },
  {
    id: "q7",
    en: {
      question:
        "Is your system a general-purpose AI model — that is, a model trained on large amounts of data that can perform a wide variety of different tasks and can be integrated into other systems?",
      hint: "Examples include large language models and multimodal foundation models. A general-purpose AI model is different from an AI system — it is a component that can be integrated into various applications.",
    },
    fi: {
      question:
        "Onko järjestelmäsi yleiskäyttöinen tekoälymalli — eli malli, joka on koulutettu suurilla datamäärillä ja pystyy suorittamaan monenlaisia eri tehtäviä ja integroitumaan muihin järjestelmiin?",
      hint: "Esimerkkejä ovat suuret kielimallit ja multimodaaliset perusmallit. Yleiskäyttöinen tekoälymalli eroaa tekoälyjärjestelmästä — se on komponentti, joka voidaan integroida erilaisiin sovelluksiin.",
    },
    type: "single",
    options: [
      {
        id: "q7_yes",
        en: "Yes",
        fi: "Kyllä",
        next: "q7b",
      },
      {
        id: "q7_no",
        en: "No",
        fi: "Ei",
        next: "q8",
      },
    ],
  },
  {
    id: "q7b",
    en: {
      question:
        "Was your model trained using more than 10²⁵ floating point operations (FLOPs)?",
      hint: "This threshold is used to identify general-purpose AI models that may pose systemic risks. If you are unsure, the answer is most likely no — this threshold currently applies only to the largest frontier models.",
    },
    fi: {
      question:
        "Onko mallisi koulutettu käyttämällä yli 10²⁵ liukulukuoperaatiota (FLOPs)?",
      hint: "Tätä kynnysarvoa käytetään tunnistamaan yleiskäyttöisiä tekoälymalleja, jotka saattavat aiheuttaa systeemisiä riskejä. Jos olet epävarma, vastaus on todennäköisesti ei — tämä kynnysarvo koskee tällä hetkellä vain suurimpia frontier-malleja.",
    },
    type: "single",
    options: [
      {
        id: "q7b_yes",
        en: "Yes",
        fi: "Kyllä",
        result: {
          type: "gpai_systemic",
          article: "Article 51, Article 55",
          en: {
            title: "General-Purpose AI Model with Systemic Risk",
            explanation:
              "Your model meets the threshold for classification as a general-purpose AI model with systemic risk. This classification applies when the cumulative amount of computation used for training exceeds 10²⁵ floating point operations.",
            obligations:
              "In addition to the standard GPAI obligations (Article 53), you must: perform model evaluation including adversarial testing; assess and mitigate systemic risks at Union level; report serious incidents to the AI Office without undue delay; and ensure adequate cybersecurity protection.",
          },
          fi: {
            title: "Systeemisiä riskejä aiheuttava yleiskäyttöinen tekoälymalli",
            explanation:
              "Mallisi täyttää systeemisiä riskejä aiheuttavaksi yleiskäyttöiseksi tekoälymalliksi luokittelun kynnysarvon. Tämä luokittelu koskee tilanteita, joissa koulutukseen käytettyjen laskutoimitusten kumulatiivinen määrä ylittää 10²⁵ liukulukuoperaatiota.",
            obligations:
              "Tavanomaisten GPAI-velvoitteiden (53 artikla) lisäksi sinun on: suoritettava mallien arviointi, mukaan lukien adversariaalinen testaus; arvioitava ja lievenettävä systeemisiä riskejä unionin tasolla; raportoitava vakavista tapauksista tekoälytoimistolle ilman aiheetonta viivytystä; ja varmistettava riittävä kyberturvallisuussuoja.",
          },
        },
      },
      {
        id: "q7b_no",
        en: "No or unknown",
        fi: "Ei tai ei tiedossa",
        result: {
          type: "gpai",
          article: "Article 53",
          en: {
            title: "General-Purpose AI Model",
            explanation:
              "Your system is classified as a general-purpose AI model. These obligations apply from the moment the model is placed on the market.",
            obligations:
              "You must: maintain up-to-date technical documentation; provide information to downstream providers to enable their compliance; put in place a policy to comply with EU copyright law; and publish a sufficiently detailed summary of the content used for training.",
          },
          fi: {
            title: "Yleiskäyttöinen tekoälymalli",
            explanation:
              "Järjestelmäsi luokitellaan yleiskäyttöiseksi tekoälymalliksi. Nämä velvoitteet koskevat siitä hetkestä, kun malli saatetaan markkinoille.",
            obligations:
              "Sinun on: ylläpidettävä ajantasaista teknistä dokumentaatiota; toimitettava tietoja jatkopalveluntarjoajille heidän vaatimustenmukaisuutensa mahdollistamiseksi; laadittava EU:n tekijänoikeuslakia noudattava käytäntö; ja julkaistava riittävän yksityiskohtainen yhteenveto koulutukseen käytetystä sisällöstä.",
          },
        },
      },
    ],
  },
  {
    id: "q8",
    en: {
      question: "Does your system do any of the following?",
      hint: "These obligations apply regardless of whether your system is high-risk or not. Select all that apply.",
    },
    fi: {
      question: "Tekeekö järjestelmäsi mitään seuraavista?",
      hint: "Nämä velvoitteet koskevat riippumatta siitä, onko järjestelmäsi korkean riskin järjestelmä vai ei. Valitse kaikki sopivat.",
    },
    type: "multi",
    options: [
      {
        id: "q8_a",
        en: "Interacts directly with humans — such as a chatbot or voice assistant",
        fi: "On suorassa vuorovaikutuksessa ihmisten kanssa — kuten chatbot tai ääniohjattu avustaja",
        article: "Article 50(1)",
      },
      {
        id: "q8_b",
        en: "Generates synthetic images, audio, video, or text",
        fi: "Generoi synteettisiä kuvia, ääntä, videota tai tekstiä",
        article: "Article 50(2)",
      },
      {
        id: "q8_c",
        en: "Recognises or infers emotions, or categorises people based on biometric data",
        fi: "Tunnistaa tai päättelee tunteita tai luokittelee henkilöitä biometristen tietojen perusteella",
        article: "Article 50(3)",
      },
      {
        id: "q8_d",
        en: "Generates or manipulates content depicting real people in a realistic way — such as deep fakes",
        fi: "Generoi tai manipuloi oikeita henkilöitä realistisesti kuvaavaa sisältöä — kuten syväväärennöksiä",
        article: "Article 50(4)",
      },
      {
        id: "q8_none",
        en: "None of the above",
        fi: "Ei mikään yllä olevista",
        exclusive: true,
      },
    ],
    transparencyResult: {
      type: "transparency",
      article: "Article 50",
      en: {
        title: "Transparency Obligations Apply",
        explanation:
          "Your system is subject to transparency obligations under Article 50 of the EU AI Act. These obligations apply regardless of whether your system is otherwise classified as high-risk.",
        obligations: "",
      },
      fi: {
        title: "Läpinäkyvyysvelvoitteet koskevat järjestelmääsi",
        explanation:
          "Järjestelmääsi koskevat EU:n tekoälylain 50 artiklan mukaiset läpinäkyvyysvelvoitteet. Nämä velvoitteet koskevat riippumatta siitä, luokitellaanko järjestelmäsi muutoin korkean riskin järjestelmäksi.",
        obligations: "",
      },
    },
    minimalResult: {
      type: "minimal",
      article: "Article 95",
      en: {
        title: "Minimal Risk — No Specific Obligations",
        explanation:
          "Your AI system does not fall into any regulated category under the EU AI Act. It is not prohibited, not high-risk, and not subject to transparency obligations.",
        obligations:
          "No mandatory obligations apply. Voluntary codes of conduct are encouraged under Article 95, but compliance is not required.",
      },
      fi: {
        title: "Minimiriski — ei erityisiä velvoitteita",
        explanation:
          "Tekoälyjärjestelmäsi ei kuulu mihinkään EU:n tekoälylain säänneltyyn kategoriaan. Se ei ole kielletty, se ei ole korkean riskin järjestelmä eikä siihen sovelleta läpinäkyvyysvelvoitteita.",
        obligations:
          "Pakollisia velvoitteita ei ole. Vapaaehtoisia käytännesääntöjä kannustetaan 95 artiklan nojalla, mutta niiden noudattaminen ei ole pakollista.",
      },
    },
  },
];

export default questions;