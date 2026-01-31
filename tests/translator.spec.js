const { test, expect } = require("@playwright/test");

const cases = [
  
 {
  id: "Pos_Fun_0001",
  name: "Convert future tense sentence related to academic schedule",
  input: "apita mee paara sathi anthayee campus thiyennee",
  expected: "අපිට මේ පාර සති අන්තයේ campus තියෙන්නේ",
},
{
  id: "Pos_Fun_0002",
  name: "Convert imperative command",
  input: "mata kiyanna.",
  expected: "මට කියන්න.",
},
{
  id: "Pos_Fun_0003",
  name: "Convert greeting",
  input: "aayuboovan!",
  expected: "ආයුබෝවන්!",
},
{
  id: "Pos_Fun_0004",
  name: "Convert polite request",
  input: "karuNaakaralaa mata podi udhavvak karanna puLuvandha?",
  expected: "කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද?",
},
{
  id: "Pos_Fun_0005",
  name: "Convert negative sentence",
  input: "mama ehema karannee naehae.",
  expected: "මම එහෙම කරන්නේ නැහැ.",
},
{
  id: "Pos_Fun_0006",
  name: "Convert interrogative sentence suggesting a travel plan",
  input: "api mee paara siripaadhee yamudha",
  expected: "අපි මේ පාර සිරිපාදේ යමුද",
},
{
  id: "Pos_Fun_0007",
  name: "Convert complex conditional sentence",
  input: "oya enavaanam mama balan innavaa.",
  expected: "ඔයා එනවානම් මම බලන් ඉන්නවා.",
},
{
  id: "Pos_Fun_0008",
  name: "Convert past tense sentence describing a completed action",
  input: "mama iiyee gedhara giyaa.",
  expected: "මම ඊයේ ගෙදර ගියා.",
},
{
  id: "Pos_Fun_0009",
  name: "Convert future tense with place reference",
  input: "mama heta ohee enavaa",
  expected: "මම හෙට ඔහේ එනවා",
},
{
  id: "Pos_Fun_0010",
  name: "Convert plural pronoun",
  input: "api udhenma yamu",
  expected: "අපි උදෙන්ම යමු",
},
{
  id: "Pos_Fun_0011",
  name: "Mixed English technical terms",
  input: "Zoom meeting ekak thiyennee. oyaa mata Documents attach karalaa email ekak evanna.",
  expected: "Zoom meeting එකක් තියෙන්නේ. ඔයා මට Documents attach කරලා email එකක් එවන්න.",
},
{
  id: "Pos_Fun_0012",
  name: "Sentence with place name",
  input: "siiyaa Colombo yanna hadhannee.",
  expected: "සියා කොළඹ යන්න හදන්නේ.",
},
{
  id: "Pos_Fun_0013",
  name: "Password change prompt",
  input: "password eka aluth karanna kiyalaa thiyenavaa nedha ?",
  expected: "password එක අලුත් කරන්න කියලා තියෙනවා නේද ?",
},
{
  id: "Pos_Fun_0014",
  name: "English abbreviation handling",
  input: "OTP ekak dhenna.",
  expected: "OTP එකක් දෙන්න.",
},
{
  id: "Pos_Fun_0015",
  name: "Punctuation preservation",
  input: "hari hari! eka eka?",
  expected: "හරි හරි! එක එක?",
},
{
  id: "Pos_Fun_0016",
  name: "Currency and time",
  input: "Meeting eka 7.30 AM ta. Rs. 1500 ganna oonee.",
  expected: "Meeting එක 7.30 AM ට. Rs. 1500 ගන්න ඕනේ.",
},
{
  id: "Pos_Fun_0017",
  name: "Multiple spaces handling",
  input: "mama   gedhara   yanavaa.",
  expected: "මම ගෙදර යනවා",
},
{
  id: "Pos_Fun_0018",
  name: "Line breaks multi-line",
  input: "mama gedhara yanavaa.oyaa enavadha maath ekka yanna?",
  expected: "මම ගෙදර යනවා.ඔයා එනවද මාත් එක්ක යන්න?",
},
{
  id: "Pos_Fun_0019",
  name: "Positive feedback message",
  input: "ela machan! supiri!!",
  expected: "එල මචන්! සුපිරි!!",
},
{
  id: "Pos_Fun_0020",
  name: "Day-to-day expression",
  input: "mata nidhimathayi.",
  expected: "මට නිදිමතයි.",
},
{
  id: "Pos_Fun_0021",
  name: "Positive feedback – rest request",
  input: "mata oona poddak inna.",
  expected: "මට ඕන පොඩ්ඩක් ඉන්න.",
},
{
  id: "Pos_Fun_0022",
  name: "Future plan statement",
  input: "heta api udhenma yanavaa",
  expected: "හෙට අපි උදෙන්ම යනවා",
},
{
  id: "Pos_Fun_0023",
  name: "Conditional request statement",
  input: "oyaa apee geval paeththen aavoth mata magee pen drive eka aran enna",
  expected: "ඔයා අපේ ගෙවල් පැත්තෙන් ආවොත් මට මගේ pen drive එක අරන් එන්න",
},

{
  id: "Neg_Fun_0001",
  name: "Incorrect negative sentence with spacing & spelling errors",
  input: "eyaa matahaa kivve naehae",
  expected: "එයා මටහා කිව්වෙ නැහැ",
},
{
  id: "Neg_Fun_0002",
  name: "Heavy slang with typo",
  input: "adoo vaedak baaragaththaanam eeka hariyata karapanko bQQ.",
  expected: "අඩෝ වැඩක් බාරගත්තානම් ඒක හරියට කරපන්කො බං.",
},
{
  id: "Neg_Fun_0003",
  name: "Event announcement with spelling and structure errors",
  input: "heta api dhansalak dhenawaa . gamee pansala laga",
  expected: "හෙට අපි දන්සලක් දෙනවා . ගමේ පන්සල ලග",
},
{
  id: "Neg_Fun_0004",
  name: "Question sentence with incorrect verb form",
  input: "uba digatama hostelma innadha kalpanaav",
  expected: "උබ දිගටම hostel ම ඉන්නද කල්පනාව",
},
{
  id: "Neg_Fun_0005",
  name: "Invalid unclear input sentence",
  input: "matapaankannaoonee",
  expected: "මට පාන් කන්න ඕනේ",
},
{
  id: "Neg_Fun_0006",
  name: "Question sentence with tense errors",
  input: "heta oyaa edhdhi magee Hard drive eka geanawada",
  expected: "හෙට ඔයා එද්දි මගේ Hard drive එක ගේනවාද",
},
{
  id: "Neg_Fun_0007",
  name: "Mixed question and statement",
  input: "oya adha campus giyada ? math ada ena hitiye eeth mata adha saniipa naehae",
  expected: "ඔය අද campus ගියාද ? මත් අද එන්න හිටියේ ඒත් මට අද සනීප නැහැ",
},
{
  id: "Neg_Fun_0008",
  name: "Informal opinion question with spelling errors",
  input: "mekanam mahaa epaa wenwa nedha ?",
  expected: "මෙකනම් මහා එපා වෙනවා නේද ?",
},
{
  id: "Neg_Fun_0009",
  name: "Future plan statement with verb spelling error",
  input: "api heta kandy yanna ine . oya enwda",
  expected: "අපි හෙට kandy යන්න ඉන්නේ . ඔය එනවාද",
},
{
  id: "Neg_Fun_0010",
  name: "Negative sentence spelling validation failure",
  input: "mata ada campus yanna baehae",
  expected: "මට අද campus යන්න බැහැ",
},


];

test.describe("SwiftTranslator - Positive functional tests", () => {
  for (const tc of cases) {
    test(`${tc.id} - ${tc.name}`, async ({ page }) => {
      await page.goto("https://www.swifttranslator.com/");

      const inputBox = page.getByRole("textbox", {
        name: "Input Your Singlish Text Here.",
      });

      await inputBox.fill(tc.input);

      await expect(page.getByText(tc.expected)).toBeVisible();
    });
  }
});