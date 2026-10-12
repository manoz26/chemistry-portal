export interface Question {
  chapterId: string;
  q: string;
  a: string;
  imageUrl?: string;
}

export interface MCQ {
  chapterId: string;
  q: string;
  options: { text: string; correct: boolean }[];
  explanation: string;
  imageUrl?: string;
}
export const bGymnasiouQuestions: Question[] = [
  {
    "chapterId": "chapter-1",
    "q": "1. Ποια προϊόντα ονομάζονται φυσικά; Να αναφέρετε τρία τουλάχιστον φυσικά προϊόντα που χρησιμοποιείτε στην καθημερινή σας ζωή.",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p>Φυσικά προϊόντα ονομάζονται τα υλικά που ο άνθρωπος χρησιμοποιεί στη μορφή που τα βρίσκει στη φύση, δηλαδή τα προϊόντα που προέρχονται από φυσικές πρώτες ύλες χωρίς την παρέμβαση συνθετικών ή χημικών διεργασιών.</p><p>Παραδείγματα φυσικών προϊόντων που χρησιμοποιούμε στην καθημερινή μας ζωή είναι το μέλι, το ελαιόλαδο, το βαμβάκι, το μαλλί, το ξύλο και το μαγειρικό αλάτι.</p></div>"
  },
  {
    "chapterId": "chapter-1",
    "q": "2. Να συμπληρώσετε τα κενά με τις κατάλληλες λέξεις.<br>α. Τα υλικά τα οποία ο άνθρωπος χρησιμοποιεί στη μορφή που τα βρίσκει στη φύση ονομάζονται <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> προϊόντα.<br>β. Η Χημεία είναι η επιστήμη η οποία μελετά τη <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> και τις <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> της <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>.<br>γ. Η Χημεία μελετά τη φύση με σκοπό να εξηγήσει φαινόμενα όπως η <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> στα φυτά και η αποικοδόμηση της <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> στους οργανισμούς.",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p>α. Τα υλικά τα οποία ο άνθρωπος χρησιμοποιεί στη μορφή που τα βρίσκει στη φύση ονομάζονται <span class='text-amber-300 underline decoration-dotted underline-offset-4'>φυσικά</span> προϊόντα.</p><p>β. Η Χημεία είναι η επιστήμη η οποία μελετά τη <span class='text-amber-300 underline decoration-dotted underline-offset-4'>δομή</span> και τις <span class='text-amber-300 underline decoration-dotted underline-offset-4'>ιδιότητες</span> της <span class='text-amber-300 underline decoration-dotted underline-offset-4'>ύλης</span>.</p><p>γ. Η Χημεία μελετά τη φύση με σκοπό να εξηγήσει φαινόμενα όπως η <span class='text-amber-300 underline decoration-dotted underline-offset-4'>φωτοσύνθεση</span> στα φυτά και η αποικοδόμηση της <span class='text-amber-300 underline decoration-dotted underline-offset-4'>ύλης</span> στους οργανισμούς.</p></div>"
  },
  {
    "chapterId": "chapter-1",
    "q": "3. Η φύση είναι μια τεράστια χημική βιομηχανία. Μπορείς να βρεις επιχειρήματα που να στηρίζουν αυτόν τον συλλογισμό;",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p>Η φύση λειτουργεί σαν μια πολύπλοκη, αυτορρυθμιζόμενη και αποδοτική χημική βιομηχανία, που παράγει, μετατρέπει και ανακυκλώνει υλικά με τρόπους που συνεχίζουμε να μαθαίνουμε και να εξερευνούμε.</p><p>Μερικές διαδικασίες που στηρίζουν αυτόν τον συλλογισμό είναι η φωτοσύνθεση (τα φυτά παράγουν γλυκόζη και οξυγόνο από διοξείδιο του άνθρακα και νερό), η ανακύκλωση των θρεπτικών στοιχείων με φυσικές διαδικασίες, όπως η αποσύνθεση, ο κύκλος του αζώτου και ο κύκλος του άνθρακα, η χημική επικοινωνία ανάμεσα στους οργανισμούς, καθώς και οι πολλές βιοχημικές αντιδράσεις που πραγματοποιούνται στους ζωντανούς οργανισμούς.</p></div>"
  },
  {
    "chapterId": "chapter-1",
    "q": "5. α. Ποιο είναι το αντικείμενο της επιστήμης της Χημείας;<br>β. Ποιες μεθόδους χρησιμοποιεί η Χημεία για να επιτύχει τους σκοπούς της;<br>γ. Να αναφέρετε τέσσερις επιμέρους τομείς στους οποίους έχει οργανωθεί η επιστήμη της Χημείας.<br>δ. Γιατί λέγεται ότι η Χημεία στηρίζει τη ζωή μας; Να αναφέρετε τρεις τομείς της ζωής του ανθρώπου στους οποίους η Χημεία έχει σημαντική προσφορά και να δικαιολογήσετε την απάντησή σας.<br>ε. Υπάρχουν επιζήμιες για τον άνθρωπο συνέπειες από την ανάπτυξη της Χημείας, και αν ναι, να αναφέρετε τουλάχιστον δύο από αυτές.<br>στ. Να προτείνετε τρόπους για τον περιορισμό των αρνητικών συνεπειών από την ανάπτυξη της Χημείας.",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p><span class='text-white'>α.</span> Η Χημεία είναι η επιστήμη η οποία:</p><ul class='list-disc ml-5 space-y-1'><li>μελετά τη δομή και τις ιδιότητες των υλικών σωμάτων,</li><li>ασχολείται με την επεξεργασία πρώτων υλών και τις μεθόδους παραγωγής νέων υλικών,</li><li>ασχολείται με τον έλεγχο της ποιότητας του περιβάλλοντος και διάφορων προϊόντων, όπως τα τρόφιμα, τα καύσιμα και τα φάρμακα.</li></ul><p><span class='text-white'>β.</span> Για να καλύψει το αντικείμενό της, η Χημεία διεξάγει βασική και εφαρμοσμένη έρευνα. Η βασική έρευνα αφορά τη μελέτη των σωμάτων και των φαινομένων και τη διατύπωση θεωριών που εξηγούν τη συμπεριφορά τους, ενώ η εφαρμοσμένη έρευνα αφορά την εύρεση μεθόδων παραγωγής χρήσιμων προϊόντων και την ανάπτυξη μεθόδων ελέγχου της ασφάλειάς τους.</p><p><span class='text-white'>γ.</span> Η Χημεία έχει οργανωθεί σε επιμέρους τομείς, όπως η Ανόργανη Χημεία, η Οργανική Χημεία, η Αναλυτική Χημεία, η Βιοχημεία, η Φυσικοχημεία, η Χημεία Τροφίμων, η Χημεία Περιβάλλοντος, η Φαρμακοχημεία, η Βιομηχανική Χημεία κ.ά.</p><p><span class='text-white'>δ.</span> Η Χημεία, μελετώντας τη φύση και τη δομή των υλικών σωμάτων, συνέβαλε στο να εξηγηθεί το φαινόμενο της ζωής, αφού όλες οι λειτουργίες των οργανισμών στηρίζονται σε χημικές μεταβολές. Ορισμένοι τομείς της ζωής του ανθρώπου στους οποίους η Χημεία έχει σημαντική προσφορά είναι:</p><ul class='list-disc ml-5 space-y-1'><li><span class='text-white'>Υγεία και Φαρμακευτική:</span> παρασκευή φαρμάκων, εμβολίων και απολυμαντικών, που αντιμετωπίζουν ασθένειες και αυξάνουν το προσδόκιμο ζωής.</li><li><span class='text-white'>Τρόφιμα και Γεωργία:</span> λιπάσματα και φυτοφάρμακα που αυξάνουν τη γεωργική παραγωγή, συντήρηση και έλεγχος της ποιότητας των τροφίμων.</li><li><span class='text-white'>Ενέργεια:</span> παραγωγή και βελτίωση καυσίμων, μπαταριών και υλικών για τις ανανεώσιμες πηγές ενέργειας (π.χ. φωτοβολταϊκά).</li></ul><p><span class='text-white'>ε.</span> Ναι. Η Χημεία πέτυχε την παραγωγή πολλών νέων προϊόντων, τα οποία όμως δεν χρησιμοποιούνται πάντοτε με τρόπο επωφελή για τον άνθρωπο και το περιβάλλον. Αρνητικές συνέπειες είναι, για παράδειγμα, η χρήση χημικών προϊόντων για πολεμικούς σκοπούς (χημικά όπλα, εκρηκτικά), τα ναρκωτικά και οι εξαρτησιογόνες ουσίες, καθώς και η ρύπανση του περιβάλλοντος από την αλόγιστη χρήση χημικών ουσιών.</p><p><span class='text-white'>στ.</span> Ορισμένοι τρόποι για τον περιορισμό των αρνητικών συνεπειών από την ανάπτυξη της Χημείας είναι:</p><ul class='list-disc ml-5 space-y-1'><li>Πρακτικές που προωθούν την αειφορία, με σχεδίαση χημικών διεργασιών και προϊόντων που ελαχιστοποιούν τη χρήση των πόρων, την παραγωγή αποβλήτων και τις επιβλαβείς επιπτώσεις στο περιβάλλον και στην υγεία.</li><li>Εκπαίδευση και ευαισθητοποίηση των πολιτών για τις επιπτώσεις της χρήσης των χημικών ουσιών στο περιβάλλον.</li><li>Θέσπιση κανονισμών και νόμων με τους οποίους θα ελέγχεται η χρήση ορισμένων χημικών ουσιών, με στόχο την προστασία του ανθρώπου και του περιβάλλοντος.</li><li>Επένδυση στην εκπαίδευση καθώς και σε ερευνητικά προγράμματα που θα βελτιώνουν την ασφάλεια των χημικών διεργασιών και των προϊόντων.</li></ul><p>Με τη συνδυασμένη εφαρμογή αυτών των μέτρων μπορεί να επιτευχθεί μια πιο βιώσιμη και ασφαλής ανάπτυξη της Χημείας.</p></div>"
  },
  {
    "chapterId": "chapter-1",
    "q": "6. α. Οι δύο όψεις του ίδιου νομίσματος: Για τα προϊόντα της πρώτης στήλης του ακόλουθου πίνακα να σκεφτείτε και να αντιπαραθέσετε χρήσεις που είναι θετικές για την κοινωνία και χρήσεις που έχουν αρνητικές συνέπειες.<div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><thead class='bg-white/10'><tr><th class='py-2 px-3 font-semibold text-white'>Προϊόντα</th><th class='py-2 px-3 font-semibold text-white'>Θετικές συνέπειες</th><th class='py-2 px-3 font-semibold text-white'>Αρνητικές συνέπειες</th></tr></thead><tbody class='divide-y divide-white/10'><tr><td class='py-2 px-3 font-semibold text-white'>Λιπάσματα</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Πλαστικά</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Εντομοκτόνα</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Χλώριο</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Συντηρητικά τροφίμων</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Φάρμακα</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Εκρηκτικά</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr></tbody></table></div>β. Πού οφείλονται, κατά την εκτίμησή σας, οι επιζήμιες συνέπειες της χρήσης των χημικών ουσιών και πώς θα μπορούσε να διορθωθεί το πρόβλημα;",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p><span class='text-white'>α.</span> </p><div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><thead class='bg-white/10'><tr><th class='py-2 px-3 font-semibold text-white'>Προϊόντα</th><th class='py-2 px-3 font-semibold text-white'>Θετικές συνέπειες</th><th class='py-2 px-3 font-semibold text-white'>Αρνητικές συνέπειες</th></tr></thead><tbody class='divide-y divide-white/10'><tr><td class='py-2 px-3 font-semibold text-white'>Λιπάσματα</td><td class='py-2 px-3 font-bold text-emerald-400'>Αύξηση της παραγωγής τροφίμων.</td><td class='py-2 px-3 font-bold text-emerald-400'>Ρύπανση της θάλασσας, των λιμνών, των ποταμών και των υπόγειων υδάτων.</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Πλαστικά</td><td class='py-2 px-3 font-bold text-emerald-400'>Είναι φθηνά, ανθεκτικά και ελαφριά.</td><td class='py-2 px-3 font-bold text-emerald-400'>Η αλόγιστη χρήση τους επιβαρύνει το περιβάλλον λόγω της μεγάλης τους αντοχής (δεν αποικοδομούνται εύκολα).</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Εντομοκτόνα</td><td class='py-2 px-3 font-bold text-emerald-400'>Αντιμετώπιση ασθενειών των φυτών και αύξηση της γεωργικής παραγωγής.</td><td class='py-2 px-3 font-bold text-emerald-400'>Αρνητικές επιπτώσεις στην υγεία των καταναλωτών. Χρησιμοποιήθηκαν και για πολεμικούς σκοπούς.</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Χλώριο</td><td class='py-2 px-3 font-bold text-emerald-400'>Ισχυρό απολυμαντικό (π.χ. του νερού).</td><td class='py-2 px-3 font-bold text-emerald-400'>Πολεμικό αέριο.</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Συντηρητικά τροφίμων</td><td class='py-2 px-3 font-bold text-emerald-400'>Παράταση του χρόνου ζωής των τροφίμων, ώστε να αποθηκεύονται για μεγαλύτερο χρόνο.</td><td class='py-2 px-3 font-bold text-emerald-400'>Ορισμένα, σε μεγάλες ποσότητες, μπορεί να συνδεθούν με προβλήματα υγείας.</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Φάρμακα</td><td class='py-2 px-3 font-bold text-emerald-400'>Βελτιώνουν την υγεία και τη ζωή των ανθρώπων και αυξάνουν το προσδόκιμο ζωής.</td><td class='py-2 px-3 font-bold text-emerald-400'>Η άκριτη χρήση τους οδηγεί σε εξάρτηση και ακύρωση της ευεργετικής τους δράσης.</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Εκρηκτικά</td><td class='py-2 px-3 font-bold text-emerald-400'>Χρήση στη βιομηχανία, στα ορυχεία και στις κατασκευές (π.χ. διάνοιξη σηράγγων).</td><td class='py-2 px-3 font-bold text-emerald-400'>Χρησιμοποιούνται για πολεμικούς σκοπούς.</td></tr></tbody></table></div><p><span class='text-white'>β.</span> Οι επιζήμιες συνέπειες δεν οφείλονται στις ίδιες τις χημικές ουσίες, αλλά κυρίως στον τρόπο που τις χρησιμοποιούμε: στην αλόγιστη, υπερβολική ή λανθασμένη χρήση τους, στην ελλιπή γνώση των κινδύνων, στην κακή διαχείριση των αποβλήτων τους και στη χρήση τους για βλαβερούς σκοπούς. Για την αντιμετώπιση του προβλήματος μπορούν να ληφθούν μέτρα όπως:</p><ul class='list-disc ml-5 space-y-1'><li>Η ανάπτυξη και η χρήση χημικών ουσιών που είναι λιγότερο επιβλαβείς για την υγεία και το περιβάλλον.</li><li>Η ενίσχυση των ελέγχων με αυστηρότερες προδιαγραφές, ώστε να διασφαλίζεται η προστασία της υγείας και του περιβάλλοντος.</li><li>Η εκπαίδευση και η ευαισθητοποίηση αγροτών, εργαζομένων και πολιτών σχετικά με τους κινδύνους της χρήσης χημικών ουσιών.</li><li>Η ενίσχυση της έρευνας για νέα, ασφαλέστερα υλικά.</li></ul></div>"
  },
  {
    "chapterId": "chapter-1",
    "q": "7. Να συμπληρώσετε τα κενά με τις κατάλληλες λέξεις.<br>Η ανακάλυψη υλικών, όπως τα φάρμακα και τα <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>, βελτίωσε σημαντικά την <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> των ανθρώπων και είχε ως αποτέλεσμα την αύξηση του προσδόκιμου της <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>. Επίσης, η χρήση των <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> αύξησε σημαντικά τη γεωργική παραγωγή και η χρήση των <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> και των απορρυπαντικών βελτίωσε τις συνθήκες υγιεινής.",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p>Η ανακάλυψη υλικών, όπως τα φάρμακα και τα <span class='text-amber-300 underline decoration-dotted underline-offset-4'>απολυμαντικά</span>, βελτίωσε σημαντικά την <span class='text-amber-300 underline decoration-dotted underline-offset-4'>υγεία</span> των ανθρώπων και είχε ως αποτέλεσμα την αύξηση του προσδόκιμου της <span class='text-amber-300 underline decoration-dotted underline-offset-4'>ζωής</span>. Επίσης, η χρήση των <span class='text-amber-300 underline decoration-dotted underline-offset-4'>λιπασμάτων</span> αύξησε σημαντικά τη γεωργική παραγωγή και η χρήση των <span class='text-amber-300 underline decoration-dotted underline-offset-4'>σαπουνιών</span> και των απορρυπαντικών βελτίωσε τις συνθήκες υγιεινής.</p></div>"
  },
  {
    "chapterId": "chapter-1",
    "q": "8. Να αντιστοιχίσετε τα υλικά της πρώτης στήλης με το ή τα προϊόντα και τις δραστηριότητες στις οποίες αξιοποιείται στη δεύτερη στήλη.<div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><thead class='bg-white/10'><tr><th class='py-2 px-3 font-semibold text-white'>Υλικό</th><th class='py-2 px-3 font-semibold text-white'>Προϊόν – Δραστηριότητα</th></tr></thead><tbody class='divide-y divide-white/10'><tr><td class='py-2 px-3 font-normal text-purple-100'>1. χάλυβας (κράμα σιδήρου)</td><td class='py-2 px-3 font-normal text-purple-100'>Β1. μεταφορές – ταξίδια</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>2. τεχνητό μετάξι (ρεγιόν)</td><td class='py-2 px-3 font-normal text-purple-100'>Β2. καλλιέργειες</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>3. βενζίνη</td><td class='py-2 px-3 font-normal text-purple-100'>Β3. υλικά συσκευασίας</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>4. ασπιρίνη</td><td class='py-2 px-3 font-normal text-purple-100'>Β4. ζωγραφική</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>5. λίπασμα</td><td class='py-2 px-3 font-normal text-purple-100'>Β5. κατασκευές</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>6. πλαστικό</td><td class='py-2 px-3 font-normal text-purple-100'>Β6. ανακούφιση πυρετού</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>7. χρώμα</td><td class='py-2 px-3 font-normal text-purple-100'>Β7. ρούχα</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>8. χαρτί</td><td class='py-2 px-3 font-normal text-purple-100'>Β8. μπάλες ποδοσφαίρου</td></tr></tbody></table></div>",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><thead class='bg-white/10'><tr><th class='py-2 px-3 font-semibold text-white'>Υλικό</th><th class='py-2 px-3 font-semibold text-white'>Αντιστοίχιση</th></tr></thead><tbody class='divide-y divide-white/10'><tr><td class='py-2 px-3 font-normal text-purple-100'>1. χάλυβας (κράμα σιδήρου)</td><td class='py-2 px-3 font-bold text-emerald-400'>1 → Β5, Β1</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>2. τεχνητό μετάξι (ρεγιόν)</td><td class='py-2 px-3 font-bold text-emerald-400'>2 → Β7</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>3. βενζίνη</td><td class='py-2 px-3 font-bold text-emerald-400'>3 → Β1</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>4. ασπιρίνη</td><td class='py-2 px-3 font-bold text-emerald-400'>4 → Β6</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>5. λίπασμα</td><td class='py-2 px-3 font-bold text-emerald-400'>5 → Β2</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>6. πλαστικό</td><td class='py-2 px-3 font-bold text-emerald-400'>6 → Β3, Β8</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>7. χρώμα</td><td class='py-2 px-3 font-bold text-emerald-400'>7 → Β4, Β7</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>8. χαρτί</td><td class='py-2 px-3 font-bold text-emerald-400'>8 → Β3, Β4</td></tr></tbody></table></div><p class='text-purple-200 font-normal text-sm'>Ένα υλικό μπορεί να αξιοποιείται σε περισσότερες από μία δραστηριότητες: ο χάλυβας στις κατασκευές και στα οχήματα (μεταφορές), το πλαστικό στις συσκευασίες και στις μπάλες, το χρώμα στη ζωγραφική και στη βαφή των υφασμάτων, το χαρτί στις συσκευασίες και στη ζωγραφική. Το πλαστικό χρησιμοποιείται επίσης σε οχήματα και κατασκευές και το χρώμα στις κατασκευές.</p></div>"
  },
  {
    "chapterId": "chapter-1",
    "q": "9. Η παραγωγή νέων υλικών έκανε πιο εύκολη, πιο ευχάριστη και πιο υγιή τη ζωή των ανθρώπων, αλλά η αλόγιστη χρήση τους έχει και αρνητικές συνέπειες. Στον παρακάτω πίνακα να συμπληρώσετε ένα ☺ σε κάθε τομέα στον οποίο θεωρείτε ότι έχει συνεισφέρει θετικά το υλικό της πρώτης στήλης και ένα ☹ σε κάθε τομέα στον οποίο θεωρείτε ότι έχει συνεισφέρει αρνητικά.<div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><thead class='bg-white/10'><tr><th class='py-2 px-3 font-semibold text-white'>Υλικό</th><th class='py-2 px-3 font-semibold text-white'>Διευκόλυνση της καθημερινής ζωής</th><th class='py-2 px-3 font-semibold text-white'>Ψυχαγωγία</th><th class='py-2 px-3 font-semibold text-white'>Βελτίωση της υγείας</th><th class='py-2 px-3 font-semibold text-white'>Πολιτισμός</th><th class='py-2 px-3 font-semibold text-white'>Περιβάλλον</th></tr></thead><tbody class='divide-y divide-white/10'><tr><td class='py-2 px-3 font-semibold text-white'>Σαπούνια και απορρυπαντικά</td><td class='py-2 px-3 font-normal text-purple-100'></td><td class='py-2 px-3 font-normal text-purple-100'></td><td class='py-2 px-3 font-normal text-purple-100'></td><td class='py-2 px-3 font-normal text-purple-100'></td><td class='py-2 px-3 font-normal text-purple-100'></td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Χρώματα</td><td class='py-2 px-3 font-normal text-purple-100'></td><td class='py-2 px-3 font-normal text-purple-100'></td><td class='py-2 px-3 font-normal text-purple-100'></td><td class='py-2 px-3 font-normal text-purple-100'></td><td class='py-2 px-3 font-normal text-purple-100'></td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Λιπάσματα και εντομοκτόνα</td><td class='py-2 px-3 font-normal text-purple-100'></td><td class='py-2 px-3 font-normal text-purple-100'></td><td class='py-2 px-3 font-normal text-purple-100'></td><td class='py-2 px-3 font-normal text-purple-100'></td><td class='py-2 px-3 font-normal text-purple-100'></td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Πλαστικά</td><td class='py-2 px-3 font-normal text-purple-100'></td><td class='py-2 px-3 font-normal text-purple-100'></td><td class='py-2 px-3 font-normal text-purple-100'></td><td class='py-2 px-3 font-normal text-purple-100'></td><td class='py-2 px-3 font-normal text-purple-100'></td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Συντηρητικά τροφίμων</td><td class='py-2 px-3 font-normal text-purple-100'></td><td class='py-2 px-3 font-normal text-purple-100'></td><td class='py-2 px-3 font-normal text-purple-100'></td><td class='py-2 px-3 font-normal text-purple-100'></td><td class='py-2 px-3 font-normal text-purple-100'></td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Αντιβιοτικά</td><td class='py-2 px-3 font-normal text-purple-100'></td><td class='py-2 px-3 font-normal text-purple-100'></td><td class='py-2 px-3 font-normal text-purple-100'></td><td class='py-2 px-3 font-normal text-purple-100'></td><td class='py-2 px-3 font-normal text-purple-100'></td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Καύσιμα και λιπαντικά</td><td class='py-2 px-3 font-normal text-purple-100'></td><td class='py-2 px-3 font-normal text-purple-100'></td><td class='py-2 px-3 font-normal text-purple-100'></td><td class='py-2 px-3 font-normal text-purple-100'></td><td class='py-2 px-3 font-normal text-purple-100'></td></tr></tbody></table></div>",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><thead class='bg-white/10'><tr><th class='py-2 px-3 font-semibold text-white'>Υλικό</th><th class='py-2 px-3 font-semibold text-white'>Διευκόλυνση της καθημερινής ζωής</th><th class='py-2 px-3 font-semibold text-white'>Ψυχαγωγία</th><th class='py-2 px-3 font-semibold text-white'>Βελτίωση της υγείας</th><th class='py-2 px-3 font-semibold text-white'>Πολιτισμός</th><th class='py-2 px-3 font-semibold text-white'>Περιβάλλον</th></tr></thead><tbody class='divide-y divide-white/10'><tr><td class='py-2 px-3 font-semibold text-white'>Σαπούνια και απορρυπαντικά</td><td class='py-2 px-3 font-bold text-emerald-400'><span class='text-emerald-400 text-lg'>☺</span></td><td class='py-2 px-3 font-normal text-purple-100'></td><td class='py-2 px-3 font-bold text-emerald-400'><span class='text-emerald-400 text-lg'>☺</span></td><td class='py-2 px-3 font-normal text-purple-100'></td><td class='py-2 px-3 font-bold text-emerald-400'><span class='text-rose-400 text-lg'>☹</span></td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Χρώματα</td><td class='py-2 px-3 font-normal text-purple-100'></td><td class='py-2 px-3 font-bold text-emerald-400'><span class='text-emerald-400 text-lg'>☺</span></td><td class='py-2 px-3 font-normal text-purple-100'></td><td class='py-2 px-3 font-bold text-emerald-400'><span class='text-emerald-400 text-lg'>☺</span></td><td class='py-2 px-3 font-bold text-emerald-400'><span class='text-rose-400 text-lg'>☹</span></td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Λιπάσματα και εντομοκτόνα</td><td class='py-2 px-3 font-bold text-emerald-400'><span class='text-emerald-400 text-lg'>☺</span></td><td class='py-2 px-3 font-normal text-purple-100'></td><td class='py-2 px-3 font-bold text-emerald-400'><span class='text-rose-400 text-lg'>☹</span></td><td class='py-2 px-3 font-normal text-purple-100'></td><td class='py-2 px-3 font-bold text-emerald-400'><span class='text-rose-400 text-lg'>☹</span></td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Πλαστικά</td><td class='py-2 px-3 font-bold text-emerald-400'><span class='text-emerald-400 text-lg'>☺</span></td><td class='py-2 px-3 font-bold text-emerald-400'><span class='text-emerald-400 text-lg'>☺</span></td><td class='py-2 px-3 font-bold text-emerald-400'><span class='text-rose-400 text-lg'>☹</span></td><td class='py-2 px-3 font-normal text-purple-100'></td><td class='py-2 px-3 font-bold text-emerald-400'><span class='text-rose-400 text-lg'>☹</span></td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Συντηρητικά τροφίμων</td><td class='py-2 px-3 font-bold text-emerald-400'><span class='text-emerald-400 text-lg'>☺</span></td><td class='py-2 px-3 font-normal text-purple-100'></td><td class='py-2 px-3 font-bold text-emerald-400'><span class='text-rose-400 text-lg'>☹</span></td><td class='py-2 px-3 font-normal text-purple-100'></td><td class='py-2 px-3 font-normal text-purple-100'></td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Αντιβιοτικά</td><td class='py-2 px-3 font-normal text-purple-100'></td><td class='py-2 px-3 font-normal text-purple-100'></td><td class='py-2 px-3 font-bold text-emerald-400'><span class='text-emerald-400 text-lg'>☺</span></td><td class='py-2 px-3 font-normal text-purple-100'></td><td class='py-2 px-3 font-normal text-purple-100'></td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Καύσιμα και λιπαντικά</td><td class='py-2 px-3 font-bold text-emerald-400'><span class='text-emerald-400 text-lg'>☺</span></td><td class='py-2 px-3 font-normal text-purple-100'></td><td class='py-2 px-3 font-bold text-emerald-400'><span class='text-rose-400 text-lg'>☹</span></td><td class='py-2 px-3 font-normal text-purple-100'></td><td class='py-2 px-3 font-bold text-emerald-400'><span class='text-rose-400 text-lg'>☹</span></td></tr></tbody></table></div><p class='text-purple-200 font-normal text-sm'>Η απάντηση είναι ενδεικτική, αφού η άσκηση ζητά την εκτίμησή σας. Για παράδειγμα: τα απορρυπαντικά βελτίωσαν την υγιεινή αλλά ρυπαίνουν τα νερά· τα χρώματα αξιοποιούνται στην τέχνη αλλά περιέχουν διαλύτες και άλλες ουσίες που ρυπαίνουν το περιβάλλον· τα πλαστικά είναι φθηνά και ανθεκτικά (π.χ. παιχνίδια, μπάλες), αλλά επιβαρύνουν το περιβάλλον λόγω της μεγάλης τους αντοχής· τα καύσιμα διευκολύνουν τις μετακινήσεις, αλλά τα καυσαέρια ρυπαίνουν την ατμόσφαιρα και βλάπτουν την υγεία· τα αντιβιοτικά αντιμετωπίζουν τις μολύνσεις.</p></div>"
  },
  {
    "chapterId": "chapter-1",
    "q": "Σταυρόλεξο της Χημείας. Να λύσετε το σταυρόλεξο (μπορείτε να το λύσετε και διαδικτυακά: <a href='https://crosswordlabs.com/view/2023-08-23-137' target='_blank' rel='noopener noreferrer' class='underline text-sky-300'>crosswordlabs.com</a>).<br><br><b>Οριζόντια</b><br><b>2.</b> Μείγμα υδρογονανθράκων που παράγεται από το αργό πετρέλαιο και χρησιμοποιείται κυρίως για την κίνηση των αυτοκινήτων.<br><b>5.</b> Κατηγορία πολύ παχυντικών θρεπτικών ουσιών που διασπώνται τελευταία από τον οργανισμό.<br><b>6.</b> Αποτελούνται από τη χημική ένωση ανθρακικό ασβέστιο και τα πιο γνωστά είναι του Παρθενώνα.<br><b>8.</b> Ονομάζονται και βιοκαταλύτες και επιταχύνουν τις χημικές αντιδράσεις.<br><b>9.</b> Η γνωστότερη είναι η αιθυλική …… ή οινόπνευμα, που είναι κύριο συστατικό της μπίρας, του κρασιού και όλων των αλκοολούχων ποτών.<br><br><b>Κάθετα</b><br><b>1.</b> Το σωματίδιο που έχει το μικρότερο αρνητικό φορτίο στη φύση.<br><b>3.</b> Χημικό στοιχείο που σε διάλυμα χρησιμοποιείται για την απολύμανση των πληγών.<br><b>4.</b> Η επιστήμη των μεταβολών που στηρίζει τη ζωή μας.<br><b>7.</b> Θρεπτική ουσία της κατηγορίας των υδατανθράκων που υπάρχει στις πατάτες, στο ρύζι, στα μακαρόνια και στο ψωμί.",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p><span class='text-white'>Οριζόντια</span> </p><p><b>2.</b> Μείγμα υδρογονανθράκων που παράγεται από το αργό πετρέλαιο και χρησιμοποιείται κυρίως για την κίνηση των αυτοκινήτων. <span class='text-amber-300'>→ ΒΕΝΖΙΝΗ</span><br><b>5.</b> Κατηγορία πολύ παχυντικών θρεπτικών ουσιών που διασπώνται τελευταία από τον οργανισμό. <span class='text-amber-300'>→ ΛΙΠΗ</span><br><b>6.</b> Αποτελούνται από τη χημική ένωση ανθρακικό ασβέστιο και τα πιο γνωστά είναι του Παρθενώνα. <span class='text-amber-300'>→ ΜΑΡΜΑΡΑ</span><br><b>8.</b> Ονομάζονται και βιοκαταλύτες και επιταχύνουν τις χημικές αντιδράσεις. <span class='text-amber-300'>→ ΕΝΖΥΜΑ</span><br><b>9.</b> Η γνωστότερη είναι η αιθυλική …… ή οινόπνευμα, που είναι κύριο συστατικό της μπίρας, του κρασιού και όλων των αλκοολούχων ποτών. <span class='text-amber-300'>→ ΑΛΚΟΟΛΗ</span></p><p><span class='text-white'>Κάθετα</span> </p><p><b>1.</b> Το σωματίδιο που έχει το μικρότερο αρνητικό φορτίο στη φύση. <span class='text-amber-300'>→ ΗΛΕΚΤΡΟΝΙΟ</span><br><b>3.</b> Χημικό στοιχείο που σε διάλυμα χρησιμοποιείται για την απολύμανση των πληγών. <span class='text-amber-300'>→ ΙΩΔΙΟ</span><br><b>4.</b> Η επιστήμη των μεταβολών που στηρίζει τη ζωή μας. <span class='text-amber-300'>→ ΧΗΜΕΙΑ</span><br><b>7.</b> Θρεπτική ουσία της κατηγορίας των υδατανθράκων που υπάρχει στις πατάτες, στο ρύζι, στα μακαρόνια και στο ψωμί. <span class='text-amber-300'>→ ΑΜΥΛΟ</span></p></div>"
  },
  {
    "chapterId": "chapter-3",
    "q": "1. Να συμπληρώσετε τα κενά με τις κατάλληλες λέξεις ή αριθμούς.<br>Το μεγαλύτερο ποσοστό του νερού στη Γη είναι <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> και αποτελεί περίπου το <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> της συνολικής ποσότητας του νερού. Το υπόλοιπο <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> είναι γλυκό νερό, αλλά δεν μπορεί να χρησιμοποιηθεί όλο, γιατί το μεγαλύτερο ποσοστό του βρίσκεται στους <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>. Έτσι, περίπου το 1% του συνολικού νερού μπορεί να αξιοποιηθεί για τις ανάγκες του ανθρώπου. Το νερό που προορίζεται για ανθρώπινη κατανάλωση ονομάζεται <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> και πρέπει να είναι <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>, δηλαδή να μην έχει μεγάλη σκληρότητα (δηλαδή πολλά <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>), ούτε μεγάλη ποσότητα οργανικών ουσιών, <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> μετάλλων και <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>, ώστε να μπορεί να καταναλώνεται χωρίς να κινδυνεύει η υγεία του ανθρώπου.",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p>Το μεγαλύτερο ποσοστό του νερού στη Γη είναι <span class='text-amber-300 underline decoration-dotted underline-offset-4'>αλμυρό</span> και αποτελεί περίπου το <span class='text-amber-300 underline decoration-dotted underline-offset-4'>97%</span> της συνολικής ποσότητας του νερού. Το υπόλοιπο <span class='text-amber-300 underline decoration-dotted underline-offset-4'>3%</span> είναι γλυκό νερό, αλλά δεν μπορεί να χρησιμοποιηθεί όλο, γιατί το μεγαλύτερο ποσοστό του βρίσκεται στους <span class='text-amber-300 underline decoration-dotted underline-offset-4'>παγετώνες</span>. Έτσι, περίπου το 1% του συνολικού νερού μπορεί να αξιοποιηθεί για τις ανάγκες του ανθρώπου. Το νερό που προορίζεται για ανθρώπινη κατανάλωση ονομάζεται <span class='text-amber-300 underline decoration-dotted underline-offset-4'>πόσιμο νερό</span> και πρέπει να είναι <span class='text-amber-300 underline decoration-dotted underline-offset-4'>καθαρό</span>, δηλαδή να μην έχει μεγάλη σκληρότητα (δηλαδή πολλά <span class='text-amber-300 underline decoration-dotted underline-offset-4'>άλατα</span>), ούτε μεγάλη ποσότητα οργανικών ουσιών, <span class='text-amber-300 underline decoration-dotted underline-offset-4'>βαρέων</span> μετάλλων και <span class='text-amber-300 underline decoration-dotted underline-offset-4'>μικροβίων</span>, ώστε να μπορεί να καταναλώνεται χωρίς να κινδυνεύει η υγεία του ανθρώπου.</p></div>"
  },
  {
    "chapterId": "chapter-3",
    "q": "3. Να δικαιολογήσετε τη φράση: «Στα αφυδατωμένα τρόφιμα δεν επιβιώνουν οι μικροοργανισμοί και γι’ αυτό διατηρούνται για μεγαλύτερο διάστημα».",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p>Οι μικροοργανισμοί, όπως όλοι οι οργανισμοί, χρειάζονται νερό για να επιβιώσουν και να αναπτυχθούν. Λόγω της πολύ μικρής ποσότητας νερού που περιέχουν τα αφυδατωμένα τρόφιμα, οι συνθήκες για την ανάπτυξη των μικροοργανισμών που καταστρέφουν τα τρόφιμα είναι πολύ δυσμενείς, γι’ αυτό τα τρόφιμα αυτά διατηρούνται για μεγαλύτερο διάστημα.</p></div>"
  },
  {
    "chapterId": "chapter-3",
    "q": "4. Ζυγίζουμε μια ποσότητα φρέσκα βερίκοκα και τη βρίσκουμε ίση με 100 g. Τοποθετούμε τα βερίκοκα στον ήλιο για αρκετές μέρες και παρατηρούμε ότι συρρικνώνονται (ζαρώνουν) και, όταν τα ζυγίζουμε, βρίσκουμε τη μάζα τους 60 g. Πού οφείλεται η μεταβολή στην εμφάνιση και στη μάζα των βερίκοκων;",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p>Η μεταβολή στην εμφάνιση και στη μάζα των βερίκοκων οφείλεται στην εξάτμιση μέρους του νερού που περιέχουν: εξατμίστηκαν 100 g − 60 g = 40 g νερού.</p></div>"
  },
  {
    "chapterId": "chapter-3",
    "q": "6. Σε γλάστρες που περιέχουν φυτά πολύ μικρής απαίτησης σε H<sub>2</sub>O, όπως οι κάκτοι, τοποθετούνται μερικές φορές στην επιφάνεια του χώματος κρύσταλλοι γαλαζόπετρας. Η σύσταση των γεωπόνων είναι να παρακολουθείται το χρώμα των κρυστάλλων και, όταν αρχίσουν να χάνουν το γαλάζιο χρώμα τους και να γίνονται λευκοί, το φυτό να ποτίζεται.<br>α. Τι έχει συμβεί όταν η γαλαζόπετρα χάνει το χρώμα της;<br>β. Πώς θα μπορούσαμε να ελέγξουμε αν η ατμόσφαιρα περιέχει υδρατμούς;",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p><span class='text-white'>α.</span> Η γαλαζόπετρα είναι ένυδρος χαλκός θειικός (CuSO<sub>4</sub>·5H<sub>2</sub>O) και έχει γαλάζιο χρώμα. Όταν το χώμα στεγνώνει, οι κρύσταλλοι χάνουν το νερό που περιέχουν (το νερό εξατμίζεται) και ο ένυδρος χαλκός θειικός μετατρέπεται σε άνυδρο χαλκό θειικό (CuSO<sub>4</sub>), που έχει λευκό χρώμα. Το λευκό χρώμα δείχνει λοιπόν ότι το φυτό χρειάζεται πότισμα.</p><p><span class='text-white'>β.</span> Μπορούμε να χρησιμοποιήσουμε ένα παγωμένο ποτήρι, μπουκάλι ή μεταλλικό κουτί: επάνω του θα σχηματιστούν σταγόνες νερού από την υγροποίηση των υδρατμών της ατμόσφαιρας. Μπορούμε επίσης να αφήσουμε λίγο λευκό άνυδρο χαλκό θειικό εκτεθειμένο στον αέρα· σιγά σιγά θα αποκτήσει γαλάζιο χρώμα, καθώς απορροφά τους υδρατμούς.</p></div>"
  },
  {
    "chapterId": "chapter-3",
    "q": "7. Το κοβάλτιο διχλωρίδιο (CoCl<sub>2</sub>) είναι ένα άλας που έχει γαλάζιο χρώμα, αλλά όταν έρθει σε επαφή με το νερό μετατρέπεται σε ένυδρο κοβάλτιο διχλωρίδιο, το οποίο έχει ανοιχτόχρωμο ροζ χρώμα.<br>α. Μπορούμε να ανιχνεύσουμε την παρουσία του νερού σε ένα υλικό χρησιμοποιώντας χάρτινες ταινίες εμποτισμένες με διάλυμα κοβαλτίου διχλωριδίου γαλάζιου χρώματος;<br>β. Οι χάρτινες ταινίες κοβαλτίου διχλωριδίου πρέπει να φυλάσσονται αεροστεγώς και να μην έρχονται σε επαφή με τον ατμοσφαιρικό αέρα πριν χρησιμοποιηθούν. Μπορείτε να εξηγήσετε γιατί;<br>γ. Το ροζ χρώμα του ένυδρου κοβαλτίου διχλωριδίου είναι πολύ αχνό και δεν φαίνεται επάνω στο χαρτί, ενώ το γαλάζιο χρώμα του άνυδρου κοβαλτίου διχλωριδίου είναι εμφανές· γι’ αυτό το ένυδρο κοβάλτιο διχλωρίδιο έχει χρησιμοποιηθεί για την παρασκευή αόρατης μελάνης. Η Όλη έγραψε με αόρατη μελάνη πάνω σε ένα κομμάτι χαρτί το αποτέλεσμα μιας άσκησης και το έδωσε στον Ίον. Μπορείτε να προτείνετε έναν τρόπο να δει ο Ίον το αποτέλεσμα της άσκησης;",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p><span class='text-white'>α.</span> Ναι. Αν το υλικό περιέχει νερό, το χρώμα της ταινίας θα αλλάξει από γαλάζιο σε ανοιχτόχρωμο ροζ, καθώς το άνυδρο κοβάλτιο διχλωρίδιο θα μετατραπεί σε ένυδρο κοβάλτιο διχλωρίδιο.</p><p><span class='text-white'>β.</span> Ο ατμοσφαιρικός αέρας περιέχει υδρατμούς. Αν οι ταινίες έρθουν σε επαφή με τον αέρα, θα απορροφήσουν τους υδρατμούς και θα γίνουν ροζ πριν χρησιμοποιηθούν, οπότε δεν θα μπορούν πλέον να ανιχνεύσουν το νερό.</p><p><span class='text-white'>γ.</span> Ο Ίον μπορεί να θερμάνει ελαφρά το χαρτί (π.χ. με ένα πιστολάκι μαλλιών). Το νερό θα εξατμιστεί, το ένυδρο κοβάλτιο διχλωρίδιο θα μετατραπεί σε άνυδρο και τα γράμματα θα εμφανιστούν με γαλάζιο χρώμα.</p></div>"
  },
  {
    "chapterId": "chapter-3",
    "q": "8. Να παρατηρήσετε προσεκτικά την εικόνα και να επιλέξετε ποιες από τις ακόλουθες προτάσεις είναι σωστές και ποιες λανθασμένες, και να αιτιολογήσετε την απάντησή σας.<img src='/images/bGymnasiou/ch3_q8_cuso4.jpg' alt='Ανίχνευση νερού με άνυδρο θειικό χαλκό σε βενζίνη, γάλα και λάδι' class='block mx-auto my-4 w-full rounded-xl bg-white p-2' style='max-width:440px'>α. Μπορούμε να ανιχνεύσουμε την παρουσία του νερού στον ατμοσφαιρικό αέρα χρησιμοποιώντας γαλαζόπετρα, δηλαδή μπλε ένυδρο χαλκό θειικό.<br>β. Το γάλα δεν περιέχει νερό.<br>γ. Το λάδι δεν περιέχει νερό.<br>δ. Αν μια βενζίνη περιέχει νερό, είναι νοθευμένη.",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p><span class='text-white'>α.</span> Η πρόταση είναι <span class='text-rose-400'>λανθασμένη</span>. Για την ανίχνευση του νερού χρησιμοποιούμε τον άνυδρο χαλκό θειικό (CuSO<sub>4</sub>), που είναι λευκή σκόνη. Όταν απορροφήσει νερό, μετατρέπεται σε ένυδρο χαλκό θειικό (CuSO<sub>4</sub>·5H<sub>2</sub>O), που έχει χαρακτηριστικό γαλάζιο χρώμα· αυτή η αλλαγή χρώματος μάς επιτρέπει να ανιχνεύσουμε το νερό (και τους υδρατμούς του αέρα). Η γαλαζόπετρα όμως είναι ήδη ένυδρη και γαλάζια, οπότε δεν αλλάζει χρώμα όταν έρθει σε επαφή με νερό και δεν μπορεί να χρησιμοποιηθεί για την ανίχνευσή του.</p><p><span class='text-white'>β.</span> Η πρόταση είναι <span class='text-rose-400'>λανθασμένη</span>. Το νερό είναι το κύριο συστατικό του γάλακτος. Αυτό αποδεικνύεται αν σε δείγμα γάλακτος προσθέσουμε λευκό άνυδρο χαλκό θειικό: θα μετατραπεί σε γαλάζιο ένυδρο χαλκό θειικό, όπως φαίνεται στην εικόνα.</p><p><span class='text-white'>γ.</span> Η πρόταση είναι <span class='text-emerald-400'>σωστή</span>. Αν σε δείγμα λαδιού προσθέσουμε λευκό άνυδρο χαλκό θειικό, δεν παρατηρούμε καμία αλλαγή χρώματος.</p><p><span class='text-white'>δ.</span> Η πρόταση είναι <span class='text-emerald-400'>σωστή</span>. Η καθαρή βενζίνη είναι μείγμα υδρογονανθράκων και δεν περιέχει νερό (στην εικόνα ο άνυδρος χαλκός θειικός παραμένει λευκός). Επομένως, αν μια βενζίνη περιέχει νερό, είναι νοθευμένη.</p></div>"
  },
  {
    "chapterId": "chapter-3",
    "q": "9. Να συμπληρώσετε τα κενά με τις κατάλληλες λέξεις:<br>α. Η βενζίνη είναι ένα <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> μείγμα, διότι αποτελείται από πολλούς υδρογονάνθρακες οι οποίοι δεν διακρίνονται μεταξύ τους.<br>β. Αν αναμείξουμε λάδι με νερό, θα παρατηρήσουμε ότι θα σχηματιστούν δύο διακριτά στρώματα στο ποτήρι. Το σύστημα λάδι – νερό είναι ένα <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> μείγμα.<br>γ. Το οινόπνευμα του εμπορίου περιέχει νερό και αιθανόλη. Παρότι η αιθανόλη βρίσκεται σε μεγαλύτερη αναλογία, το οινόπνευμα χαρακτηρίζεται <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>.<br>δ. Η ποσότητα μιας ουσίας που μπορεί να διαλυθεί στο νερό που περιέχεται σε ένα ποτήρι εξαρτάται από: 1. <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> και 2. <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>.",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p>α. Η βενζίνη είναι ένα <span class='text-amber-300 underline decoration-dotted underline-offset-4'>ομογενές</span> μείγμα, διότι αποτελείται από πολλούς υδρογονάνθρακες οι οποίοι δεν διακρίνονται μεταξύ τους.</p><p>β. Αν αναμείξουμε λάδι με νερό, θα παρατηρήσουμε ότι θα σχηματιστούν δύο διακριτά στρώματα στο ποτήρι. Το σύστημα λάδι – νερό είναι ένα <span class='text-amber-300 underline decoration-dotted underline-offset-4'>ετερογενές</span> μείγμα.</p><p>γ. Το οινόπνευμα του εμπορίου περιέχει νερό και αιθανόλη. Παρότι η αιθανόλη βρίσκεται σε μεγαλύτερη αναλογία, το οινόπνευμα χαρακτηρίζεται <span class='text-amber-300 underline decoration-dotted underline-offset-4'>υδατικό διάλυμα</span>.</p><p>δ. Η ποσότητα μιας ουσίας που μπορεί να διαλυθεί στο νερό που περιέχεται σε ένα ποτήρι εξαρτάται από: 1. <span class='text-amber-300 underline decoration-dotted underline-offset-4'>τη φύση της ουσίας</span> και 2. <span class='text-amber-300 underline decoration-dotted underline-offset-4'>τη θερμοκρασία</span>.</p><p class='text-purple-200 font-normal text-sm'>Όταν ένα από τα συστατικά ενός διαλύματος είναι το νερό, θεωρούμε ότι αυτό είναι ο διαλύτης και το διάλυμα χαρακτηρίζεται υδατικό, ακόμη κι αν το νερό βρίσκεται σε μικρότερη αναλογία.</p></div>"
  },
  {
    "chapterId": "chapter-3",
    "q": "11. α. Πότε ένα διάλυμα χαρακτηρίζεται υδατικό;<br>β. Είναι δυνατό μια ουσία να μη διαλύεται στο νερό, αλλά να διαλύεται σε κάποια άλλη ουσία; Να αναφέρετε ένα παράδειγμα για να υποστηρίξετε την άποψή σας.<br>γ. Να αναφέρετε δύο παραδείγματα υδατικών διαλυμάτων και ένα παράδειγμα στο οποίο διαλύτης είναι μια άλλη ουσία.",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p><span class='text-white'>α.</span> Ένα διάλυμα χαρακτηρίζεται υδατικό όταν ο διαλύτης είναι το νερό.</p><p><span class='text-white'>β.</span> Ναι. Κάποιες ουσίες δεν διαλύονται στο νερό, διαλύονται όμως σε άλλους διαλύτες. Για παράδειγμα, το ελαιόλαδο δεν διαλύεται στο νερό, διαλύεται όμως στη βενζίνη· το βερνίκι νυχιών δεν διαλύεται στο νερό, αλλά διαλύεται στο ασετόν.</p><p><span class='text-white'>γ.</span> Υδατικά διαλύματα είναι το αλατόνερο και το ζαχαρόνερο. Διάλυμα στο οποίο ο διαλύτης δεν είναι το νερό είναι το διάλυμα του βερνικιού νυχιών σε ασετόν.</p></div>"
  },
  {
    "chapterId": "chapter-3",
    "q": "12. Να αντιστοιχίσετε τα μείγματα της στήλης Α στον χαρακτηρισμό που τους ταιριάζει στη στήλη Β.<div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><thead class='bg-white/10'><tr><th class='py-2 px-3 font-semibold text-white'>Α: Μείγματα</th><th class='py-2 px-3 font-semibold text-white'>Β: Χαρακτηρισμός</th></tr></thead><tbody class='divide-y divide-white/10'><tr><td class='py-2 px-3 font-normal text-purple-100'>1. Αίμα</td><td class='py-2 px-3 font-normal text-purple-100'>α. Ομογενές</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>2. Αλατοπίπερο</td><td class='py-2 px-3 font-normal text-purple-100'>β. Ετερογενές</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>3. Ζαχαρόνερο</td><td class='py-2 px-3 font-normal text-purple-100'></td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>4. Γρανίτης</td><td class='py-2 px-3 font-normal text-purple-100'></td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>5. Αναψυκτικό τύπου κόλα</td><td class='py-2 px-3 font-normal text-purple-100'></td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>6. Ψωμί</td><td class='py-2 px-3 font-normal text-purple-100'></td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>7. Αλατόνερο</td><td class='py-2 px-3 font-normal text-purple-100'></td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>8. Σοκολατούχο γάλα</td><td class='py-2 px-3 font-normal text-purple-100'></td></tr></tbody></table></div>",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><thead class='bg-white/10'><tr><th class='py-2 px-3 font-semibold text-white'>Μείγμα</th><th class='py-2 px-3 font-semibold text-white'>Αντιστοίχιση</th></tr></thead><tbody class='divide-y divide-white/10'><tr><td class='py-2 px-3 font-normal text-purple-100'>1. Αίμα</td><td class='py-2 px-3 font-bold text-emerald-400'>1 → β (ετερογενές)</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>2. Αλατοπίπερο</td><td class='py-2 px-3 font-bold text-emerald-400'>2 → β (ετερογενές)</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>3. Ζαχαρόνερο</td><td class='py-2 px-3 font-bold text-emerald-400'>3 → α (ομογενές)</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>4. Γρανίτης</td><td class='py-2 px-3 font-bold text-emerald-400'>4 → β (ετερογενές)</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>5. Αναψυκτικό τύπου κόλα</td><td class='py-2 px-3 font-bold text-emerald-400'>5 → α (ομογενές)</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>6. Ψωμί</td><td class='py-2 px-3 font-bold text-emerald-400'>6 → β (ετερογενές)</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>7. Αλατόνερο</td><td class='py-2 px-3 font-bold text-emerald-400'>7 → α (ομογενές)</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>8. Σοκολατούχο γάλα</td><td class='py-2 px-3 font-bold text-emerald-400'>8 → β (ετερογενές)</td></tr></tbody></table></div><p class='text-purple-200 font-normal text-sm'>Το αίμα και το σοκολατούχο γάλα φαίνονται ομογενή με γυμνό μάτι, όμως στο μικροσκόπιο διακρίνονται τα συστατικά τους (ερυθρά αιμοσφαίρια και πλάσμα στο αίμα, σταγονίδια λίπους και σωματίδια κακάο στο γάλα, τα οποία με τον χρόνο κατακάθονται), άρα είναι ετερογενή μείγματα. Το αναψυκτικό κόλα είναι υδατικό διάλυμα (ζάχαρη, διοξείδιο του άνθρακα, χρωστικές κ.ά. διαλυμένα στο νερό), άρα ομογενές μείγμα· μόνο όταν ανοίξουμε τη φιάλη και σχηματιστούν φυσαλίδες γίνεται προσωρινά ετερογενές.</p></div>"
  },
  {
    "chapterId": "chapter-3",
    "q": "14. Ο Ίον πειραματίζεται στο σπίτι του φτιάχνοντας διαλύματα ζαχαρόνερου. Μετά το τέλος των πειραμάτων λέει στους φίλους του ότι γέμισε με κρύο νερό ένα ποτήρι και διέλυσε αρχικά ένα κουταλάκι του γλυκού ζάχαρη. Στη συνέχεια διέλυσε ένα δεύτερο κουταλάκι ζάχαρη, αλλά όταν προσπάθησε να διαλύσει και τρίτο, η ζάχαρη δεν διαλύθηκε και έμεινε στον πυθμένα του ποτηριού. Στη συνέχεια έκανε το ίδιο πείραμα με ζεστό νερό και παρατήρησε ότι διαλύθηκαν και τα τρία κουταλάκια ζάχαρης. Να δικαιολογήσετε τις ακόλουθες παρατηρήσεις του Ίονα.<br>α. Το διάλυμα που δημιουργήθηκε όταν διαλύθηκε το πρώτο κουταλάκι ζάχαρη είχε γλυκιά γεύση.<br>β. Το διάλυμα που δημιουργήθηκε όταν διαλύθηκε και το δεύτερο κουταλάκι ζάχαρη είχε πιο γλυκιά γεύση από το πρώτο.<br>γ. Δεν είναι δυνατόν να διαλυθούν τρία κουταλάκια ζάχαρη στην ποσότητα του νερού που χωρά σε ένα ποτήρι.<br>δ. Η ποσότητα της ζάχαρης που μπορεί να διαλυθεί σε ορισμένη ποσότητα νερού αυξάνεται όταν αυξάνεται η θερμοκρασία.<br>ε. Η επιπλέον ζάχαρη θα μπορούσε να διαλυθεί με προσθήκη μεγαλύτερης ποσότητας νερού.<br>στ. Από τα τρία διαλύματα ζάχαρης το πιο πυκνό είναι αυτό που περιέχει τρία κουταλάκια ζάχαρης διαλυμένα στο νερό.",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p><span class='text-white'>α.</span> Τα συστατικά ενός μείγματος διατηρούν τις ιδιότητές τους, οπότε το διάλυμα είναι γλυκό όπως η ζάχαρη.</p><p><span class='text-white'>β.</span> Το δεύτερο διάλυμα περιέχει περισσότερη ζάχαρη στην ίδια ποσότητα νερού, οπότε η γεύση του είναι πιο γλυκιά.</p><p><span class='text-white'>γ.</span> Η ποσότητα μιας ουσίας που μπορεί να διαλυθεί σε ορισμένη ποσότητα διαλύτη δεν είναι απεριόριστη: στο κρύο νερό του ποτηριού μπορούσαν να διαλυθούν μόνο δύο κουταλάκια ζάχαρη, γι’ αυτό το τρίτο έμεινε αδιάλυτο. Η μέγιστη ποσότητα μιας ουσίας που μπορεί να διαλυθεί σε ορισμένη ποσότητα διαλύτη, σε ορισμένη θερμοκρασία, ονομάζεται διαλυτότητα.</p><p><span class='text-white'>δ.</span> Με την αύξηση της θερμοκρασίας αυξάνεται η διαλυτότητα της ζάχαρης στο νερό· γι’ αυτό στο ζεστό νερό διαλύθηκαν και τα τρία κουταλάκια.</p><p><span class='text-white'>ε.</span> Αφού σε ορισμένη ποσότητα νερού διαλύεται ορισμένη ποσότητα ζάχαρης, περισσότερο νερό μπορεί να διαλύσει μεγαλύτερη ποσότητα ζάχαρης.</p><p><span class='text-white'>στ.</span> Ένα διάλυμα που περιέχει μεγάλη ποσότητα διαλυμένης ουσίας σε ορισμένη ποσότητα διαλύτη χαρακτηρίζεται πυκνό, οπότε το πιο πυκνό διάλυμα είναι αυτό που περιέχει τα τρία κουταλάκια ζάχαρης.</p></div>"
  },
  {
    "chapterId": "chapter-3",
    "q": "15. Να αντιστοιχίσετε καθεμία από τις ουσίες της στήλης Α σε έναν διαλύτη της στήλης Β στον οποίο πιστεύετε ότι μπορεί να διαλυθεί.<div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><thead class='bg-white/10'><tr><th class='py-2 px-3 font-semibold text-white'>Α: Ουσία</th><th class='py-2 px-3 font-semibold text-white'>Β: Διαλύτης</th></tr></thead><tbody class='divide-y divide-white/10'><tr><td class='py-2 px-3 font-normal text-purple-100'>1. λίπος</td><td class='py-2 px-3 font-normal text-purple-100'>α. νερό</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>2. ζάχαρη</td><td class='py-2 px-3 font-normal text-purple-100'>β. βενζίνη</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>3. βερνίκι νυχιών</td><td class='py-2 px-3 font-normal text-purple-100'>γ. ασετόν</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>4. αλάτι</td><td class='py-2 px-3 font-normal text-purple-100'></td></tr></tbody></table></div>",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><thead class='bg-white/10'><tr><th class='py-2 px-3 font-semibold text-white'>Ουσία</th><th class='py-2 px-3 font-semibold text-white'>Αντιστοίχιση</th></tr></thead><tbody class='divide-y divide-white/10'><tr><td class='py-2 px-3 font-normal text-purple-100'>1. λίπος</td><td class='py-2 px-3 font-bold text-emerald-400'>1 → β (βενζίνη)</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>2. ζάχαρη</td><td class='py-2 px-3 font-bold text-emerald-400'>2 → α (νερό)</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>3. βερνίκι νυχιών</td><td class='py-2 px-3 font-bold text-emerald-400'>3 → γ (ασετόν)</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>4. αλάτι</td><td class='py-2 px-3 font-bold text-emerald-400'>4 → α (νερό)</td></tr></tbody></table></div><p class='text-purple-200 font-normal text-sm'>Ένας διαλύτης μπορεί να αντιστοιχιστεί σε περισσότερες από μία ουσίες: το νερό διαλύει και τη ζάχαρη και το αλάτι. Το λίπος διαλύεται σε μικρό βαθμό και στο ασετόν, αλλά ο κατάλληλος διαλύτης του είναι η βενζίνη· το βερνίκι νυχιών δεν διαλύεται ικανοποιητικά στη βενζίνη, γι’ αυτό για την αφαίρεσή του χρησιμοποιούμε ασετόν.</p></div>"
  },
  {
    "chapterId": "chapter-3",
    "q": "16. Να συμπληρώσετε τα κενά με τις κατάλληλες λέξεις.<br>i. Το οινόπνευμα του εμπορίου περιέχει νερό και αιθανόλη. Η αιθανόλη βράζει στους 78 °C και το νερό στους 100 °C, όταν η πίεση είναι 1 atm. Η κατάλληλη μέθοδος διαχωρισμού τους είναι η <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>.<br>ii. Η κατάλληλη μέθοδος για τον διαχωρισμό<br>α. καρπών φακής από πετραδάκια με τα οποία έχει ανακατευτεί είναι η <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>.<br>β. μαγειρικού αλατιού από άμμο είναι αρχικά η <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> με νερό, γιατί μόνο το <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> διαλύεται, και στη συνέχεια η <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> του διαλύματος, ώστε να παραμείνει ως ίζημα <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>.",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p>i. Το οινόπνευμα του εμπορίου περιέχει νερό και αιθανόλη. Η αιθανόλη βράζει στους 78 °C και το νερό στους 100 °C, όταν η πίεση είναι 1 atm. Η κατάλληλη μέθοδος διαχωρισμού τους είναι η <span class='text-amber-300 underline decoration-dotted underline-offset-4'>απόσταξη</span>.</p><p>ii. Η κατάλληλη μέθοδος για τον διαχωρισμό</p><p>α. καρπών φακής από πετραδάκια με τα οποία έχει ανακατευτεί είναι η <span class='text-amber-300 underline decoration-dotted underline-offset-4'>διαλογή</span>.</p><p>β. μαγειρικού αλατιού από άμμο είναι αρχικά η <span class='text-amber-300 underline decoration-dotted underline-offset-4'>διάλυση</span> με νερό, γιατί μόνο το <span class='text-amber-300 underline decoration-dotted underline-offset-4'>αλάτι</span> διαλύεται, και στη συνέχεια η <span class='text-amber-300 underline decoration-dotted underline-offset-4'>διήθηση</span> του διαλύματος, ώστε να παραμείνει ως ίζημα <span class='text-amber-300 underline decoration-dotted underline-offset-4'>η άμμος</span>.</p><p class='text-purple-200 font-normal text-sm'>Για να παραλάβουμε στη συνέχεια το αλάτι, εξατμίζουμε το νερό του διηθήματος.</p></div>"
  },
  {
    "chapterId": "chapter-3",
    "q": "17. α. Ποια μέθοδο διαχωρισμού πιστεύετε ότι χρησιμοποιεί η βιομηχανία γάλακτος για να αποβουτυρώνει το γάλα και να παράγει γάλα χαμηλών λιπαρών, και πώς το επιτυγχάνει;<br>β. Το χρώμα του μελανιού των μαρκαδόρων προέρχεται από την ανάμειξη πολλών διαφορετικών χρωστικών. Να περιγράψετε τη διαδικασία με την οποία μπορείτε να βρείτε ποιες χρωστικές έχουν χρησιμοποιηθεί για το μελάνι ενός ροζ ή τιρκουάζ μαρκαδόρου.",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p><span class='text-white'>α.</span> Η φυγοκέντριση. Το γάλα περιστρέφεται με πολύ μεγάλη ταχύτητα σε ειδικό διαχωριστή και τα συστατικά του διαχωρίζονται με βάση τη διαφορετική τους πυκνότητα: το λίπος (η κρέμα), που έχει μικρότερη πυκνότητα, απομακρύνεται και παραμένει το γάλα χαμηλών λιπαρών.</p><p><span class='text-white'>β.</span> Με τη χρωματογραφία. Τοποθετούμε μια μικρή κηλίδα από το μελάνι κοντά στη βάση μιας λωρίδας διηθητικού χαρτιού και βυθίζουμε την άκρη της λωρίδας σε κατάλληλο διαλύτη (π.χ. νερό ή οινόπνευμα), χωρίς ο διαλύτης να σκεπάζει την κηλίδα. Ο διαλύτης ανεβαίνει στο χαρτί και παρασύρει τις χρωστικές, οι οποίες κινούνται με διαφορετική ταχύτητα και διαχωρίζονται σε χρωματιστές ζώνες. Έτσι βλέπουμε από ποιες χρωστικές αποτελείται το μελάνι.</p></div>"
  },
  {
    "chapterId": "chapter-3",
    "q": "18. α. Ποια μέθοδο διαχωρισμού μειγμάτων αναπαριστά το σχήμα; Τι είδους μείγματα μπορούν να διαχωριστούν με αυτή τη μέθοδο;<br>β. Να περιγράψετε σύντομα τη διαδικασία του διαχωρισμού.<br>γ. Ποια από τα ακόλουθα μείγματα μπορούν να διαχωριστούν με αυτή τη μέθοδο; Να δικαιολογήσετε την απάντησή σας και, για όσα δεν είναι δυνατό να διαχωριστούν με διήθηση, να προτείνετε άλλη τεχνική.<img src='/images/bGymnasiou/ch3_q18_filtration.png' alt='Διάταξη διήθησης' class='block mx-auto my-4 w-full rounded-xl bg-white p-2' style='max-width:300px'><div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><thead class='bg-white/10'><tr><th class='py-2 px-3 font-semibold text-white'>Μείγμα</th><th class='py-2 px-3 font-semibold text-white'>Διαχωρίζεται με διήθηση;</th><th class='py-2 px-3 font-semibold text-white'>Αιτιολόγηση – άλλη τεχνική</th></tr></thead><tbody class='divide-y divide-white/10'><tr><td class='py-2 px-3 font-semibold text-white'>Αλατόνερο</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Ρόφημα χαμομήλι με τα άνθη του</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Πλήρες γάλα</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Νερό με χώμα</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Ζαχαρόνερο</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr></tbody></table></div>",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p><span class='text-white'>α.</span> Το σχήμα αναπαριστά τη διήθηση. Με τη μέθοδο αυτή διαχωρίζουμε ετερογενή μείγματα στερεού – υγρού.</p><p><span class='text-white'>β.</span> Διπλώνουμε ένα διηθητικό χαρτί σε πτυχωτό ηθμό και το τοποθετούμε στο χωνί, κάτω από το οποίο βάζουμε ένα ποτήρι ζέσεως. Αδειάζουμε το μείγμα στον ηθμό χρησιμοποιώντας μια γυάλινη ράβδο, που ακουμπά στο χείλος (ρύγχος) του ποτηριού, ως οδηγό. Το υγρό (διήθημα) περνά από τον ηθμό και συλλέγεται στο ποτήρι ζέσεως, ενώ το αδιάλυτο στερεό παραμένει στον ηθμό.</p><p><span class='text-white'>γ.</span> </p><div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><thead class='bg-white/10'><tr><th class='py-2 px-3 font-semibold text-white'>Μείγμα</th><th class='py-2 px-3 font-semibold text-white'>Διαχωρίζεται με διήθηση;</th><th class='py-2 px-3 font-semibold text-white'>Αιτιολόγηση – άλλη τεχνική</th></tr></thead><tbody class='divide-y divide-white/10'><tr><td class='py-2 px-3 font-semibold text-white'>Αλατόνερο</td><td class='py-2 px-3 font-bold text-emerald-400'>Όχι (−)</td><td class='py-2 px-3 font-bold text-emerald-400'>Είναι διάλυμα (ομογενές μείγμα): το αλάτι είναι διαλυμένο και περνά μαζί με το νερό από τον ηθμό. Το αλάτι παραλαμβάνεται με εξάτμιση του νερού (ή με απόσταξη, αν θέλουμε να παραλάβουμε και το νερό).</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Ρόφημα χαμομήλι με τα άνθη του</td><td class='py-2 px-3 font-bold text-emerald-400'>Ναι (+)</td><td class='py-2 px-3 font-bold text-emerald-400'>Τα άνθη είναι αδιάλυτο στερεό (ετερογενές μείγμα στερεού – υγρού) και κατακρατούνται στον ηθμό, ενώ το ρόφημα περνά ως διήθημα.</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Πλήρες γάλα</td><td class='py-2 px-3 font-bold text-emerald-400'>Όχι (−)</td><td class='py-2 px-3 font-bold text-emerald-400'>Τα σταγονίδια του λίπους είναι πολύ μικρά και περνούν από τον ηθμό. Για την αποβουτύρωση του γάλακτος χρησιμοποιείται η φυγοκέντριση.</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Νερό με χώμα</td><td class='py-2 px-3 font-bold text-emerald-400'>Ναι (+)</td><td class='py-2 px-3 font-bold text-emerald-400'>Το χώμα είναι αδιάλυτο στερεό (ετερογενές μείγμα στερεού – υγρού) και κατακρατείται στον ηθμό (μπορεί να προηγηθεί απόχυση).</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Ζαχαρόνερο</td><td class='py-2 px-3 font-bold text-emerald-400'>Όχι (−)</td><td class='py-2 px-3 font-bold text-emerald-400'>Είναι διάλυμα (ομογενές μείγμα): η ζάχαρη είναι διαλυμένη και περνά από τον ηθμό. Το νερό μπορεί να παραληφθεί με απόσταξη και η ζάχαρη με εξάτμιση του νερού (κρυστάλλωση).</td></tr></tbody></table></div></div>"
  },
  {
    "chapterId": "chapter-3",
    "q": "20. Να συμπληρώσετε την ακροστιχίδα. Η λέξη στην ακροστιχίδα δηλώνει τον στόχο που έχουμε όταν εκχυλίζουμε, αποστάζουμε ή διηθούμε ένα μείγμα (σε αιτιατική).<br>1. Μέθοδος διαχωρισμού στερεού από υγρό σε ετερογενές μείγμα.<br>2. Μία τέτοια αξιοποιούμε για να διαχωρίσουμε ένα μείγμα στα συστατικά του.<br>3. Μέθοδος διαχωρισμού στερεού – υγρού, όταν θέλουμε να παραλάβουμε και τα δύο.<br>4. Η μέθοδος που χρησιμοποιείται για τον διαχωρισμό των χρωστικών της μελάνης.<br>5. Ένα από τα φωνήεντα των χρωστικών.<br>6. Αυτό του τσαγιού παραλαμβάνεται με εκχύλιση των αιθέριων ελαίων των φύλλων του φυτού.<br>7. Το στερεό υπόλειμμα.<br>8. Τέτοια πρέπει να είναι η διαλυμένη ουσία για να διαχωριστεί με εξάτμιση του διαλύτη.<br>9. Στη φύση, οι περισσότερες ουσίες είναι σε αυτή τη μορφή.<br>10. Τέτοιο μείγμα είναι το διάλυμα του αλατόνερου.<div class='overflow-x-auto my-3'><table class='border-collapse text-sm font-bold'><tbody><tr><td class='pr-2 text-right text-white/60 font-normal'>1</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>2</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>3</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>4</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>5</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>6</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>7</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>8</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>9</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>10</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td></tr></tbody></table></div>",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><div class='overflow-x-auto my-3'><table class='border-collapse text-sm font-bold'><tbody><tr><td class='pr-2 text-right text-white/60 font-normal'>1</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>Δ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ι</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Η</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Θ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Η</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Σ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Η</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>2</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>Ι</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Δ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ι</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ο</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Τ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Η</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Τ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Α</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>3</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>Α</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Π</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ο</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Σ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Τ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Α</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ξ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Η</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>4</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>Χ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ρ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ω</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Μ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Α</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Τ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ο</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Γ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ρ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Α</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Φ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ι</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Α</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>5</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>Ω</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Μ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ε</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Γ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Α</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>6</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>Ρ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ο</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Φ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Η</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Μ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Α</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>7</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>Ι</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ζ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Η</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Μ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Α</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>8</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>Σ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Τ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ε</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ρ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ε</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Η</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>9</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>Μ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ε</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ι</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Γ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Μ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Α</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Τ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Α</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>10</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>Ο</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Μ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ο</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Γ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ε</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ν</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ε</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Σ</td></tr></tbody></table></div><p>Η λέξη της ακροστιχίδας είναι: <span class='text-yellow-400 tracking-widest'>ΔΙΑΧΩΡΙΣΜΟ</span></p></div>"
  },
  {
    "chapterId": "chapter-3",
    "q": "21. Τι πληροφορίες μάς δίνει η έκφραση: «Η περιεκτικότητα της μαγιονέζας σε λιπαρά είναι 80% m/m»;",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p>Σε 100 g μαγιονέζας περιέχονται 80 g λιπαρών.</p></div>"
  },
  {
    "chapterId": "chapter-3",
    "q": "22. Κάποιο αλλαντικό αναγράφει στη συσκευασία του: «Σε 100 g έτοιμου προϊόντος περιέχονται: πρωτεΐνες 10,6 g, λιπαρά 35 g, αλάτι 0,8 g».<br>α. Ποια είναι η % m/m περιεκτικότητα του αλλαντικού σε αυτές τις ουσίες;<br>β. Τι πληροφορίες μάς δίνει η ετικέτα ενός γιαουρτιού light η οποία αναφέρει «2% m/m λιπαρά»;",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p><span class='text-white'>α.</span> Το αλλαντικό έχει περιεκτικότητα 10,6% m/m σε πρωτεΐνες, 35% m/m σε λιπαρά και 0,8% m/m σε αλάτι.</p><p><span class='text-white'>β.</span> Σε 100 g γιαουρτιού περιέχονται 2 g λιπαρών.</p></div>"
  },
  {
    "chapterId": "chapter-3",
    "q": "23. Να συμπληρώσετε τα κενά με τις κατάλληλες λέξεις ή αριθμούς.<br>α. Σε 100 g υδατικού διαλύματος φρουκτόζης 20% m/m περιέχονται <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> φρουκτόζης και <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> νερό.<br>β. Μεταξύ δύο υδατικών διαλυμάτων ζάχαρης με περιεκτικότητες 10% m/v και 30% m/v, πιο πυκνό είναι το διάλυμα που έχει περιεκτικότητα <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>.",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p>α. Σε 100 g υδατικού διαλύματος φρουκτόζης 20% m/m περιέχονται <span class='text-amber-300 underline decoration-dotted underline-offset-4'>20 g</span> φρουκτόζης και <span class='text-amber-300 underline decoration-dotted underline-offset-4'>80 g</span> νερό.</p><p>β. Μεταξύ δύο υδατικών διαλυμάτων ζάχαρης με περιεκτικότητες 10% m/v και 30% m/v, πιο πυκνό είναι το διάλυμα που έχει περιεκτικότητα <span class='text-amber-300 underline decoration-dotted underline-offset-4'>30% m/v</span>.</p></div>"
  },
  {
    "chapterId": "chapter-3",
    "q": "24. α. Τι πληροφορίες μάς δίνει η έκφραση: «Ο χυμός έχει περιεκτικότητα 0,2% m/v σε κιτρικό οξύ»;<br>β. Το πλήρες γάλα έχει περιεκτικότητα σε λιπαρά 15% m/v. Πώς θα χαρακτηρίζατε ένα γάλα, πλήρες ή light, αν ξέρατε ότι περιέχει 6 g λιπαρών σε 300 mL;",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p><span class='text-white'>α.</span> Σε 100 mL χυμού περιέχονται 0,2 g κιτρικού οξέος.</p><p><span class='text-white'>β.</span> Σε 100 mL πλήρους γάλακτος περιέχονται 15 g λιπαρών.<br>Σε 300 mL πλήρους γάλακτος περιέχονται x g λιπαρών.<br>x = 15 · 300 / 100 = 45 g</p><p>Αν το γάλα ήταν πλήρες, θα περιείχε 45 g λιπαρών στα 300 mL. Περιέχει όμως μόνο 6 g, δηλαδή έχει περιεκτικότητα 6 · 100 / 300 = 2% m/v, άρα το χαρακτηρίζουμε light.</p></div>"
  },
  {
    "chapterId": "chapter-3",
    "q": "26. Να συμπληρώσετε τα κενά με τις κατάλληλες λέξεις.<br>α. Η περιεκτικότητα στα εκατό μάζα σε όγκο (% m/v) εκφράζει τα <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> της διαλυμένης ουσίας σε <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>.<br>β. Μεταξύ δύο υδατικών διαλυμάτων ζάχαρης με περιεκτικότητες 10% m/v και 30% m/v, πιο πυκνό είναι το διάλυμα που έχει περιεκτικότητα <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>.",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p>α. Η περιεκτικότητα στα εκατό μάζα σε όγκο (% m/v) εκφράζει τα <span class='text-amber-300 underline decoration-dotted underline-offset-4'>γραμμάρια</span> της διαλυμένης ουσίας σε <span class='text-amber-300 underline decoration-dotted underline-offset-4'>100 mL διαλύματος</span>.</p><p>β. Μεταξύ δύο υδατικών διαλυμάτων ζάχαρης με περιεκτικότητες 10% m/v και 30% m/v, πιο πυκνό είναι το διάλυμα που έχει περιεκτικότητα <span class='text-amber-300 underline decoration-dotted underline-offset-4'>30% m/v</span>.</p></div>"
  },
  {
    "chapterId": "chapter-3",
    "q": "27. Να αντιστοιχίσετε καθένα από τα διαλύματα της στήλης Α στην ποσότητα διαλυμένης ουσίας που περιέχεται σε 200 mL του, στη στήλη Β.<div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><thead class='bg-white/10'><tr><th class='py-2 px-3 font-semibold text-white'>Α: Περιεκτικότητα</th><th class='py-2 px-3 font-semibold text-white'>Β: Ποσότητα σε 200 mL</th></tr></thead><tbody class='divide-y divide-white/10'><tr><td class='py-2 px-3 font-normal text-purple-100'>1. 20% m/v</td><td class='py-2 px-3 font-normal text-purple-100'>80 g</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>2. 10% m/v</td><td class='py-2 px-3 font-normal text-purple-100'>40 g</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>3. 15% m/v</td><td class='py-2 px-3 font-normal text-purple-100'>60 g</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>4. 30% m/v</td><td class='py-2 px-3 font-normal text-purple-100'>30 g</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>5. 40% m/v</td><td class='py-2 px-3 font-normal text-purple-100'>20 g</td></tr></tbody></table></div>",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><thead class='bg-white/10'><tr><th class='py-2 px-3 font-semibold text-white'>Διάλυμα</th><th class='py-2 px-3 font-semibold text-white'>Αντιστοίχιση</th></tr></thead><tbody class='divide-y divide-white/10'><tr><td class='py-2 px-3 font-normal text-purple-100'>1. 20% m/v</td><td class='py-2 px-3 font-bold text-emerald-400'>1 → 40 g</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>2. 10% m/v</td><td class='py-2 px-3 font-bold text-emerald-400'>2 → 20 g</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>3. 15% m/v</td><td class='py-2 px-3 font-bold text-emerald-400'>3 → 30 g</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>4. 30% m/v</td><td class='py-2 px-3 font-bold text-emerald-400'>4 → 60 g</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>5. 40% m/v</td><td class='py-2 px-3 font-bold text-emerald-400'>5 → 80 g</td></tr></tbody></table></div><p class='text-purple-200 font-normal text-sm'>Σε 100 mL διαλύματος x% m/v περιέχονται x g διαλυμένης ουσίας, άρα σε 200 mL περιέχονται 2x g. Π.χ. για το 20% m/v: 2 · 20 = 40 g.</p></div>"
  },
  {
    "chapterId": "chapter-3",
    "q": "28. Στο αλκοτέστ μετράται η ποσότητα του οινοπνεύματος στο αίμα του οδηγού. Το προτεινόμενο επιτρεπτό όριο στην Ευρωπαϊκή Ένωση είναι 0,2 g/L αίματος. Ποια είναι η μέγιστη επιτρεπτή % m/v περιεκτικότητα του αίματος σε οινόπνευμα;",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p>1 L = 1000 mL.<br>Σε 1000 mL αίματος περιέχονται 0,2 g οινοπνεύματος.<br>Σε 100 mL αίματος περιέχονται x g οινοπνεύματος.<br>x = 0,2 · 100 / 1000 = 0,02 g</p><p>Επομένως η μέγιστη επιτρεπτή περιεκτικότητα του αίματος σε οινόπνευμα είναι 0,02% m/v.</p></div>"
  },
  {
    "chapterId": "chapter-3",
    "q": "29. Η βότκα, που έχει περιεκτικότητα σε αλκοόλη 40% v/v, ή η μπίρα, που έχει περιεκτικότητα σε αλκοόλη 5,5% v/v, είναι πιο βλαβερή για τον οργανισμό, αν καταναλωθούν ίσες ποσότητες; Να δικαιολογήσετε την απάντησή σας.",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p>Πιο βλαβερή είναι η βότκα, γιατί έχει πολύ μεγαλύτερη περιεκτικότητα σε αλκοόλη. Σε ίσους όγκους, η βότκα περιέχει περίπου επτά φορές περισσότερη αλκοόλη: σε 100 mL βότκας περιέχονται 40 mL αλκοόλης, ενώ σε 100 mL μπίρας μόνο 5,5 mL.</p></div>"
  },
  {
    "chapterId": "chapter-3",
    "q": "30. α. Τι σημαίνει η έκφραση: «Στον ατμοσφαιρικό αέρα η μέγιστη επιτρεπτή περιεκτικότητα σε άνθρακα μονοξείδιο (CO) είναι 0,01 g άνθρακα μονοξειδίου σε 1 m<sup>3</sup> αέρα»;<br>β. Ποια θα είναι η % m/v περιεκτικότητα του αέρα σε άνθρακα μονοξείδιο στο όριο συναγερμού;",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p><span class='text-white'>α.</span> 1 m<sup>3</sup> = 1000 L. Η έκφραση σημαίνει ότι σε 1000 L ατμοσφαιρικού αέρα επιτρέπεται να περιέχονται το πολύ 0,01 g άνθρακα μονοξειδίου· μεγαλύτερη ποσότητα θεωρείται επικίνδυνη (όριο συναγερμού).</p><p><span class='text-white'>β.</span> 100 mL = 0,1 L.<br>Σε 1000 L αέρα περιέχονται 0,01 g άνθρακα μονοξειδίου.<br>Σε 0,1 L αέρα περιέχονται x g άνθρακα μονοξειδίου.<br>x = 0,1 · 0,01 / 1000 = 0,000001 g</p><p>Επομένως, στο όριο συναγερμού η περιεκτικότητα του αέρα σε άνθρακα μονοξείδιο είναι 0,000001% m/v.</p></div>"
  },
  {
    "chapterId": "chapter-3",
    "q": "31. Να συμπληρώσετε τα κενά με τις κατάλληλες λέξεις ή αριθμούς.<br>α. Το οινόπνευμα του εμπορίου περιέχει νερό και αιθανόλη με περιεκτικότητα σε αιθανόλη 95% v/v. Σε ένα μπουκάλι οινοπνεύματος του εμπορίου που περιέχει 200 mL περιέχονται <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> οινόπνευμα (αιθανόλη).<br>β. Ο ατμοσφαιρικός αέρας έχει περιεκτικότητα σε οξυγόνο 21% v/v, 78% v/v σε άζωτο και 1% v/v σε διάφορα άλλα αέρια. Σε 100 cm<sup>3</sup> αέρα περιέχονται <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> οξυγόνο και <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> άζωτο.",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p>α. Το οινόπνευμα του εμπορίου περιέχει νερό και αιθανόλη με περιεκτικότητα σε αιθανόλη 95% v/v. Σε ένα μπουκάλι οινοπνεύματος του εμπορίου που περιέχει 200 mL περιέχονται <span class='text-amber-300 underline decoration-dotted underline-offset-4'>190 mL</span> οινόπνευμα (αιθανόλη).</p><p>β. Ο ατμοσφαιρικός αέρας έχει περιεκτικότητα σε οξυγόνο 21% v/v, 78% v/v σε άζωτο και 1% v/v σε διάφορα άλλα αέρια. Σε 100 cm<sup>3</sup> αέρα περιέχονται <span class='text-amber-300 underline decoration-dotted underline-offset-4'>21 cm<sup>3</sup></span> οξυγόνο και <span class='text-amber-300 underline decoration-dotted underline-offset-4'>78 cm<sup>3</sup></span> άζωτο.</p></div>"
  },
  {
    "chapterId": "chapter-3",
    "q": "Το χλωρίδιο του κοβαλτίου (CoCl<sub>2</sub>) είναι ένα άλας το οποίο όταν είναι άνυδρο έχει μπλε χρώμα και όταν είναι ένυδρο είναι ροζ. Να προτείνετε ένα πείραμα με το οποίο να αποδεικνύεται ότι το σώμα μας αποβάλλει νερό.",
    "a": "<span class='text-purple-300 font-bold leading-relaxed'>Μπορούμε να φυσήξουμε (εκπνεύσουμε) πάνω σε άνυδρο χλωρίδιο του κοβαλτίου. Οι υδρατμοί της εκπνοής μας θα απορροφηθούν από το άλας, και αυτό θα μετατραπεί από μπλε σε ροζ, αποδεικνύοντας ότι με την αναπνοή μας αποβάλλουμε νερό.</span>"
  },
  {
    "chapterId": "chapter-3",
    "q": "<div class='flex flex-col md:flex-row gap-4'><div class='flex-1'>Να παρατηρήσετε προσεκτικά τη διπλανή εικόνα (Ανίχνευση νερού σε τρόφιμα) και να προσπαθήσετε να εξηγήσετε τι δείχνει και γιατί.</div><div class='w-full md:w-1/3'><div class='bg-white/10 p-4 rounded-xl text-center border border-dashed border-white/30 text-white/60'>[Προσθέστε την εικόνα water.png εδώ]</div></div></div>",
    "a": "<span class='text-purple-300 font-bold leading-relaxed'>Η εικόνα δείχνει ότι όταν θερμαίνουμε ένα τρόφιμο σε δοχείο, το νερό που περιέχει εξατμίζεται. Αν φέρουμε σε επαφή τους υδρατμούς με λευκό άνυδρο θειικό χαλκό, αυτός θα απορροφήσει το νερό και θα γίνει ένυδρος θειικός χαλκός, αποκτώντας το χαρακτηριστικό γαλάζιο χρώμα (γαλαζόπετρα). Έτσι αποδεικνύεται η ύπαρξη νερού στο τρόφιμο.</span>"
  },
  {
    "chapterId": "chapter-3",
    "q": "<div class='flex flex-col md:flex-row gap-4 mb-4'><div class='flex-1'>Παρατηρήστε τη διπλανή εικόνα και τους αντίστοιχους ισχυρισμούς.<br>Έχει δίκιο ο Σώτος ότι δεν θα κουραστεί ο Μέντιος;<br>Ένα διάλυμα ζυγίζει λιγότερο από όσο ζυγίζουν τα υλικά του πριν από την ανάμειξη;<br><br>α. Ναι [ ] &nbsp;&nbsp; β. Όχι [ ] &nbsp;&nbsp; γ. Εξαρτάται [ ]<br><br>Να σχεδιάσετε ένα πείραμα με το οποίο θα αποδείξετε την απάντησή σας.<br>Έχετε στη διάθεσή σας: ηλεκτρονική ζυγαριά, ποτήρι ζέσεως, ζάχαρη, ύαλο ωρολογίου, νερό, σπάτουλα.<br><br>Ο σάκος του υπεραθλητή Cani Recori θα γίνει πιο ελαφρύς αν διαλύσει τη σκόνη ηλεκτρολυτών στο μπουκάλι με το νερό του, αντί να την έχει δίπλα σε αυτό;</div><div class='w-full md:w-1/3'><div class='bg-white/10 p-4 rounded-xl text-center border border-dashed border-white/30 text-white/60'>[Προσθέστε την εικόνα sotos.png εδώ]</div></div></div>",
    "a": "<span class='text-purple-300 font-bold leading-relaxed'>Όχι, δεν έχει δίκιο ο Σώτος. Η μάζα ενός διαλύματος ισούται με το άθροισμα των μαζών του διαλύτη και της διαλυμένης ουσίας (m<sub>διαλύματος</sub> = m<sub>διαλύτη</sub> + m<sub>διαλ. ουσίας</sub>), λόγω της αρχής διατήρησης της μάζας. Επομένως, το συνολικό βάρος που κουβαλάει ο Μέντιος δεν θα αλλάξει.<br><br><b>Πείραμα:</b> Ζυγίζουμε το ποτήρι ζέσεως με το νερό και τη ζάχαρη στην ύαλο ωρολογίου χωριστά, και βρίσκουμε το άθροισμα των μαζών τους. Στη συνέχεια, ρίχνουμε τη ζάχαρη στο νερό, ανακατεύουμε με τη σπάτουλα μέχρι να διαλυθεί πλήρως, και ζυγίζουμε το ποτήρι ζέσεως με το διάλυμα. Θα διαπιστώσουμε ότι η μάζα του διαλύματος είναι ίση με το άθροισμα των αρχικών μαζών.<br><br>Για τον αθλητή: Όχι, το συνολικό βάρος θα παραμείνει ίδιο.</span>"
  },
  {
    "chapterId": "chapter-4",
    "q": "1. Να συμπληρώσετε τα κενά στις ακόλουθες προτάσεις, ώστε να είναι ορθές.<br>Α. Ο Λεύκιππος και ο μαθητής του Δημόκριτος διατύπωσαν την πρώτη <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> θεωρία, υποστηρίζοντας ότι όλα τα υλικά σώματα αποτελούνται από <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>, τα οποία είναι <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>, <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>, χωρίς <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> και <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> συνεχώς στον χώρο.<br>Β. Αντί της θεωρίας του Δημόκριτου, επικράτησε η θεωρία που υποστήριζε ο <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>, σύμφωνα με την οποία όλα τα υλικά σώματα αποτελούνται από τον συνδυασμό τεσσάρων στοιχείων, της <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>, της <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>, του <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> και του <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>, και ενός πέμπτου, που ο Αριστοτέλης ονόμασε <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>.<br>Γ. Οι αλχημιστές, και γενικότερα οι επιστήμονες, μέχρι τον 18ο αιώνα ήταν οπαδοί της άποψης του <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> και ανέπτυσσαν <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> τεχνικές, προσπαθώντας να ανακαλύψουν τη <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> λίθο, ώστε να μετατρέψουν φθηνά μέταλλα σε <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>, και το <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> της ζωής, ώστε να εξασφαλίσουν στους ανθρώπους την αθανασία.<br>Δ. Η Χημεία τούς χρωστά πολλά, γιατί διέσωσαν την αρχαία <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>, ανέπτυξαν <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> τεχνικές, κατασκεύασαν εργαστηριακά <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> και ανακάλυψαν κατά λάθος πολλά <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>. Το τέλος της Αλχημείας και των απόψεων του Αριστοτέλη σηματοδότησε το πείραμα του <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>, ο οποίος απέδειξε ότι το <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> δεν είναι <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>, γιατί κατάφερε να το συνθέσει από <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> και <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>.",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p>Α. Ο Λεύκιππος και ο μαθητής του Δημόκριτος διατύπωσαν την πρώτη <span class='text-amber-300 underline decoration-dotted underline-offset-4'>ατομική</span> θεωρία, υποστηρίζοντας ότι όλα τα υλικά σώματα αποτελούνται από <span class='text-amber-300 underline decoration-dotted underline-offset-4'>άτομα</span>, τα οποία είναι <span class='text-amber-300 underline decoration-dotted underline-offset-4'>άφθαρτα</span>, <span class='text-amber-300 underline decoration-dotted underline-offset-4'>αναλλοίωτα</span>, χωρίς <span class='text-amber-300 underline decoration-dotted underline-offset-4'>κενό</span> και <span class='text-amber-300 underline decoration-dotted underline-offset-4'>κινούνται</span> συνεχώς στον χώρο.</p><p>Β. Αντί της θεωρίας του Δημόκριτου, επικράτησε η θεωρία που υποστήριζε ο <span class='text-amber-300 underline decoration-dotted underline-offset-4'>Αριστοτέλης</span>, σύμφωνα με την οποία όλα τα υλικά σώματα αποτελούνται από τον συνδυασμό τεσσάρων στοιχείων, της <span class='text-amber-300 underline decoration-dotted underline-offset-4'>γης</span>, της <span class='text-amber-300 underline decoration-dotted underline-offset-4'>φωτιάς (πυρ)</span>, του <span class='text-amber-300 underline decoration-dotted underline-offset-4'>νερού (ύδωρ)</span> και του <span class='text-amber-300 underline decoration-dotted underline-offset-4'>αέρα (αήρ)</span>, και ενός πέμπτου, που ο Αριστοτέλης ονόμασε <span class='text-amber-300 underline decoration-dotted underline-offset-4'>αιθέρα</span>.</p><p>Γ. Οι αλχημιστές, και γενικότερα οι επιστήμονες, μέχρι τον 18ο αιώνα ήταν οπαδοί της άποψης του <span class='text-amber-300 underline decoration-dotted underline-offset-4'>Αριστοτέλη</span> και ανέπτυσσαν <span class='text-amber-300 underline decoration-dotted underline-offset-4'>εργαστηριακές</span> τεχνικές, προσπαθώντας να ανακαλύψουν τη <span class='text-amber-300 underline decoration-dotted underline-offset-4'>φιλοσοφική</span> λίθο, ώστε να μετατρέψουν φθηνά μέταλλα σε <span class='text-amber-300 underline decoration-dotted underline-offset-4'>χρυσό</span>, και το <span class='text-amber-300 underline decoration-dotted underline-offset-4'>ελιξίριο</span> της ζωής, ώστε να εξασφαλίσουν στους ανθρώπους την αθανασία.</p><p>Δ. Η Χημεία τούς χρωστά πολλά, γιατί διέσωσαν την αρχαία <span class='text-amber-300 underline decoration-dotted underline-offset-4'>Χημεία</span>, ανέπτυξαν <span class='text-amber-300 underline decoration-dotted underline-offset-4'>εργαστηριακές</span> τεχνικές, κατασκεύασαν εργαστηριακά <span class='text-amber-300 underline decoration-dotted underline-offset-4'>όργανα</span> και ανακάλυψαν κατά λάθος πολλά <span class='text-amber-300 underline decoration-dotted underline-offset-4'>στοιχεία</span>. Το τέλος της Αλχημείας και των απόψεων του Αριστοτέλη σηματοδότησε το πείραμα του <span class='text-amber-300 underline decoration-dotted underline-offset-4'>Lavoisier</span>, ο οποίος απέδειξε ότι το <span class='text-amber-300 underline decoration-dotted underline-offset-4'>νερό</span> δεν είναι <span class='text-amber-300 underline decoration-dotted underline-offset-4'>στοιχείο</span>, γιατί κατάφερε να το συνθέσει από <span class='text-amber-300 underline decoration-dotted underline-offset-4'>υδρογόνο</span> και <span class='text-amber-300 underline decoration-dotted underline-offset-4'>οξυγόνο</span>.</p></div>"
  },
  {
    "chapterId": "chapter-4",
    "q": "2. Να συμπληρώσετε το ακόλουθο εννοιολογικό σχήμα:<img src='/images/bGymnasiou/ch4_q2_concept_map.png' alt='Εννοιολογικό σχήμα: Έλληνες φυσικοί φιλόσοφοι, Δημόκριτος, Αριστοτέλης' class='block mx-auto my-4 w-full rounded-xl bg-white p-2' style='max-width:760px'>",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p><span class='text-white'>Δημόκριτος:</span> Πίστευε ότι τα υλικά σώματα αποτελούνται από <span class='text-amber-300'>άτομα</span>, τα οποία είναι <span class='text-amber-300'>άτμητα, άφθαρτα, αναλλοίωτα και κινούνται συνεχώς</span> (στο κενό). Ο συνδυασμός τους σχηματίζει τα <span class='text-amber-300'>υλικά σώματα</span>. Η θεωρία του <span class='text-amber-300'>δεν έγινε αποδεκτή</span> από τους συγχρόνους του.</p><p><span class='text-white'>Αριστοτέλης:</span> Πίστευε ότι τα υλικά σώματα προέρχονται από τον συνδυασμό <span class='text-amber-300'>τεσσάρων στοιχείων</span>, τα οποία είναι <span class='text-amber-300'>η γη, το νερό (ύδωρ), ο αέρας (αήρ), η φωτιά (πυρ)</span>, και του <span class='text-amber-300'>αιθέρα</span>. Η θεωρία του <span class='text-amber-300'>έγινε αποδεκτή</span> από τους συγχρόνους του και επηρέασε τους <span class='text-amber-300'>αλχημιστές</span>, οι οποίοι, στην προσπάθειά τους να ανακαλύψουν τη <span class='text-amber-300'>φιλοσοφική λίθο</span> και το <span class='text-amber-300'>ελιξίριο</span> της <span class='text-amber-300'>ζωής</span>:</p><ol class='list-decimal ml-5 space-y-1'><li>ανέπτυξαν εργαστηριακές τεχνικές,</li><li>κατασκεύασαν εργαστηριακά όργανα,</li><li>ανακάλυψαν (κατά λάθος) πολλά χημικά στοιχεία.</li></ol><p><span class='text-white'>Καταρρίφθηκε όταν ο</span> <span class='text-amber-300'>Lavoisier</span> απέδειξε ότι το νερό σχηματίζεται από <span class='text-amber-300'>υδρογόνο</span> και <span class='text-amber-300'>οξυγόνο</span>, δηλαδή <span class='text-amber-300'>δεν είναι στοιχείο</span> (είναι χημική ένωση).</p></div>"
  },
  {
    "chapterId": "chapter-4",
    "q": "3. α. Πότε ένα υλικό σώμα χαρακτηρίζεται καθαρή ουσία;<br>β. Πότε μια χημική ουσία χαρακτηρίζεται χημικό στοιχείο; Να αναφέρετε δύο παραδείγματα χημικών στοιχείων που γνωρίζετε από την καθημερινή ζωή.<br>γ. Πότε μια χημική ουσία χαρακτηρίζεται χημική ένωση; Να αναφέρετε δύο παραδείγματα χημικών ενώσεων που γνωρίζετε από την καθημερινή ζωή.<br>δ. Να συμπληρώσετε το σχήμα:<img src='/images/bGymnasiou/ch4_q3_elements_map.jpg' alt='Σχήμα: Χημικά στοιχεία' class='block mx-auto my-4 w-full rounded-xl bg-white p-2' style='max-width:380px'>",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p><span class='text-white'>α.</span> Καθαρές (χημικές) ουσίες ονομάζονται τα υλικά σώματα που έχουν απόλυτα καθορισμένη σύσταση και καθορισμένες φυσικές σταθερές (π.χ. σημείο τήξης, σημείο βρασμού).</p><p><span class='text-white'>β.</span> Χημικό στοιχείο είναι μια καθαρή ουσία που δεν μπορεί να διασπαστεί σε άλλες απλούστερες. Παραδείγματα: το οξυγόνο και το υδρογόνο, ο σίδηρος, ο χαλκός, ο χρυσός.</p><p><span class='text-white'>γ.</span> Χημική ένωση είναι μια καθαρή ουσία που: 1. μπορεί να διασπαστεί σε άλλες απλούστερες (χημικά στοιχεία), 2. έχει σταθερή σύσταση και 3. έχει καθορισμένες φυσικές σταθερές. Παραδείγματα: το νερό, η ζάχαρη, το μαγειρικό αλάτι.</p><p><span class='text-white'>δ.</span> Χημικά στοιχεία → Για παράδειγμα: <span class='text-amber-300'>π.χ. υδρογόνο</span>, <span class='text-amber-300'>π.χ. οξυγόνο</span>. Συνδυάζονται και σχηματίζουν <span class='text-amber-300'>χημικές ενώσεις</span>, οι οποίες έχουν <span class='text-amber-300'>σταθερή σύσταση</span> (και καθορισμένες φυσικές σταθερές).</p></div>"
  },
  {
    "chapterId": "chapter-4",
    "q": "4. α. Πώς κατέληξε ο Lavoisier στο συμπέρασμα ότι το νερό είναι μια χημική ένωση;<br>β. Ποιες πειραματικές μεθόδους μπορούμε να χρησιμοποιήσουμε για να διαπιστώσουμε ποια είναι τα στοιχεία από τα οποία αποτελείται το νερό;<br>γ. Αν κατά τη διάσπαση ορισμένης ποσότητας νερού παράγονται 2 L ενός αερίου Α και 4 L ενός αερίου Β, ποιο αέριο είναι το Α και ποιο το Β, και γιατί;<br>δ. Αν κατά τη διάσπαση ορισμένης ποσότητας νερού παράγονται 4 g οξυγόνου, πόσα g υδρογόνου παράγονται ταυτόχρονα και πόσα g νερού διασπάστηκαν; Να δικαιολογήσετε την απάντησή σας.",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p><span class='text-white'>α.</span> Ο Lavoisier κατέληξε στο συμπέρασμα ότι το νερό είναι χημική ένωση με ένα πείραμα με το οποίο παρασκεύασε νερό από υδρογόνο και οξυγόνο, δηλαδή από απλούστερες χημικές ουσίες.</p><p><span class='text-white'>β.</span> Διασπάμε το νερό (π.χ. με ηλεκτρόλυση) και ανιχνεύουμε τα αέρια που παράγονται, που είναι το οξυγόνο και το υδρογόνο.</p><p>Για να ανιχνεύσουμε το οξυγόνο, ανάβουμε ένα μακρύ και λεπτό ξυλάκι (παρασχίδα) και, αφού παραχθεί φλόγα, το σβήνουμε, αφήνοντας όμως το άκρο του πυρωμένο (καύτρα). Εισάγουμε τη μισοσβησμένη παρασχίδα στον δοκιμαστικό σωλήνα όπου συλλέγεται το αέριο: η παρασχίδα αναφλέγεται, δηλαδή ενισχύεται η καύση της.</p><p>Για να ανιχνεύσουμε το υδρογόνο, σε κωνική φιάλη, που συνδέεται με ποτήρι ζέσεως με σαπουνόνερο, βάζουμε μερικά κομματάκια ψευδάργυρο και υδροχλωρικό οξύ και παρατηρούμε να σχηματίζονται φυσαλίδες αερίου στο σαπουνόνερο. Απομακρύνουμε την κωνική φιάλη και πλησιάζουμε στις φυσαλίδες μια αναμμένη παρασχίδα: ακούμε έναν χαρακτηριστικό κρότο, σαν μικρή έκρηξη, και το υδρογόνο καίγεται με έντονη φλόγα.</p><p><span class='text-white'>γ.</span> Κατά τη διάσπαση του νερού ο όγκος του υδρογόνου που παράγεται είναι διπλάσιος από τον όγκο του οξυγόνου. Επομένως το αέριο Α (2 L) είναι το οξυγόνο και το αέριο Β (4 L) είναι το υδρογόνο.</p><p><span class='text-white'>δ.</span> Κατά τη διάσπαση του νερού η μάζα του οξυγόνου που παράγεται είναι οκταπλάσια από τη μάζα του υδρογόνου (m<sub>υδρογόνου</sub> / m<sub>οξυγόνου</sub> = 1/8). Επομένως, αν παράγονται 4 g οξυγόνου, παράγονται ταυτόχρονα 4 / 8 = 0,5 g υδρογόνου και διασπάστηκαν 4 + 0,5 = 4,5 g νερού (αρχή διατήρησης της μάζας).</p></div>"
  },
  {
    "chapterId": "chapter-4",
    "q": "8. Να συμπληρώσετε τα κενά στον χάρτη εννοιών.<img src='/images/bGymnasiou/ch4_q8_water_map.jpg' alt='Χάρτης εννοιών για το νερό' class='block mx-auto my-4 w-full rounded-xl bg-white p-2' style='max-width:400px'>",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><ul class='list-disc ml-5 space-y-1'><li>ΝΕΡΟ → Διασπάται με <span class='text-amber-300'>ηλεκτρόλυση</span> (ηλεκτρικό ρεύμα)</li><li>Και γι’ αυτό είναι <span class='text-amber-300'>χημική ένωση</span></li><li>σε <span class='text-amber-300'>υδρογόνο</span> και <span class='text-amber-300'>οξυγόνο</span></li><li>Δεν διασπώνται και γι’ αυτό είναι <span class='text-amber-300'>χημικά στοιχεία</span></li><li>Τα οποία παράγονται με αναλογία όγκων: <span class='text-amber-300'>V<sub>υδρογόνου</sub> : V<sub>οξυγόνου</sub> = 2 : 1</span></li><li>Τα οποία παράγονται με αναλογία μαζών: <span class='text-amber-300'>m<sub>υδρογόνου</sub> : m<sub>οξυγόνου</sub> = 1 : 8</span></li></ul></div>"
  },
  {
    "chapterId": "chapter-4",
    "q": "9. α. Η κρυσταλλική ζάχαρη είναι μια χημική ένωση με σημείο τήξης περίπου 170 °C. Μερικές φορές η ζάχαρη νοθεύεται με άλλες ουσίες. Να προτείνετε έναν τρόπο με τον οποίο θα μπορούσατε να βρείτε αν ένα δείγμα ζάχαρης είναι νοθευμένο.<br>β. Αν το δείγμα της ζάχαρης που εξετάζετε αρχίζει να λιώνει στους 160 °C και η θερμοκρασία αυξάνεται σταδιακά κατά τη διάρκεια της τήξης, έχει το δείγμα σας προσμείξεις;",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p><span class='text-white'>α.</span> Μετράμε το σημείο τήξης του δείγματος: το θερμαίνουμε σιγά σιγά και παρακολουθούμε τη θερμοκρασία με θερμόμετρο. Η καθαρή ζάχαρη, ως χημική ένωση, λιώνει περίπου στους 170 °C και η θερμοκρασία παραμένει σταθερή σε όλη τη διάρκεια της τήξης. Αν το δείγμα λιώνει σε διαφορετική θερμοκρασία ή αν η θερμοκρασία μεταβάλλεται κατά την τήξη, τότε είναι νοθευμένο.</p><p><span class='text-white'>β.</span> Ναι, το δείγμα έχει προσμείξεις, γιατί: 1. αρχίζει να λιώνει σε θερμοκρασία (160 °C) διαφορετική από το σημείο τήξης της καθαρής ζάχαρης (170 °C) και 2. η θερμοκρασία δεν παραμένει σταθερή κατά τη διάρκεια της τήξης, κάτι που συμβαίνει στα μείγματα και όχι στις καθαρές ουσίες. Οι προσμείξεις συνήθως ελαττώνουν το σημείο τήξης μιας ουσίας.</p></div>"
  },
  {
    "chapterId": "chapter-4",
    "q": "10. Να συμπληρώσετε τα κενά με τις κατάλληλες λέξεις.<br>α. Τα μείγματα, σε αντίθεση με τις χημικές <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>, δεν έχουν <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>.<br>β. Κατά τη διάρκεια του βρασμού του απιονισμένου νερού η <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> διατηρείται σταθερή, γιατί το νερό είναι <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>.",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p>α. Τα μείγματα, σε αντίθεση με τις χημικές <span class='text-amber-300 underline decoration-dotted underline-offset-4'>ουσίες</span>, δεν έχουν <span class='text-amber-300 underline decoration-dotted underline-offset-4'>καθορισμένες φυσικές σταθερές</span>.</p><p>β. Κατά τη διάρκεια του βρασμού του απιονισμένου νερού η <span class='text-amber-300 underline decoration-dotted underline-offset-4'>θερμοκρασία</span> διατηρείται σταθερή, γιατί το νερό είναι <span class='text-amber-300 underline decoration-dotted underline-offset-4'>καθαρή ουσία</span>.</p></div>"
  },
  {
    "chapterId": "chapter-4",
    "q": "11. Να συμπληρώσετε τα κενά.<br>Ο Ίον έχει μάζα 75 kg και στην προηγούμενη ενότητα μάθαμε ότι το <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> της μάζας του ανθρώπινου σώματος είναι νερό. Επομένως, στο σώμα του το νερό έχει μάζα <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> kg. Με δεδομένο ότι η αναλογία μαζών υδρογόνου – οξυγόνου στο νερό είναι σταθερή και ίση με m<sub>υδρογόνου</sub> / m<sub>οξυγόνου</sub> = <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>, η μάζα του υδρογόνου στο νερό στο σώμα του Ίονα είναι <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> kg και η μάζα του οξυγόνου στο νερό στο σώμα του Ίονα είναι <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> kg.",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p>Ο Ίον έχει μάζα 75 kg και στην προηγούμενη ενότητα μάθαμε ότι το <span class='text-amber-300 underline decoration-dotted underline-offset-4'>66%</span> της μάζας του ανθρώπινου σώματος είναι νερό. Επομένως, στο σώμα του το νερό έχει μάζα <span class='text-amber-300 underline decoration-dotted underline-offset-4'>49,5</span> kg. Με δεδομένο ότι η αναλογία μαζών υδρογόνου – οξυγόνου στο νερό είναι σταθερή και ίση με m<sub>υδρογόνου</sub> / m<sub>οξυγόνου</sub> = <span class='text-amber-300 underline decoration-dotted underline-offset-4'>1/8</span>, η μάζα του υδρογόνου στο νερό στο σώμα του Ίονα είναι <span class='text-amber-300 underline decoration-dotted underline-offset-4'>5,5</span> kg και η μάζα του οξυγόνου στο νερό στο σώμα του Ίονα είναι <span class='text-amber-300 underline decoration-dotted underline-offset-4'>44</span> kg.</p><p class='text-purple-200 font-normal text-sm'>Υπολογισμοί: 66% του 75 kg = 0,66 · 75 = 49,5 kg νερού. Αφού m<sub>υδρογόνου</sub> : m<sub>οξυγόνου</sub> = 1 : 8, τα 49,5 kg νερού χωρίζονται σε 1 + 8 = 9 ίσα μέρη: 49,5 / 9 = 5,5 kg υδρογόνου και 8 · 5,5 = 44 kg οξυγόνου.</p></div>"
  },
  {
    "chapterId": "chapter-4",
    "q": "12. Στο διάγραμμα δίνεται η θερμοκρασία των υγρών σωμάτων Α και Β κατά τη θέρμανσή τους ως συνάρτηση του χρόνου. Τη χρονική στιγμή t<sub>1</sub> αρχίζει να βράζει το σώμα Α και τη χρονική στιγμή t<sub>2</sub> το σώμα Β. Είναι κάποιο από τα δύο σώματα χημική ουσία; Να αιτιολογήσετε την απάντησή σας.<img src='/images/bGymnasiou/ch4_q12_boiling_chart.png' alt='Διάγραμμα θερμοκρασίας – χρόνου για τα σώματα Α και Β' class='block mx-auto my-4 w-full rounded-xl bg-white p-2' style='max-width:280px'>",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p>Χημική (καθαρή) ουσία είναι μόνο το σώμα Β: μετά τη χρονική στιγμή t<sub>2</sub>, που αρχίζει ο βρασμός του, η θερμοκρασία του παραμένει σταθερή (περίπου 80 °C) σε όλη τη διάρκεια του βρασμού.</p><p>Το σώμα Α είναι μείγμα, γιατί μετά τη χρονική στιγμή t<sub>1</sub>, ενώ βράζει, η θερμοκρασία του συνεχίζει να αυξάνεται.</p></div>"
  },
  {
    "chapterId": "chapter-4",
    "q": "13. Ο άνθρακας μονοξείδιο (CO) αποτελείται από άνθρακα και οξυγόνο με αναλογία μαζών m<sub>άνθρακα</sub> / m<sub>οξυγόνου</sub> = 3/4. Να συμπληρώσετε τις ποσότητες που λείπουν στον ακόλουθο πίνακα.<div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><thead class='bg-white/10'><tr><th class='py-2 px-3 font-semibold text-white'></th><th class='py-2 px-3 font-semibold text-white'>Μάζα άνθρακα μονοξειδίου (g)</th><th class='py-2 px-3 font-semibold text-white'>Μάζα άνθρακα (g)</th><th class='py-2 px-3 font-semibold text-white'>Μάζα οξυγόνου (g)</th></tr></thead><tbody class='divide-y divide-white/10'><tr><td class='py-2 px-3 font-semibold text-white'>1</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>12</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>2</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>64</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>3</td><td class='py-2 px-3 font-normal text-purple-100'>56</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>4</td><td class='py-2 px-3 font-normal text-purple-100'>14</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr></tbody></table></div>",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><thead class='bg-white/10'><tr><th class='py-2 px-3 font-semibold text-white'></th><th class='py-2 px-3 font-semibold text-white'>Μάζα άνθρακα μονοξειδίου (g)</th><th class='py-2 px-3 font-semibold text-white'>Μάζα άνθρακα (g)</th><th class='py-2 px-3 font-semibold text-white'>Μάζα οξυγόνου (g)</th></tr></thead><tbody class='divide-y divide-white/10'><tr><td class='py-2 px-3 font-semibold text-white'>1</td><td class='py-2 px-3 font-bold text-emerald-400'>28</td><td class='py-2 px-3 font-normal text-purple-100'>12</td><td class='py-2 px-3 font-bold text-emerald-400'>16</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>2</td><td class='py-2 px-3 font-bold text-emerald-400'>112</td><td class='py-2 px-3 font-bold text-emerald-400'>48</td><td class='py-2 px-3 font-normal text-purple-100'>64</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>3</td><td class='py-2 px-3 font-normal text-purple-100'>56</td><td class='py-2 px-3 font-bold text-emerald-400'>24</td><td class='py-2 px-3 font-bold text-emerald-400'>32</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>4</td><td class='py-2 px-3 font-normal text-purple-100'>14</td><td class='py-2 px-3 font-bold text-emerald-400'>6</td><td class='py-2 px-3 font-bold text-emerald-400'>8</td></tr></tbody></table></div><p class='text-purple-200 font-normal text-sm'>Αφού m<sub>άνθρακα</sub> : m<sub>οξυγόνου</sub> = 3 : 4, κάθε 7 g άνθρακα μονοξειδίου περιέχουν 3 g άνθρακα και 4 g οξυγόνου. Π.χ. στη γραμμή 2: m<sub>άνθρακα</sub> = 64 · 3/4 = 48 g και m<sub>CO</sub> = 48 + 64 = 112 g.</p></div>"
  },
  {
    "chapterId": "chapter-4",
    "q": "14. Να συμπληρώσετε την ακροστιχίδα. Η λέξη στην ακροστιχίδα σημαίνει χημική ουσία που δεν μπορεί να διασπαστεί σε απλούστερες.<br>1. Τέτοια είναι η ποσοτική σύσταση των χημικών ενώσεων.<br>2. Σημείο που είναι σταθερό για τις χημικές ενώσεις και τα χημικά στοιχεία.<br>3. Τέτοια μείγματα είναι τα διαλύματα.<br>4. Αυτές των ενώσεων είναι διαφορετικές από αυτές των συστατικών τους στοιχείων.<br>5. Στοιχείο που είναι ακριβό μέταλλο.<br>6. Χημική ουσία που μπορεί να διασπαστεί σε απλούστερες.<br>7. Το σημείο ζέσης του χημικού στοιχείου ιώδιο είναι πάντα…<br>8. Παράγεται κατά τη διάσπαση του νερού.<div class='overflow-x-auto my-3'><table class='border-collapse text-sm font-bold'><tbody><tr><td class='pr-2 text-right text-white/60 font-normal'>1</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>2</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>3</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>4</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>5</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>6</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>7</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>8</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td></tr></tbody></table></div>",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><div class='overflow-x-auto my-3'><table class='border-collapse text-sm font-bold'><tbody><tr><td class='pr-2 text-right text-white/60 font-normal'>1</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>Σ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Τ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Α</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Θ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ε</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ρ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Η</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>2</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>Τ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Η</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ξ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Η</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Σ</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>3</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>Ο</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Μ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ο</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Γ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ε</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ν</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Η</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>4</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>Ι</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Δ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ι</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ο</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Τ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Η</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Τ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ε</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Σ</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>5</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>Χ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ρ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Υ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Σ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ο</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Σ</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>6</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>Ε</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ν</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ω</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Σ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Η</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>7</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>Ι</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Δ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ι</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ο</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>8</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>Ο</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ξ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Υ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Γ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ο</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ν</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ο</td></tr></tbody></table></div><p>Η λέξη της ακροστιχίδας είναι: <span class='text-yellow-400 tracking-widest'>ΣΤΟΙΧΕΙΟ</span></p></div>"
  },
  {
    "chapterId": "chapter-5",
    "q": "1. Ποιο είναι το βασικό δομικό υλικό των υλικών σωμάτων;",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p>Το βασικό δομικό υλικό των υλικών σωμάτων είναι το άτομο.</p></div>"
  },
  {
    "chapterId": "chapter-5",
    "q": "2. Ποιες ομοιότητες και ποιες διαφορές παρουσιάζουν οι ατομικές θεωρίες του Δημόκριτου και του Dalton;",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p><span class='text-white'>Ομοιότητες:</span> Τόσο ο Δημόκριτος όσο και ο Dalton υποστήριξαν ότι η ύλη δεν μπορεί να τέμνεται (διαιρείται) επ’ άπειρον, αλλά αποτελείται από πολύ μικρά σωματίδια, τα άτομα, τα οποία είναι άτμητα και άφθαρτα. Επίσης υποστήριξαν ότι τα άτομα έχουν συγκεκριμένα χαρακτηριστικά και ότι οι διαφορετικές ουσίες αποτελούνται από διαφορετικά είδη ατόμων.</p><p><span class='text-white'>Διαφορές:</span> Η θεωρία του Δημόκριτου ήταν φιλοσοφική, δηλαδή στηριζόταν στη λογική σκέψη και όχι σε πειράματα, ενώ η θεωρία του Dalton στηρίχτηκε σε πειραματικά δεδομένα. Ο Δημόκριτος δεν ανέπτυξε συγκεκριμένη θεωρία για τον τρόπο με τον οποίο συνδέονται τα άτομα για να σχηματίσουν τις διάφορες ουσίες, ενώ σύμφωνα με τον Dalton τα άτομα διαφορετικών στοιχείων συνδυάζονται σε απλές, καθορισμένες αναλογίες και σχηματίζουν τις χημικές ενώσεις. Επιπλέον, ο Dalton υποστήριξε ότι τα άτομα του ίδιου στοιχείου είναι ίδια (έχουν την ίδια μάζα), ενώ τα άτομα διαφορετικών στοιχείων διαφέρουν μεταξύ τους.</p></div>"
  },
  {
    "chapterId": "chapter-5",
    "q": "5. Τα προσομοιώματα του πίνακα παριστάνουν μόρια στοιχείων και χημικών ενώσεων. Να εξηγήσετε ποια αναπαριστούν μόρια χημικών ενώσεων και ποια μόρια στοιχείων.<div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><thead class='bg-white/10'><tr><th class='py-2 px-3 font-semibold text-white'></th><th class='py-2 px-3 font-semibold text-white'>Προσομοίωμα</th></tr></thead><tbody class='divide-y divide-white/10'><tr><td class='py-2 px-3 font-semibold text-white'>Α</td><td class='py-2 px-3 font-normal text-purple-100'><span style='display:inline-flex;align-items:center'><span style='display:inline-block;width:24px;height:24px;border-radius:50%;background:radial-gradient(circle at 32% 30%, rgba(255,255,255,0.85), #e53e3e 45%);vertical-align:middle;'></span><span style='display:inline-block;width:26px;height:26px;border-radius:50%;background:radial-gradient(circle at 32% 30%, rgba(255,255,255,0.85), #3182ce 45%);vertical-align:middle;margin-left:-7px;'></span><span style='display:inline-block;width:24px;height:24px;border-radius:50%;background:radial-gradient(circle at 32% 30%, rgba(255,255,255,0.85), #e53e3e 45%);vertical-align:middle;margin-left:-7px;'></span></span></td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Β</td><td class='py-2 px-3 font-normal text-purple-100'><span style='display:inline-flex;align-items:center'><span style='display:inline-block;width:30px;height:30px;border-radius:50%;background:radial-gradient(circle at 32% 30%, rgba(255,255,255,0.85), #38a169 45%);vertical-align:middle;'></span><span style='display:inline-block;width:30px;height:30px;border-radius:50%;background:radial-gradient(circle at 32% 30%, rgba(255,255,255,0.85), #38a169 45%);vertical-align:middle;margin-left:-7px;'></span></span></td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Γ</td><td class='py-2 px-3 font-normal text-purple-100'><span style='display:inline-flex;align-items:center'><span style='display:inline-block;width:26px;height:26px;border-radius:50%;background:radial-gradient(circle at 32% 30%, rgba(255,255,255,0.85), #c8875e 45%);vertical-align:middle;'></span></span></td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Δ</td><td class='py-2 px-3 font-normal text-purple-100'><span style='display:inline-flex;align-items:center'><span style='display:inline-block;width:30px;height:30px;border-radius:50%;background:radial-gradient(circle at 32% 30%, rgba(255,255,255,0.85), #38a169 45%);vertical-align:middle;'></span><span style='display:inline-block;width:24px;height:24px;border-radius:50%;background:radial-gradient(circle at 32% 30%, rgba(255,255,255,0.85), #e53e3e 45%);vertical-align:middle;margin-left:-7px;'></span><span style='display:inline-block;width:16px;height:16px;border-radius:50%;background:radial-gradient(circle at 32% 30%, rgba(255,255,255,0.85), #ffffff 45%);border:1px solid #aaa;vertical-align:middle;margin-left:-7px;'></span></span></td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Ε</td><td class='py-2 px-3 font-normal text-purple-100'><span style='display:inline-flex;align-items:center'><span style='display:inline-block;width:16px;height:16px;border-radius:50%;background:radial-gradient(circle at 32% 30%, rgba(255,255,255,0.85), #ffffff 45%);border:1px solid #aaa;vertical-align:middle;'></span><span style='display:inline-block;width:24px;height:24px;border-radius:50%;background:radial-gradient(circle at 32% 30%, rgba(255,255,255,0.85), #e53e3e 45%);vertical-align:middle;margin-left:-7px;'></span><span style='display:inline-block;width:24px;height:24px;border-radius:50%;background:radial-gradient(circle at 32% 30%, rgba(255,255,255,0.85), #e53e3e 45%);vertical-align:middle;margin-left:-7px;'></span><span style='display:inline-block;width:16px;height:16px;border-radius:50%;background:radial-gradient(circle at 32% 30%, rgba(255,255,255,0.85), #ffffff 45%);border:1px solid #aaa;vertical-align:middle;margin-left:-7px;'></span></span></td></tr></tbody></table></div>",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p>Τα μόρια των χημικών στοιχείων αποτελούνται από όμοια άτομα. Επομένως τα προσομοιώματα που παριστάνουν μόρια στοιχείων είναι τα <span class='text-amber-300'>Β και Γ</span> (το Γ είναι μονοατομικό μόριο).</p><p>Τα μόρια των χημικών ενώσεων αποτελούνται από άτομα διαφορετικού είδους. Επομένως τα προσομοιώματα που παριστάνουν μόρια χημικών ενώσεων είναι τα <span class='text-amber-300'>Α, Δ και Ε</span>.</p></div>"
  },
  {
    "chapterId": "chapter-5",
    "q": "6. Να συμπληρώσετε τα κενά στις ακόλουθες προτάσεις με την κατάλληλη λέξη, ώστε η κάθε πρόταση να είναι σωστή.<br>α. Τα άτομα συνδυάζονται σε καθορισμένη <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> και σχηματίζουν <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>. Τα μόρια που σχηματίζονται από τον συνδυασμό όμοιων ατόμων είναι μόρια <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>, ενώ αυτά που σχηματίζονται από τον συνδυασμό διαφορετικών ατόμων είναι μόρια <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>.<br>β. Ατομικότητα ονομάζεται ο <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> των ατόμων που σχηματίζουν το μόριο του <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>. Για παράδειγμα, το μόριο του χλωρίου αποτελείται από δύο άτομα χλωρίου, επομένως η ατομικότητα του χλωρίου είναι <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>, ενώ το μόριο του όζοντος αποτελείται από <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> άτομα οξυγόνου, επομένως η ατομικότητα του όζοντος είναι 3.",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p>α. Τα άτομα συνδυάζονται σε καθορισμένη <span class='text-amber-300 underline decoration-dotted underline-offset-4'>αναλογία</span> και σχηματίζουν <span class='text-amber-300 underline decoration-dotted underline-offset-4'>ενώσεις</span>. Τα μόρια που σχηματίζονται από τον συνδυασμό όμοιων ατόμων είναι μόρια <span class='text-amber-300 underline decoration-dotted underline-offset-4'>στοιχείων</span>, ενώ αυτά που σχηματίζονται από τον συνδυασμό διαφορετικών ατόμων είναι μόρια <span class='text-amber-300 underline decoration-dotted underline-offset-4'>χημικών ενώσεων</span>.</p><p>β. Ατομικότητα ονομάζεται ο <span class='text-amber-300 underline decoration-dotted underline-offset-4'>αριθμός</span> των ατόμων που σχηματίζουν το μόριο του <span class='text-amber-300 underline decoration-dotted underline-offset-4'>στοιχείου</span>. Για παράδειγμα, το μόριο του χλωρίου αποτελείται από δύο άτομα χλωρίου, επομένως η ατομικότητα του χλωρίου είναι <span class='text-amber-300 underline decoration-dotted underline-offset-4'>2</span>, ενώ το μόριο του όζοντος αποτελείται από <span class='text-amber-300 underline decoration-dotted underline-offset-4'>τρία</span> άτομα οξυγόνου, επομένως η ατομικότητα του όζοντος είναι 3.</p></div>"
  },
  {
    "chapterId": "chapter-5",
    "q": "8. Το προσομοίωμα αναπαριστά το μόριο της ακετόνης (acetone), που χρησιμοποιείται ως διαλυτικό της βαφής των νυχιών. Με γκρι χρώμα αναπαρίσταται το άτομο του άνθρακα, με κόκκινο το άτομο του οξυγόνου και με λευκό τα άτομα του υδρογόνου. Να παρατηρήσετε το προσομοίωμα και στη συνέχεια, κάνοντας σύγκριση με τα προσομοιώματα του βιβλίου, να απαντήσετε στις ακόλουθες ερωτήσεις:<br>α. Το προσομοίωμα αναπαριστά μόριο χημικής ένωσης ή χημικού στοιχείου;<br>β. Από ποια άτομα και από πόσα από το καθένα αποτελείται το μόριο;<img src='/images/bGymnasiou/acetone.svg' alt='Προσομοίωμα μορίου ακετόνης' class='block mx-auto my-4 w-full rounded-xl bg-white p-2' style='max-width:220px'>",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p><span class='text-white'>α.</span> Το προσομοίωμα αναπαριστά μόριο χημικής ένωσης, γιατί αποτελείται από άτομα διαφορετικών στοιχείων.</p><p><span class='text-white'>β.</span> Το μόριο της ακετόνης αποτελείται από 3 άτομα άνθρακα, 6 άτομα υδρογόνου και 1 άτομο οξυγόνου (μοριακός τύπος C<sub>3</sub>H<sub>6</sub>O).</p></div>"
  },
  {
    "chapterId": "chapter-5",
    "q": "9. Να συμπληρώσετε τον εννοιολογικό χάρτη.<div class='my-3 text-sm'><div class='text-sky-200 italic font-normal'>Τα υλικά σώματα αποτελούνται από</div><div class='inline-block border border-sky-400/60 rounded-lg px-3 py-1 my-1 font-bold'><span class='text-white/60 font-normal'>(1)</span> ……………</div><div class='text-sky-200 italic font-normal'>↓ τα οποία, με βάση την ατομική θεωρία του Dalton, …</div><div class='inline-block border border-sky-400/60 rounded-lg px-3 py-1 my-1 font-bold'><span class='text-white/60 font-normal'>(2)</span> ……………</div><div class='text-sky-200 italic font-normal'>↓ Συνδυάζονται μεταξύ τους και δημιουργούν</div><div class='inline-block border border-sky-400/60 rounded-lg px-3 py-1 my-1 font-bold'><span class='text-white/60 font-normal'>(3)</span> ……………</div><div class='text-sky-200 italic font-normal'>↓ τα οποία είναι</div><div class='inline-block border border-sky-400/60 rounded-lg px-3 py-1 my-1 font-bold'><span class='text-white/60 font-normal'>(4)</span> ……………</div><div class='text-sky-200 italic font-normal'>↓ Όταν αποτελούνται από όμοια άτομα, ονομάζονται</div><div class='inline-block border border-sky-400/60 rounded-lg px-3 py-1 my-1 font-bold'><span class='text-white/60 font-normal'>(5)</span> ……………</div><div class='text-sky-200 italic font-normal'>↓ Όταν αποτελούνται από διαφορετικά άτομα, ονομάζονται</div><div class='inline-block border border-sky-400/60 rounded-lg px-3 py-1 my-1 font-bold'><span class='text-white/60 font-normal'>(6)</span> ……………</div></div>",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><div class='my-3 text-sm'><div class='text-sky-200 italic font-normal'>Τα υλικά σώματα αποτελούνται από</div><div class='inline-block border border-sky-400/60 rounded-lg px-3 py-1 my-1 font-bold'><span class='text-white/60 font-normal'>(1)</span> <span class='text-amber-300'>άτομα</span></div><div class='text-sky-200 italic font-normal'>↓ τα οποία, με βάση την ατομική θεωρία του Dalton, …</div><div class='inline-block border border-sky-400/60 rounded-lg px-3 py-1 my-1 font-bold'><span class='text-white/60 font-normal'>(2)</span> <span class='text-amber-300'><ol class='list-decimal ml-5 space-y-1'><li>Τα στοιχεία αποτελούνται από εξαιρετικά μικρά σωματίδια, που ονομάζονται άτομα.</li><li>Τα άτομα ενός συγκεκριμένου στοιχείου είναι ίδια σε μέγεθος, μάζα και άλλες ιδιότητες. Τα άτομα διαφορετικών στοιχείων διαφέρουν σε μέγεθος, μάζα και άλλες ιδιότητες.</li><li>Τα άτομα δεν μπορούν να υποδιαιρεθούν, να δημιουργηθούν ή να καταστραφούν κατά τα χημικά φαινόμενα.</li><li>Άτομα διαφορετικών στοιχείων συνδυάζονται σε απλές ακέραιες αναλογίες για να σχηματίσουν χημικές ενώσεις.</li><li>Στις χημικές αντιδράσεις τα άτομα συνδυάζονται, διαχωρίζονται ή αναδιατάσσονται.</li></ol></span></div><div class='text-sky-200 italic font-normal'>↓ Συνδυάζονται μεταξύ τους και δημιουργούν</div><div class='inline-block border border-sky-400/60 rounded-lg px-3 py-1 my-1 font-bold'><span class='text-white/60 font-normal'>(3)</span> <span class='text-amber-300'>μόρια</span></div><div class='text-sky-200 italic font-normal'>↓ τα οποία είναι</div><div class='inline-block border border-sky-400/60 rounded-lg px-3 py-1 my-1 font-bold'><span class='text-white/60 font-normal'>(4)</span> <span class='text-amber-300'>η μικρότερη ποσότητα υλικού σώματος που μπορεί να υπάρξει ελεύθερη στη φύση και δημιουργείται από τον συνδυασμό ατόμων</span></div><div class='text-sky-200 italic font-normal'>↓ Όταν αποτελούνται από όμοια άτομα, ονομάζονται</div><div class='inline-block border border-sky-400/60 rounded-lg px-3 py-1 my-1 font-bold'><span class='text-white/60 font-normal'>(5)</span> <span class='text-amber-300'>μόρια χημικών στοιχείων</span></div><div class='text-sky-200 italic font-normal'>↓ Όταν αποτελούνται από διαφορετικά άτομα, ονομάζονται</div><div class='inline-block border border-sky-400/60 rounded-lg px-3 py-1 my-1 font-bold'><span class='text-white/60 font-normal'>(6)</span> <span class='text-amber-300'>μόρια χημικών ενώσεων</span></div></div></div>"
  },
  {
    "chapterId": "chapter-6",
    "q": "1. α. Πώς συμβολίζονται τα άτομα των χημικών στοιχείων;<br>β. Πώς συμβολίζονται τα μόρια των χημικών στοιχείων; Να γράψετε ένα παράδειγμα.",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p><span class='text-white'>α.</span> Τα άτομα των χημικών στοιχείων συμβολίζονται με ένα κεφαλαίο γράμμα, το οποίο σε ορισμένες περιπτώσεις συνοδεύεται από ένα δεύτερο, πεζό γράμμα. Τα γράμματα αυτά είναι συνήθως τα αρχικά του (λατινικού ή ελληνικού) ονόματος του στοιχείου, π.χ. H (υδρογόνο), C (άνθρακας), Cl (χλώριο), Ca (ασβέστιο), Na (νάτριο, από το λατινικό natrium).</p><p><span class='text-white'>β.</span> Τα μόρια των χημικών στοιχείων συμβολίζονται με το σύμβολο του ατόμου και έναν αριθμό ως δείκτη κάτω δεξιά, ο οποίος δηλώνει τον αριθμό των ατόμων που συγκροτούν το μόριο του στοιχείου (ατομικότητα). Παραδείγματα: H<sub>2</sub>, O<sub>2</sub>, Cl<sub>2</sub>, O<sub>3</sub>, P<sub>4</sub>.</p></div>"
  },
  {
    "chapterId": "chapter-6",
    "q": "2. Πώς συμβολίζονται τα μόρια των χημικών ενώσεων; Να γράψετε ένα παράδειγμα.",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p>Τα μόρια των χημικών ενώσεων συμβολίζονται με τον μοριακό τύπο: γράφουμε τα σύμβολα των ατόμων των στοιχείων που αποτελούν την ένωση και το καθένα έχει έναν αριθμό ως δείκτη κάτω δεξιά, ο οποίος δηλώνει τον αριθμό των ατόμων του στοιχείου αυτού στο μόριο της ένωσης (ο δείκτης 1 δεν γράφεται).</p><p>Παράδειγμα: H<sub>2</sub>O· το μόριο του νερού αποτελείται από 2 άτομα υδρογόνου και 1 άτομο οξυγόνου. Άλλα παραδείγματα: CO<sub>2</sub>, NH<sub>3</sub>.</p></div>"
  },
  {
    "chapterId": "chapter-6",
    "q": "3. Να συμπληρώσετε τα κενά με την κατάλληλη λέξη, σύμβολο ή τύπο:<br>α. Ο μοριακός τύπος του νιτρικού οξέος, HNO<sub>3</sub>, μας πληροφορεί ότι το <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> αποτελείται από <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>, <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> και <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>.<br>β. Ο μοριακός τύπος της αιθανόλης (οινόπνευμα), C<sub>2</sub>H<sub>6</sub>O, μας πληροφορεί ότι το <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> αποτελείται από <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> άτομο <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>, <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> και <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>.",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p>α. Ο μοριακός τύπος του νιτρικού οξέος, HNO<sub>3</sub>, μας πληροφορεί ότι το <span class='text-amber-300 underline decoration-dotted underline-offset-4'>μόριο</span> αποτελείται από <span class='text-amber-300 underline decoration-dotted underline-offset-4'>1 άτομο αζώτου</span>, <span class='text-amber-300 underline decoration-dotted underline-offset-4'>1 άτομο υδρογόνου</span> και <span class='text-amber-300 underline decoration-dotted underline-offset-4'>3 άτομα οξυγόνου</span>.</p><p>β. Ο μοριακός τύπος της αιθανόλης (οινόπνευμα), C<sub>2</sub>H<sub>6</sub>O, μας πληροφορεί ότι το <span class='text-amber-300 underline decoration-dotted underline-offset-4'>μόριο</span> αποτελείται από <span class='text-amber-300 underline decoration-dotted underline-offset-4'>1</span> άτομο <span class='text-amber-300 underline decoration-dotted underline-offset-4'>οξυγόνου</span>, <span class='text-amber-300 underline decoration-dotted underline-offset-4'>2 άτομα άνθρακα</span> και <span class='text-amber-300 underline decoration-dotted underline-offset-4'>6 άτομα υδρογόνου</span>.</p></div>"
  },
  {
    "chapterId": "chapter-6",
    "q": "4. Να συμπληρώσετε τον μοριακό τύπο της χημικής ένωσης:<br>α. Διυδρογόνο θειίδιο (υδρόθειο): <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>, αν γνωρίζετε ότι το μόριό του αποτελείται από 2 άτομα υδρογόνου και 1 άτομο θείου, και πρώτο γράφεται το υδρογόνο.<br>β. Διάζωτο πεντοξείδιο (πεντοξείδιο του αζώτου): <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>, αν γνωρίζετε ότι το μόριό του αποτελείται από 5 άτομα οξυγόνου και 2 άτομα αζώτου, και πρώτο γράφεται το άζωτο.",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p>α. Διυδρογόνο θειίδιο (υδρόθειο): <span class='text-amber-300 underline decoration-dotted underline-offset-4'>H<sub>2</sub>S</span>, αν γνωρίζετε ότι το μόριό του αποτελείται από 2 άτομα υδρογόνου και 1 άτομο θείου, και πρώτο γράφεται το υδρογόνο.</p><p>β. Διάζωτο πεντοξείδιο (πεντοξείδιο του αζώτου): <span class='text-amber-300 underline decoration-dotted underline-offset-4'>N<sub>2</sub>O<sub>5</sub></span>, αν γνωρίζετε ότι το μόριό του αποτελείται από 5 άτομα οξυγόνου και 2 άτομα αζώτου, και πρώτο γράφεται το άζωτο.</p></div>"
  },
  {
    "chapterId": "chapter-6",
    "q": "6. Να συμβουλευτείτε τα χρώματα των προσομοιωμάτων στην ενότητα 5 και στη συνέχεια να γράψετε τον μοριακό τύπο της χημικής ένωσης που αντιστοιχεί στο καθένα από τα προσομοιώματα του ακόλουθου πίνακα.<div class='overflow-x-auto my-4'><table class='border-collapse text-center text-sm bg-white/5 rounded-xl overflow-hidden w-full'><thead class='bg-white/10'><tr><th class='py-3 px-3 font-semibold'>1ο</th><th class='py-3 px-3 font-semibold'>2ο</th><th class='py-3 px-3 font-semibold'>3ο</th><th class='py-3 px-3 font-semibold'>4ο</th><th class='py-3 px-3 font-semibold'>5ο</th></tr></thead><tbody><tr><td class='py-4 px-3'><span style='display:inline-block;width:18px;height:18px;border-radius:50%;background:white;border:1px solid #aaa;vertical-align:middle;margin:2px;'></span><span style='display:inline-block;width:10px;height:2px;background:#888;vertical-align:middle;'></span><span style='display:inline-block;width:24px;height:24px;border-radius:50%;background:#5B2D8E;vertical-align:middle;margin:2px;'></span><br><small class='text-white/60'>υδροϊώδιο</small></td><td class='py-4 px-3'><span style='display:inline-block;width:20px;height:20px;border-radius:50%;background:#e53e3e;vertical-align:middle;margin:2px;'></span><span style='display:inline-block;width:6px;height:2px;background:#888;vertical-align:middle;'></span><span style='display:inline-block;width:22px;height:22px;border-radius:50%;background:#718096;vertical-align:middle;margin:2px;'></span><span style='display:inline-block;width:6px;height:2px;background:#888;vertical-align:middle;'></span><span style='display:inline-block;width:20px;height:20px;border-radius:50%;background:#e53e3e;vertical-align:middle;margin:2px;'></span><br><small class='text-white/60'>άνθρακας διοξείδιο</small></td><td class='py-4 px-3'><span style='display:inline-block;width:16px;height:16px;border-radius:50%;background:white;border:1px solid #aaa;vertical-align:middle;margin:2px;'></span><span style='display:inline-block;width:6px;height:2px;background:#888;vertical-align:middle;'></span><span style='display:inline-block;width:22px;height:22px;border-radius:50%;background:#ECC94B;vertical-align:middle;margin:2px;'></span><span style='display:inline-block;width:6px;height:2px;background:#888;vertical-align:middle;'></span><span style='display:inline-block;width:16px;height:16px;border-radius:50%;background:white;border:1px solid #aaa;vertical-align:middle;margin:2px;'></span><br><small class='text-white/60'>διυδρογόνο θειίδιο</small></td><td class='py-4 px-3'><span style='display:inline-block;width:20px;height:20px;border-radius:50%;background:#38a169;vertical-align:middle;margin:1px;'></span><span style='display:inline-block;width:20px;height:20px;border-radius:50%;background:#38a169;vertical-align:middle;margin:1px;'></span><span style='display:inline-block;width:22px;height:22px;border-radius:50%;background:#718096;vertical-align:middle;margin:1px;'></span><span style='display:inline-block;width:20px;height:20px;border-radius:50%;background:#38a169;vertical-align:middle;margin:1px;'></span><span style='display:inline-block;width:14px;height:14px;border-radius:50%;background:white;border:1px solid #aaa;vertical-align:middle;margin:1px;'></span><br><small class='text-white/60'>χλωροφόρμιο</small></td><td class='py-4 px-3'><span style='display:inline-block;width:20px;height:20px;border-radius:50%;background:#e53e3e;vertical-align:middle;margin:2px;'></span><span style='display:inline-block;width:6px;height:2px;background:#888;vertical-align:middle;'></span><span style='display:inline-block;width:22px;height:22px;border-radius:50%;background:#3182ce;vertical-align:middle;margin:2px;'></span><span style='display:inline-block;width:6px;height:2px;background:#888;vertical-align:middle;'></span><span style='display:inline-block;width:20px;height:20px;border-radius:50%;background:#e53e3e;vertical-align:middle;margin:2px;'></span><br><small class='text-white/60'>άζωτο διοξείδιο</small></td></tr><tr class='text-xs text-white/50'><td class='pb-2'>λευκό=H, μωβ=I</td><td class='pb-2'>κόκκ.=O, γκρι=C</td><td class='pb-2'>λευκό=H, κίτρ.=S</td><td class='pb-2'>γκρι=C, πράσ.=Cl, λευκό=H</td><td class='pb-2'>κόκκ.=O, μπλε=N</td></tr></tbody></table></div>",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><thead class='bg-white/10'><tr><th class='py-2 px-3 font-semibold text-white'>Προσομοίωμα</th><th class='py-2 px-3 font-semibold text-white'>Χημική ένωση</th><th class='py-2 px-3 font-semibold text-white'>Μοριακός τύπος</th></tr></thead><tbody class='divide-y divide-white/10'><tr><td class='py-2 px-3 font-normal text-purple-100'>1ο</td><td class='py-2 px-3 font-normal text-purple-100'>Υδροϊώδιο</td><td class='py-2 px-3 font-bold text-emerald-400'>HI</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>2ο</td><td class='py-2 px-3 font-normal text-purple-100'>Άνθρακας διοξείδιο (διοξείδιο του άνθρακα)</td><td class='py-2 px-3 font-bold text-emerald-400'>CO<sub>2</sub></td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>3ο</td><td class='py-2 px-3 font-normal text-purple-100'>Διυδρογόνο θειίδιο (υδρόθειο)</td><td class='py-2 px-3 font-bold text-emerald-400'>H<sub>2</sub>S</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>4ο</td><td class='py-2 px-3 font-normal text-purple-100'>Χλωροφόρμιο</td><td class='py-2 px-3 font-bold text-emerald-400'>CHCl<sub>3</sub></td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>5ο</td><td class='py-2 px-3 font-normal text-purple-100'>Άζωτο διοξείδιο (διοξείδιο του αζώτου)</td><td class='py-2 px-3 font-bold text-emerald-400'>NO<sub>2</sub></td></tr></tbody></table></div></div>"
  },
  {
    "chapterId": "chapter-6",
    "q": "7. Να συμπληρώσετε τα κενά με το όνομα του στοιχείου, αν δίνεται το σύμβολό του, ή με το σύμβολο, αν δίνεται το όνομά του.<div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><thead class='bg-white/10'><tr><th class='py-2 px-3 font-semibold text-white'>Στοιχείο</th><th class='py-2 px-3 font-semibold text-white'>Σύμβολο</th><th class='py-2 px-3 font-semibold text-white'>Στοιχείο</th><th class='py-2 px-3 font-semibold text-white'>Σύμβολο</th><th class='py-2 px-3 font-semibold text-white'>Στοιχείο</th><th class='py-2 px-3 font-semibold text-white'>Σύμβολο</th></tr></thead><tbody class='divide-y divide-white/10'><tr><td class='py-2 px-3 font-normal text-purple-100'>υδρογόνο</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>θείο</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>κάλιο</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>οξυγόνο</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>P</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>Na</td></tr><tr><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>N</td><td class='py-2 px-3 font-normal text-purple-100'>χλώριο</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>υδράργυρος</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>C</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>Br</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>Al</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>χαλκός</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>I</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>Ca</td></tr><tr><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>Fe</td><td class='py-2 px-3 font-normal text-purple-100'>μαγνήσιο</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>πυρίτιο</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr></tbody></table></div>",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><thead class='bg-white/10'><tr><th class='py-2 px-3 font-semibold text-white'>Στοιχείο</th><th class='py-2 px-3 font-semibold text-white'>Σύμβολο</th><th class='py-2 px-3 font-semibold text-white'>Στοιχείο</th><th class='py-2 px-3 font-semibold text-white'>Σύμβολο</th><th class='py-2 px-3 font-semibold text-white'>Στοιχείο</th><th class='py-2 px-3 font-semibold text-white'>Σύμβολο</th></tr></thead><tbody class='divide-y divide-white/10'><tr><td class='py-2 px-3 font-normal text-purple-100'>υδρογόνο</td><td class='py-2 px-3 font-bold text-emerald-400'>H</td><td class='py-2 px-3 font-normal text-purple-100'>θείο</td><td class='py-2 px-3 font-bold text-emerald-400'>S</td><td class='py-2 px-3 font-normal text-purple-100'>κάλιο</td><td class='py-2 px-3 font-bold text-emerald-400'>K</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>οξυγόνο</td><td class='py-2 px-3 font-bold text-emerald-400'>O</td><td class='py-2 px-3 font-bold text-emerald-400'>φωσφόρος</td><td class='py-2 px-3 font-normal text-purple-100'>P</td><td class='py-2 px-3 font-bold text-emerald-400'>νάτριο</td><td class='py-2 px-3 font-normal text-purple-100'>Na</td></tr><tr><td class='py-2 px-3 font-bold text-emerald-400'>άζωτο</td><td class='py-2 px-3 font-normal text-purple-100'>N</td><td class='py-2 px-3 font-normal text-purple-100'>χλώριο</td><td class='py-2 px-3 font-bold text-emerald-400'>Cl</td><td class='py-2 px-3 font-normal text-purple-100'>υδράργυρος</td><td class='py-2 px-3 font-bold text-emerald-400'>Hg</td></tr><tr><td class='py-2 px-3 font-bold text-emerald-400'>άνθρακας</td><td class='py-2 px-3 font-normal text-purple-100'>C</td><td class='py-2 px-3 font-bold text-emerald-400'>βρώμιο</td><td class='py-2 px-3 font-normal text-purple-100'>Br</td><td class='py-2 px-3 font-bold text-emerald-400'>αργίλιο</td><td class='py-2 px-3 font-normal text-purple-100'>Al</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>χαλκός</td><td class='py-2 px-3 font-bold text-emerald-400'>Cu</td><td class='py-2 px-3 font-bold text-emerald-400'>ιώδιο</td><td class='py-2 px-3 font-normal text-purple-100'>I</td><td class='py-2 px-3 font-bold text-emerald-400'>ασβέστιο</td><td class='py-2 px-3 font-normal text-purple-100'>Ca</td></tr><tr><td class='py-2 px-3 font-bold text-emerald-400'>σίδηρος</td><td class='py-2 px-3 font-normal text-purple-100'>Fe</td><td class='py-2 px-3 font-normal text-purple-100'>μαγνήσιο</td><td class='py-2 px-3 font-bold text-emerald-400'>Mg</td><td class='py-2 px-3 font-normal text-purple-100'>πυρίτιο</td><td class='py-2 px-3 font-bold text-emerald-400'>Si</td></tr></tbody></table></div></div>"
  },
  {
    "chapterId": "chapter-6",
    "q": "8. Να αντιστοιχίσετε κάθε στοιχείο της στήλης Α στο σύμβολο του ατόμου του στη στήλη Β.<div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><thead class='bg-white/10'><tr><th class='py-2 px-3 font-semibold text-white'>Α</th><th class='py-2 px-3 font-semibold text-white'>Β</th></tr></thead><tbody class='divide-y divide-white/10'><tr><td class='py-2 px-3 font-normal text-purple-100'>1. θείο</td><td class='py-2 px-3 font-normal text-purple-100'>Β1. F</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>2. ασβέστιο</td><td class='py-2 px-3 font-normal text-purple-100'>Β2. Zn</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>3. άργυρος</td><td class='py-2 px-3 font-normal text-purple-100'>Β3. Pb</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>4. φθόριο</td><td class='py-2 px-3 font-normal text-purple-100'>Β4. Ag</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>5. ψευδάργυρος</td><td class='py-2 px-3 font-normal text-purple-100'>Β5. Au</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>6. χρυσός</td><td class='py-2 px-3 font-normal text-purple-100'>Β6. Ca</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>7. μόλυβδος</td><td class='py-2 px-3 font-normal text-purple-100'>Β7. S</td></tr></tbody></table></div>",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><thead class='bg-white/10'><tr><th class='py-2 px-3 font-semibold text-white'>Στοιχείο</th><th class='py-2 px-3 font-semibold text-white'>Αντιστοίχιση</th></tr></thead><tbody class='divide-y divide-white/10'><tr><td class='py-2 px-3 font-normal text-purple-100'>1. θείο</td><td class='py-2 px-3 font-bold text-emerald-400'>Α1 → Β7 (S)</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>2. ασβέστιο</td><td class='py-2 px-3 font-bold text-emerald-400'>Α2 → Β6 (Ca)</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>3. άργυρος</td><td class='py-2 px-3 font-bold text-emerald-400'>Α3 → Β4 (Ag)</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>4. φθόριο</td><td class='py-2 px-3 font-bold text-emerald-400'>Α4 → Β1 (F)</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>5. ψευδάργυρος</td><td class='py-2 px-3 font-bold text-emerald-400'>Α5 → Β2 (Zn)</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>6. χρυσός</td><td class='py-2 px-3 font-bold text-emerald-400'>Α6 → Β5 (Au)</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>7. μόλυβδος</td><td class='py-2 px-3 font-bold text-emerald-400'>Α7 → Β3 (Pb)</td></tr></tbody></table></div><p class='text-purple-200 font-normal text-sm'>Ορισμένα σύμβολα προέρχονται από τα λατινικά ονόματα των στοιχείων: Ag από το argentum (άργυρος), Au από το aurum (χρυσός), Pb από το plumbum (μόλυβδος).</p></div>"
  },
  {
    "chapterId": "chapter-6",
    "q": "9. Να συμπληρώσετε τα ονόματα των χημικών στοιχείων και των χημικών ενώσεων των οποίων δίνονται οι χημικοί τύποι και να τα χαρακτηρίσετε στην τελευταία στήλη ως μονοατομικό (διατομικό κ.λπ.) στοιχείο ή χημική ένωση.<div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><thead class='bg-white/10'><tr><th class='py-2 px-3 font-semibold text-white'></th><th class='py-2 px-3 font-semibold text-white'>Χημικός τύπος</th><th class='py-2 px-3 font-semibold text-white'>Όνομα</th><th class='py-2 px-3 font-semibold text-white'>Χαρακτηρισμός</th></tr></thead><tbody class='divide-y divide-white/10'><tr><td class='py-2 px-3 font-semibold text-white'>1</td><td class='py-2 px-3 font-normal text-purple-100'>H<sub>2</sub>O</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>2</td><td class='py-2 px-3 font-normal text-purple-100'>HCl</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>3</td><td class='py-2 px-3 font-normal text-purple-100'>CO</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>4</td><td class='py-2 px-3 font-normal text-purple-100'>N<sub>2</sub></td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>5</td><td class='py-2 px-3 font-normal text-purple-100'>CO<sub>2</sub></td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>6</td><td class='py-2 px-3 font-normal text-purple-100'>NH<sub>3</sub></td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>7</td><td class='py-2 px-3 font-normal text-purple-100'>S<sub>6</sub></td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>8</td><td class='py-2 px-3 font-normal text-purple-100'>P<sub>4</sub></td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>9</td><td class='py-2 px-3 font-normal text-purple-100'>CH<sub>4</sub></td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>10</td><td class='py-2 px-3 font-normal text-purple-100'>O<sub>3</sub></td><td class='py-2 px-3 font-normal text-purple-100'>όζον</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>11</td><td class='py-2 px-3 font-normal text-purple-100'>Cl<sub>2</sub></td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr></tbody></table></div>",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><thead class='bg-white/10'><tr><th class='py-2 px-3 font-semibold text-white'></th><th class='py-2 px-3 font-semibold text-white'>Χημικός τύπος</th><th class='py-2 px-3 font-semibold text-white'>Όνομα</th><th class='py-2 px-3 font-semibold text-white'>Χαρακτηρισμός</th></tr></thead><tbody class='divide-y divide-white/10'><tr><td class='py-2 px-3 font-semibold text-white'>1</td><td class='py-2 px-3 font-normal text-purple-100'>H<sub>2</sub>O</td><td class='py-2 px-3 font-bold text-emerald-400'>νερό</td><td class='py-2 px-3 font-bold text-emerald-400'>χημική ένωση</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>2</td><td class='py-2 px-3 font-normal text-purple-100'>HCl</td><td class='py-2 px-3 font-bold text-emerald-400'>υδρογόνο χλωρίδιο (υδροχλώριο)</td><td class='py-2 px-3 font-bold text-emerald-400'>χημική ένωση</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>3</td><td class='py-2 px-3 font-normal text-purple-100'>CO</td><td class='py-2 px-3 font-bold text-emerald-400'>άνθρακας μονοξείδιο (μονοξείδιο του άνθρακα)</td><td class='py-2 px-3 font-bold text-emerald-400'>χημική ένωση</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>4</td><td class='py-2 px-3 font-normal text-purple-100'>N<sub>2</sub></td><td class='py-2 px-3 font-bold text-emerald-400'>άζωτο</td><td class='py-2 px-3 font-bold text-emerald-400'>διατομικό στοιχείο</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>5</td><td class='py-2 px-3 font-normal text-purple-100'>CO<sub>2</sub></td><td class='py-2 px-3 font-bold text-emerald-400'>άνθρακας διοξείδιο (διοξείδιο του άνθρακα)</td><td class='py-2 px-3 font-bold text-emerald-400'>χημική ένωση</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>6</td><td class='py-2 px-3 font-normal text-purple-100'>NH<sub>3</sub></td><td class='py-2 px-3 font-bold text-emerald-400'>αμμωνία</td><td class='py-2 px-3 font-bold text-emerald-400'>χημική ένωση</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>7</td><td class='py-2 px-3 font-normal text-purple-100'>S<sub>6</sub></td><td class='py-2 px-3 font-bold text-emerald-400'>θείο</td><td class='py-2 px-3 font-bold text-emerald-400'>εξατομικό στοιχείο</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>8</td><td class='py-2 px-3 font-normal text-purple-100'>P<sub>4</sub></td><td class='py-2 px-3 font-bold text-emerald-400'>φωσφόρος</td><td class='py-2 px-3 font-bold text-emerald-400'>τετρατομικό στοιχείο</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>9</td><td class='py-2 px-3 font-normal text-purple-100'>CH<sub>4</sub></td><td class='py-2 px-3 font-bold text-emerald-400'>μεθάνιο</td><td class='py-2 px-3 font-bold text-emerald-400'>χημική ένωση</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>10</td><td class='py-2 px-3 font-normal text-purple-100'>O<sub>3</sub></td><td class='py-2 px-3 font-normal text-purple-100'>όζον</td><td class='py-2 px-3 font-bold text-emerald-400'>τριατομικό στοιχείο</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>11</td><td class='py-2 px-3 font-normal text-purple-100'>Cl<sub>2</sub></td><td class='py-2 px-3 font-bold text-emerald-400'>χλώριο</td><td class='py-2 px-3 font-bold text-emerald-400'>διατομικό στοιχείο</td></tr></tbody></table></div><p class='text-purple-200 font-normal text-sm'>Σε παρένθεση δίνεται και το παραδοσιακό όνομα της ένωσης.</p></div>"
  },
  {
    "chapterId": "chapter-7",
    "q": "2. Ο E. Rutherford βομβάρδισε με σωματίδια α ένα λεπτό φύλλο χρυσού και παρατήρησε ότι η πλειονότητα των σωματιδίων διαπερνούσαν το φύλλο χρυσού, ορισμένα διαπερνούσαν το φύλλο αλλά παρουσίαζαν μια μικρή εκτροπή από την αρχική τους πορεία και λίγα εμφάνιζαν ανάκλαση.<img src='/images/bGymnasiou/ch7_q2_rutherford.jpg' alt='Το πείραμα του E. Rutherford' class='block mx-auto my-4 w-full rounded-xl bg-white p-2' style='max-width:560px'>Να συμπληρώσετε την ακόλουθη παράγραφο με την κατάλληλη λέξη:<br>Αυτή η παρατήρηση τον οδήγησε στο συμπέρασμα ότι το άτομο αποτελούνταν κυρίως από <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> και υπήρχε και μια περιοχή πολύ <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> σε μέγεθος και με πολύ μεγάλη <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>, την οποία ονόμασε <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>. Ο πυρήνας είχε <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> φορτίο και σε μεγάλη απόσταση από αυτόν περιφέρονταν τα <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> φορτισμένα <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>, με αποτέλεσμα το μεγαλύτερο μέρος του ατόμου να είναι <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>. Αυτό εξηγούσε γιατί τα περισσότερα σωματίδια <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> το φύλλο του <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>.",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p>Αυτή η παρατήρηση τον οδήγησε στο συμπέρασμα ότι το άτομο αποτελούνταν κυρίως από <span class='text-amber-300 underline decoration-dotted underline-offset-4'>κενό</span> και υπήρχε και μια περιοχή πολύ <span class='text-amber-300 underline decoration-dotted underline-offset-4'>μικρή</span> σε μέγεθος και με πολύ μεγάλη <span class='text-amber-300 underline decoration-dotted underline-offset-4'>πυκνότητα</span>, την οποία ονόμασε <span class='text-amber-300 underline decoration-dotted underline-offset-4'>πυρήνα</span>. Ο πυρήνας είχε <span class='text-amber-300 underline decoration-dotted underline-offset-4'>θετικό</span> φορτίο και σε μεγάλη απόσταση από αυτόν περιφέρονταν τα <span class='text-amber-300 underline decoration-dotted underline-offset-4'>αρνητικά</span> φορτισμένα <span class='text-amber-300 underline decoration-dotted underline-offset-4'>ηλεκτρόνια</span>, με αποτέλεσμα το μεγαλύτερο μέρος του ατόμου να είναι <span class='text-amber-300 underline decoration-dotted underline-offset-4'>κενό</span>. Αυτό εξηγούσε γιατί τα περισσότερα σωματίδια <span class='text-amber-300 underline decoration-dotted underline-offset-4'>διαπερνούσαν</span> το φύλλο του <span class='text-amber-300 underline decoration-dotted underline-offset-4'>χρυσού</span>.</p></div>"
  },
  {
    "chapterId": "chapter-7",
    "q": "3. Να αναφέρετε τα δομικά σωματίδια ενός ατόμου και τα χαρακτηριστικά τους ως προς το φορτίο, τη μάζα και τη θέση τους στο άτομο.",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p>Τα δομικά σωματίδια ενός ατόμου είναι:</p><ul class='list-disc ml-5 space-y-1'><li><span class='text-white'>Τα πρωτόνια (p):</span> είναι θετικά φορτισμένα σωματίδια με το στοιχειώδες θετικό φορτίο (+1), έχουν μάζα περίπου ίση με τη μάζα του νετρονίου και βρίσκονται στον πυρήνα.</li><li><span class='text-white'>Τα νετρόνια (n):</span> είναι ηλεκτρικά ουδέτερα σωματίδια, με μάζα περίπου ίση με τη μάζα του πρωτονίου, και βρίσκονται επίσης στον πυρήνα.</li><li><span class='text-white'>Τα ηλεκτρόνια (e):</span> είναι αρνητικά φορτισμένα σωματίδια με το στοιχειώδες αρνητικό φορτίο (−1) και έχουν αμελητέα μάζα (η μάζα του ηλεκτρονίου είναι 1.836 φορές μικρότερη από τη μάζα του πρωτονίου). Κινούνται γύρω από τον πυρήνα, σε στιβάδες.</li></ul></div>"
  },
  {
    "chapterId": "chapter-7",
    "q": "4. α. Τι εκφράζει και πώς συμβολίζεται ο ατομικός αριθμός;<br>β. Τι εκφράζει και πώς συμβολίζεται ο μαζικός αριθμός;<br>γ. Το ραδιενεργό στοιχείο ουράνιο \\({}^{235}_{92}\\mathrm{U}\\) έχει ατομικό αριθμό <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> και μαζικό αριθμό <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>, δηλαδή έχει <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> πρωτόνια, <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> ηλεκτρόνια και <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> νετρόνια. Το ισότοπό του \\({}^{237}_{92}\\mathrm{U}\\) διαφέρει από το \\({}^{235}_{92}\\mathrm{U}\\) μόνο στον αριθμό των <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> και, επειδή έχει <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>, έχει μεγαλύτερη <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>.",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p><span class='text-white'>α.</span> Ατομικός αριθμός ονομάζεται ο αριθμός των πρωτονίων που περιέχονται στον πυρήνα του ατόμου ενός στοιχείου. Συμβολίζεται με Z και γράφεται κάτω αριστερά από το σύμβολο του στοιχείου, π.χ. \\({}_{17}\\mathrm{Cl}\\).</p><p><span class='text-white'>β.</span> Μαζικός αριθμός ονομάζεται το άθροισμα του αριθμού των πρωτονίων και του αριθμού των νετρονίων που περιέχονται στον πυρήνα του ατόμου ενός στοιχείου. Συμβολίζεται με A και γράφεται πάνω αριστερά από το σύμβολο του στοιχείου, π.χ. \\({}^{35}_{17}\\mathrm{Cl}\\). Ισχύει: A = Z + αριθμός νετρονίων.</p><p>γ. Το ραδιενεργό στοιχείο ουράνιο \\({}^{235}_{92}\\mathrm{U}\\) έχει ατομικό αριθμό <span class='text-amber-300 underline decoration-dotted underline-offset-4'>92</span> και μαζικό αριθμό <span class='text-amber-300 underline decoration-dotted underline-offset-4'>235</span>, δηλαδή έχει <span class='text-amber-300 underline decoration-dotted underline-offset-4'>92</span> πρωτόνια, <span class='text-amber-300 underline decoration-dotted underline-offset-4'>92</span> ηλεκτρόνια και <span class='text-amber-300 underline decoration-dotted underline-offset-4'>143</span> νετρόνια. Το ισότοπό του \\({}^{237}_{92}\\mathrm{U}\\) διαφέρει από το \\({}^{235}_{92}\\mathrm{U}\\) μόνο στον αριθμό των <span class='text-amber-300 underline decoration-dotted underline-offset-4'>νετρονίων</span> και, επειδή έχει <span class='text-amber-300 underline decoration-dotted underline-offset-4'>μεγαλύτερο μαζικό αριθμό</span>, έχει μεγαλύτερη <span class='text-amber-300 underline decoration-dotted underline-offset-4'>μάζα</span>.</p></div>"
  },
  {
    "chapterId": "chapter-7",
    "q": "5. Να συμπληρώσετε τα κενά του παρακάτω πίνακα.<div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><thead class='bg-white/10'><tr><th class='py-2 px-3 font-semibold text-white'>Στοιχείο</th><th class='py-2 px-3 font-semibold text-white'>Σύμβολο</th><th class='py-2 px-3 font-semibold text-white'>Ατομικός αριθμός</th><th class='py-2 px-3 font-semibold text-white'>Μαζικός αριθμός</th><th class='py-2 px-3 font-semibold text-white'>Αριθμός πρωτονίων</th><th class='py-2 px-3 font-semibold text-white'>Αριθμός ηλεκτρονίων</th><th class='py-2 px-3 font-semibold text-white'>Αριθμός νετρονίων</th></tr></thead><tbody class='divide-y divide-white/10'><tr><td class='py-2 px-3 font-semibold text-white'>ΧΛΩΡΙΟ</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>17</td><td class='py-2 px-3 font-normal text-purple-100'>18</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>ΑΖΩΤΟ</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>7</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>7</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>ΜΑΓΝΗΣΙΟ</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>24</td><td class='py-2 px-3 font-normal text-purple-100'>12</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>ΑΡΓΙΛΙΟ</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>13</td><td class='py-2 px-3 font-normal text-purple-100'>14</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>ΠΥΡΙΤΙΟ</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>14</td><td class='py-2 px-3 font-normal text-purple-100'>28</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>ΣΙΔΗΡΟΣ</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>56</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>30</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>ΒΡΩΜΙΟ</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>80</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>35</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr></tbody></table></div>",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><thead class='bg-white/10'><tr><th class='py-2 px-3 font-semibold text-white'>Στοιχείο</th><th class='py-2 px-3 font-semibold text-white'>Σύμβολο</th><th class='py-2 px-3 font-semibold text-white'>Ατομικός αριθμός</th><th class='py-2 px-3 font-semibold text-white'>Μαζικός αριθμός</th><th class='py-2 px-3 font-semibold text-white'>Αριθμός πρωτονίων</th><th class='py-2 px-3 font-semibold text-white'>Αριθμός ηλεκτρονίων</th><th class='py-2 px-3 font-semibold text-white'>Αριθμός νετρονίων</th></tr></thead><tbody class='divide-y divide-white/10'><tr><td class='py-2 px-3 font-semibold text-white'>ΧΛΩΡΙΟ</td><td class='py-2 px-3 font-bold text-emerald-400'>Cl</td><td class='py-2 px-3 font-bold text-emerald-400'>17</td><td class='py-2 px-3 font-bold text-emerald-400'>35</td><td class='py-2 px-3 font-bold text-emerald-400'>17</td><td class='py-2 px-3 font-normal text-purple-100'>17</td><td class='py-2 px-3 font-normal text-purple-100'>18</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>ΑΖΩΤΟ</td><td class='py-2 px-3 font-bold text-emerald-400'>N</td><td class='py-2 px-3 font-normal text-purple-100'>7</td><td class='py-2 px-3 font-bold text-emerald-400'>14</td><td class='py-2 px-3 font-bold text-emerald-400'>7</td><td class='py-2 px-3 font-bold text-emerald-400'>7</td><td class='py-2 px-3 font-normal text-purple-100'>7</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>ΜΑΓΝΗΣΙΟ</td><td class='py-2 px-3 font-bold text-emerald-400'>Mg</td><td class='py-2 px-3 font-bold text-emerald-400'>12</td><td class='py-2 px-3 font-normal text-purple-100'>24</td><td class='py-2 px-3 font-normal text-purple-100'>12</td><td class='py-2 px-3 font-bold text-emerald-400'>12</td><td class='py-2 px-3 font-bold text-emerald-400'>12</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>ΑΡΓΙΛΙΟ</td><td class='py-2 px-3 font-bold text-emerald-400'>Al</td><td class='py-2 px-3 font-bold text-emerald-400'>13</td><td class='py-2 px-3 font-bold text-emerald-400'>27</td><td class='py-2 px-3 font-bold text-emerald-400'>13</td><td class='py-2 px-3 font-normal text-purple-100'>13</td><td class='py-2 px-3 font-normal text-purple-100'>14</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>ΠΥΡΙΤΙΟ</td><td class='py-2 px-3 font-bold text-emerald-400'>Si</td><td class='py-2 px-3 font-normal text-purple-100'>14</td><td class='py-2 px-3 font-normal text-purple-100'>28</td><td class='py-2 px-3 font-bold text-emerald-400'>14</td><td class='py-2 px-3 font-bold text-emerald-400'>14</td><td class='py-2 px-3 font-bold text-emerald-400'>14</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>ΣΙΔΗΡΟΣ</td><td class='py-2 px-3 font-bold text-emerald-400'>Fe</td><td class='py-2 px-3 font-bold text-emerald-400'>26</td><td class='py-2 px-3 font-normal text-purple-100'>56</td><td class='py-2 px-3 font-bold text-emerald-400'>26</td><td class='py-2 px-3 font-bold text-emerald-400'>26</td><td class='py-2 px-3 font-normal text-purple-100'>30</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>ΒΡΩΜΙΟ</td><td class='py-2 px-3 font-bold text-emerald-400'>Br</td><td class='py-2 px-3 font-bold text-emerald-400'>35</td><td class='py-2 px-3 font-normal text-purple-100'>80</td><td class='py-2 px-3 font-bold text-emerald-400'>35</td><td class='py-2 px-3 font-normal text-purple-100'>35</td><td class='py-2 px-3 font-bold text-emerald-400'>45</td></tr></tbody></table></div><p class='text-purple-200 font-normal text-sm'>Σε ένα ουδέτερο άτομο: αριθμός πρωτονίων = αριθμός ηλεκτρονίων = Z και αριθμός νετρονίων = A − Z.</p></div>"
  },
  {
    "chapterId": "chapter-7",
    "q": "6. Το στοιχείο άζωτο έχει Ζ = 7 και Α = 14.<br>α. Να περιγράψετε τη δομή του ατόμου του αζώτου.<br>β. Να κάνετε την κατανομή των ηλεκτρονίων του αζώτου σε στιβάδες.",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p><span class='text-white'>α.</span> Το άτομο του αζώτου περιέχει 7 πρωτόνια και 7 νετρόνια (14 − 7) στον πυρήνα και 7 ηλεκτρόνια γύρω από τον πυρήνα.</p><p><span class='text-white'>β.</span> K(2) L(5)</p></div>"
  },
  {
    "chapterId": "chapter-7",
    "q": "7. Το στοιχείο χλώριο έχει Ζ = 17 και Α = 35.<br>α. Να περιγράψετε τη δομή του ατόμου του χλωρίου.<br>β. Να κάνετε την κατανομή των ηλεκτρονίων του χλωρίου σε στιβάδες.",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p><span class='text-white'>α.</span> Το άτομο του χλωρίου περιέχει 17 πρωτόνια και 18 νετρόνια (35 − 17) στον πυρήνα και 17 ηλεκτρόνια γύρω από τον πυρήνα.</p><p><span class='text-white'>β.</span> K(2) L(8) M(7)</p></div>"
  },
  {
    "chapterId": "chapter-7",
    "q": "8. Το στοιχείο κάλιο έχει Ζ = 19 και Α = 39.<br>α. Να περιγράψετε τη δομή του ατόμου του καλίου.<br>β. Να κάνετε την κατανομή των ηλεκτρονίων του καλίου σε στιβάδες.",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p><span class='text-white'>α.</span> Το άτομο του καλίου περιέχει 19 πρωτόνια και 20 νετρόνια (39 − 19) στον πυρήνα και 19 ηλεκτρόνια γύρω από τον πυρήνα.</p><p><span class='text-white'>β.</span> K(2) L(8) M(8) N(1)</p></div>"
  },
  {
    "chapterId": "chapter-7",
    "q": "9. Να συμπληρώσετε τον παρακάτω πίνακα στιβάδων, κάνοντας την κατανομή των ηλεκτρονίων για το στοιχείο κάθε γραμμής.<div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><thead class='bg-white/10'><tr><th class='py-2 px-3 font-semibold text-white'>Στοιχείο</th><th class='py-2 px-3 font-semibold text-white'>Σύμβολο</th><th class='py-2 px-3 font-semibold text-white'>Ατομικός αριθμός</th><th class='py-2 px-3 font-semibold text-white'>K</th><th class='py-2 px-3 font-semibold text-white'>L</th><th class='py-2 px-3 font-semibold text-white'>M</th></tr></thead><tbody class='divide-y divide-white/10'><tr><td class='py-2 px-3 font-semibold text-white'>ΥΔΡΟΓΟΝΟ</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>1</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'></td><td class='py-2 px-3 font-normal text-purple-100'></td></tr><tr><td class='py-2 px-3 font-semibold text-white'>ΝΕΟΝ</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>10</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'></td></tr><tr><td class='py-2 px-3 font-semibold text-white'>ΛΙΘΙΟ</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>3</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'></td></tr><tr><td class='py-2 px-3 font-semibold text-white'>ΝΑΤΡΙΟ</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>11</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>ΜΑΓΝΗΣΙΟ</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>12</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>ΑΝΘΡΑΚΑΣ</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>6</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'></td></tr><tr><td class='py-2 px-3 font-semibold text-white'>ΑΖΩΤΟ</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>7</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'></td></tr><tr><td class='py-2 px-3 font-semibold text-white'>ΘΕΙΟ</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>16</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>ΧΛΩΡΙΟ</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>17</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr></tbody></table></div>α. Ποια στοιχεία του πίνακα έχουν συμπληρωμένη την εξωτερική τους στιβάδα, δηλαδή είναι ευγενή αέρια;<br>β. Ποια στοιχεία του πίνακα έχουν την ίδια εξωτερική στιβάδα;<br>γ. Ποια στοιχεία του πίνακα έχουν 2 e στην εξωτερική στιβάδα;<br>δ. Ποια στοιχεία του πίνακα έχουν 6 e στην εξωτερική στιβάδα;",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><thead class='bg-white/10'><tr><th class='py-2 px-3 font-semibold text-white'>Στοιχείο</th><th class='py-2 px-3 font-semibold text-white'>Σύμβολο</th><th class='py-2 px-3 font-semibold text-white'>Ατομικός αριθμός</th><th class='py-2 px-3 font-semibold text-white'>K</th><th class='py-2 px-3 font-semibold text-white'>L</th><th class='py-2 px-3 font-semibold text-white'>M</th></tr></thead><tbody class='divide-y divide-white/10'><tr><td class='py-2 px-3 font-semibold text-white'>ΥΔΡΟΓΟΝΟ</td><td class='py-2 px-3 font-bold text-emerald-400'>H</td><td class='py-2 px-3 font-normal text-purple-100'>1</td><td class='py-2 px-3 font-bold text-emerald-400'>1</td><td class='py-2 px-3 font-normal text-purple-100'></td><td class='py-2 px-3 font-normal text-purple-100'></td></tr><tr><td class='py-2 px-3 font-semibold text-white'>ΝΕΟΝ</td><td class='py-2 px-3 font-bold text-emerald-400'>Ne</td><td class='py-2 px-3 font-normal text-purple-100'>10</td><td class='py-2 px-3 font-bold text-emerald-400'>2</td><td class='py-2 px-3 font-bold text-emerald-400'>8</td><td class='py-2 px-3 font-normal text-purple-100'></td></tr><tr><td class='py-2 px-3 font-semibold text-white'>ΛΙΘΙΟ</td><td class='py-2 px-3 font-bold text-emerald-400'>Li</td><td class='py-2 px-3 font-normal text-purple-100'>3</td><td class='py-2 px-3 font-bold text-emerald-400'>2</td><td class='py-2 px-3 font-bold text-emerald-400'>1</td><td class='py-2 px-3 font-normal text-purple-100'></td></tr><tr><td class='py-2 px-3 font-semibold text-white'>ΝΑΤΡΙΟ</td><td class='py-2 px-3 font-bold text-emerald-400'>Na</td><td class='py-2 px-3 font-normal text-purple-100'>11</td><td class='py-2 px-3 font-bold text-emerald-400'>2</td><td class='py-2 px-3 font-bold text-emerald-400'>8</td><td class='py-2 px-3 font-bold text-emerald-400'>1</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>ΜΑΓΝΗΣΙΟ</td><td class='py-2 px-3 font-bold text-emerald-400'>Mg</td><td class='py-2 px-3 font-normal text-purple-100'>12</td><td class='py-2 px-3 font-bold text-emerald-400'>2</td><td class='py-2 px-3 font-bold text-emerald-400'>8</td><td class='py-2 px-3 font-bold text-emerald-400'>2</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>ΑΝΘΡΑΚΑΣ</td><td class='py-2 px-3 font-bold text-emerald-400'>C</td><td class='py-2 px-3 font-normal text-purple-100'>6</td><td class='py-2 px-3 font-bold text-emerald-400'>2</td><td class='py-2 px-3 font-bold text-emerald-400'>4</td><td class='py-2 px-3 font-normal text-purple-100'></td></tr><tr><td class='py-2 px-3 font-semibold text-white'>ΑΖΩΤΟ</td><td class='py-2 px-3 font-bold text-emerald-400'>N</td><td class='py-2 px-3 font-normal text-purple-100'>7</td><td class='py-2 px-3 font-bold text-emerald-400'>2</td><td class='py-2 px-3 font-bold text-emerald-400'>5</td><td class='py-2 px-3 font-normal text-purple-100'></td></tr><tr><td class='py-2 px-3 font-semibold text-white'>ΘΕΙΟ</td><td class='py-2 px-3 font-bold text-emerald-400'>S</td><td class='py-2 px-3 font-normal text-purple-100'>16</td><td class='py-2 px-3 font-bold text-emerald-400'>2</td><td class='py-2 px-3 font-bold text-emerald-400'>8</td><td class='py-2 px-3 font-bold text-emerald-400'>6</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>ΧΛΩΡΙΟ</td><td class='py-2 px-3 font-bold text-emerald-400'>Cl</td><td class='py-2 px-3 font-normal text-purple-100'>17</td><td class='py-2 px-3 font-bold text-emerald-400'>2</td><td class='py-2 px-3 font-bold text-emerald-400'>8</td><td class='py-2 px-3 font-bold text-emerald-400'>7</td></tr></tbody></table></div><p><span class='text-white'>α.</span> Το νέον (Ne), που έχει συμπληρωμένη την εξωτερική του στιβάδα (L) με 8 ηλεκτρόνια.</p><p><span class='text-white'>β.</span> Τα Na, Mg, S και Cl έχουν εξωτερική στιβάδα την M. Τα Ne, Li, C και N έχουν εξωτερική στιβάδα την L.</p><p><span class='text-white'>γ.</span> Το Mg (μαγνήσιο).</p><p><span class='text-white'>δ.</span> Το S (θείο).</p></div>"
  },
  {
    "chapterId": "chapter-7",
    "q": "10. Να συμπληρώσετε τα ηλεκτρόνια στις στιβάδες του σχήματος για τα άτομα που αναγράφονται σε κάθε κελί.<img src='/images/bGymnasiou/ch7_q10_shells.jpg' alt='Στιβάδες των ατόμων 15P και 13Al' class='block mx-auto my-4 w-full rounded-xl bg-white p-2' style='max-width:520px'>",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p><sub>15</sub>P: K(2) L(8) M(5)</p><p><sub>13</sub>Al: K(2) L(8) M(3)</p></div>"
  },
  {
    "chapterId": "chapter-7",
    "q": "11. Να δώσετε με συντομία τους ορισμούς των όρων:<br>α. Ιόν<br>β. Ιοντική ένωση",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p><span class='text-white'>α.</span> Ιόν ονομάζεται το ηλεκτρικά φορτισμένο σωματίδιο που προκύπτει όταν ένα άτομο προσλάβει ή αποβάλει ηλεκτρόνια.</p><p><span class='text-white'>β.</span> Ιοντική ένωση ονομάζεται η ένωση που δεν αποτελείται από μόρια, αλλά από θετικά και αρνητικά ιόντα, τα οποία έλκονται και σχηματίζουν κρυστάλλους.</p></div>"
  },
  {
    "chapterId": "chapter-7",
    "q": "12. Το άτομο του ψευδαργύρου έχει στον πυρήνα του συνολικά 65 νουκλεόνια και γύρω από τον πυρήνα περιφέρονται 30 ηλεκτρόνια. Να συμπληρώσετε τα κενά:<br>Ο ψευδάργυρος έχει <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> πρωτόνια και <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> νετρόνια, έχει ατομικό αριθμό Ζ = <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> και μαζικό αριθμό Α = <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>. Το ιόν του ψευδαργύρου δημιουργείται με <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> και έχει φορτίο +2.",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p>Ο ψευδάργυρος έχει <span class='text-amber-300 underline decoration-dotted underline-offset-4'>30</span> πρωτόνια και <span class='text-amber-300 underline decoration-dotted underline-offset-4'>35</span> νετρόνια, έχει ατομικό αριθμό Ζ = <span class='text-amber-300 underline decoration-dotted underline-offset-4'>30</span> και μαζικό αριθμό Α = <span class='text-amber-300 underline decoration-dotted underline-offset-4'>65</span>. Το ιόν του ψευδαργύρου δημιουργείται με <span class='text-amber-300 underline decoration-dotted underline-offset-4'>αποβολή 2 ηλεκτρονίων</span> και έχει φορτίο +2.</p><p class='text-purple-200 font-normal text-sm'>Αφού το ουδέτερο άτομο έχει 30 ηλεκτρόνια, έχει και 30 πρωτόνια· τα νετρόνια είναι 65 − 30 = 35.</p></div>"
  },
  {
    "chapterId": "chapter-7",
    "q": "14. Να συμπληρώσετε τα κενά των πινάκων.<br>α.<div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><thead class='bg-white/10'><tr><th class='py-2 px-3 font-semibold text-white'>Στοιχείο</th><th class='py-2 px-3 font-semibold text-white'>Ατομικός αριθμός</th><th class='py-2 px-3 font-semibold text-white'>Μαζικός αριθμός</th><th class='py-2 px-3 font-semibold text-white'>Αριθμός πρωτονίων</th><th class='py-2 px-3 font-semibold text-white'>Αριθμός ηλεκτρονίων</th><th class='py-2 px-3 font-semibold text-white'>Κατανομή e σε στιβάδες</th><th class='py-2 px-3 font-semibold text-white'>Αριθμός νετρονίων</th></tr></thead><tbody class='divide-y divide-white/10'><tr><td class='py-2 px-3 font-semibold text-white'>ΘΕΙΟ</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>16</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>16</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>ΟΞΥΓΟΝΟ</td><td class='py-2 px-3 font-normal text-purple-100'>8</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>8</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>ΑΝΘΡΑΚΑΣ</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>12</td><td class='py-2 px-3 font-normal text-purple-100'>6</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>6</td></tr><tr><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>15</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>16</td></tr></tbody></table></div>β.<div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><thead class='bg-white/10'><tr><th class='py-2 px-3 font-semibold text-white'>Ιόν</th><th class='py-2 px-3 font-semibold text-white'>Ατομικός αριθμός</th><th class='py-2 px-3 font-semibold text-white'>Αριθμός πρωτονίων</th><th class='py-2 px-3 font-semibold text-white'>Αριθμός ηλεκτρονίων</th><th class='py-2 px-3 font-semibold text-white'>Κατανομή e σε στιβάδες</th><th class='py-2 px-3 font-semibold text-white'>Φορτίο ιόντος</th></tr></thead><tbody class='divide-y divide-white/10'><tr><td class='py-2 px-3 font-semibold text-white'>ΧΛΩΡΙΟΥ</td><td class='py-2 px-3 font-normal text-purple-100'>17</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>18</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>ΜΑΓΝΗΣΙΟΥ</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>12</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>+2</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>ΚΑΛΙΟΥ</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>19</td><td class='py-2 px-3 font-normal text-purple-100'>18</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>ΘΕΙΟΥ</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>16</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>−2</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>ΟΞΥΓΟΝΟΥ</td><td class='py-2 px-3 font-normal text-purple-100'>8</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-purple-100'>K(2) L(8)</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr></tbody></table></div>",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p><span class='text-white'>α.</span> </p><div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><thead class='bg-white/10'><tr><th class='py-2 px-3 font-semibold text-white'>Στοιχείο</th><th class='py-2 px-3 font-semibold text-white'>Ατομικός αριθμός</th><th class='py-2 px-3 font-semibold text-white'>Μαζικός αριθμός</th><th class='py-2 px-3 font-semibold text-white'>Αριθμός πρωτονίων</th><th class='py-2 px-3 font-semibold text-white'>Αριθμός ηλεκτρονίων</th><th class='py-2 px-3 font-semibold text-white'>Κατανομή e σε στιβάδες</th><th class='py-2 px-3 font-semibold text-white'>Αριθμός νετρονίων</th></tr></thead><tbody class='divide-y divide-white/10'><tr><td class='py-2 px-3 font-semibold text-white'>ΘΕΙΟ</td><td class='py-2 px-3 font-bold text-emerald-400'>16</td><td class='py-2 px-3 font-bold text-emerald-400'>32</td><td class='py-2 px-3 font-bold text-emerald-400'>16</td><td class='py-2 px-3 font-normal text-purple-100'>16</td><td class='py-2 px-3 font-bold text-emerald-400'>K(2) L(8) M(6)</td><td class='py-2 px-3 font-normal text-purple-100'>16</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>ΟΞΥΓΟΝΟ</td><td class='py-2 px-3 font-normal text-purple-100'>8</td><td class='py-2 px-3 font-bold text-emerald-400'>16</td><td class='py-2 px-3 font-bold text-emerald-400'>8</td><td class='py-2 px-3 font-bold text-emerald-400'>8</td><td class='py-2 px-3 font-bold text-emerald-400'>K(2) L(6)</td><td class='py-2 px-3 font-normal text-purple-100'>8</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>ΑΝΘΡΑΚΑΣ</td><td class='py-2 px-3 font-bold text-emerald-400'>6</td><td class='py-2 px-3 font-normal text-purple-100'>12</td><td class='py-2 px-3 font-normal text-purple-100'>6</td><td class='py-2 px-3 font-bold text-emerald-400'>6</td><td class='py-2 px-3 font-bold text-emerald-400'>K(2) L(4)</td><td class='py-2 px-3 font-normal text-purple-100'>6</td></tr><tr><td class='py-2 px-3 font-bold text-emerald-400'>ΦΩΣΦΟΡΟΣ (P)</td><td class='py-2 px-3 font-bold text-emerald-400'>15</td><td class='py-2 px-3 font-bold text-emerald-400'>31</td><td class='py-2 px-3 font-bold text-emerald-400'>15</td><td class='py-2 px-3 font-normal text-purple-100'>15</td><td class='py-2 px-3 font-bold text-emerald-400'>K(2) L(8) M(5)</td><td class='py-2 px-3 font-normal text-purple-100'>16</td></tr></tbody></table></div><p class='text-purple-200 font-normal text-sm'>Το στοιχείο της τελευταίας γραμμής έχει 15 ηλεκτρόνια, άρα Z = 15: είναι ο φωσφόρος, με Α = 15 + 16 = 31. Για τον άνθρακα, ο αριθμός νετρονίων είναι A − Z = 12 − 6 = 6.</p><p><span class='text-white'>β.</span> </p><div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><thead class='bg-white/10'><tr><th class='py-2 px-3 font-semibold text-white'>Ιόν</th><th class='py-2 px-3 font-semibold text-white'>Ατομικός αριθμός</th><th class='py-2 px-3 font-semibold text-white'>Αριθμός πρωτονίων</th><th class='py-2 px-3 font-semibold text-white'>Αριθμός ηλεκτρονίων</th><th class='py-2 px-3 font-semibold text-white'>Κατανομή e σε στιβάδες</th><th class='py-2 px-3 font-semibold text-white'>Φορτίο ιόντος</th></tr></thead><tbody class='divide-y divide-white/10'><tr><td class='py-2 px-3 font-semibold text-white'>ΧΛΩΡΙΟΥ</td><td class='py-2 px-3 font-normal text-purple-100'>17</td><td class='py-2 px-3 font-bold text-emerald-400'>17</td><td class='py-2 px-3 font-normal text-purple-100'>18</td><td class='py-2 px-3 font-bold text-emerald-400'>K(2) L(8) M(8)</td><td class='py-2 px-3 font-bold text-emerald-400'>−1</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>ΜΑΓΝΗΣΙΟΥ</td><td class='py-2 px-3 font-bold text-emerald-400'>12</td><td class='py-2 px-3 font-normal text-purple-100'>12</td><td class='py-2 px-3 font-bold text-emerald-400'>10</td><td class='py-2 px-3 font-bold text-emerald-400'>K(2) L(8)</td><td class='py-2 px-3 font-normal text-purple-100'>+2</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>ΚΑΛΙΟΥ</td><td class='py-2 px-3 font-bold text-emerald-400'>19</td><td class='py-2 px-3 font-normal text-purple-100'>19</td><td class='py-2 px-3 font-normal text-purple-100'>18</td><td class='py-2 px-3 font-bold text-emerald-400'>K(2) L(8) M(8)</td><td class='py-2 px-3 font-bold text-emerald-400'>+1</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>ΘΕΙΟΥ</td><td class='py-2 px-3 font-bold text-emerald-400'>16</td><td class='py-2 px-3 font-normal text-purple-100'>16</td><td class='py-2 px-3 font-bold text-emerald-400'>18</td><td class='py-2 px-3 font-bold text-emerald-400'>K(2) L(8) M(8)</td><td class='py-2 px-3 font-normal text-purple-100'>−2</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>ΟΞΥΓΟΝΟΥ</td><td class='py-2 px-3 font-normal text-purple-100'>8</td><td class='py-2 px-3 font-bold text-emerald-400'>8</td><td class='py-2 px-3 font-bold text-emerald-400'>10</td><td class='py-2 px-3 font-normal text-purple-100'>K(2) L(8)</td><td class='py-2 px-3 font-bold text-emerald-400'>−2</td></tr></tbody></table></div></div>"
  },
  {
    "chapterId": "chapter-7",
    "q": "15. Ο ατομικός αριθμός του φθορίου είναι 9 και ο μαζικός αριθμός του 19. Να απαντήσετε στις ακόλουθες ερωτήσεις, που αφορούν το άτομο και τα ιόντα του φθορίου, και να δικαιολογήσετε τις απαντήσεις σας.<br>α. Πόσα πρωτόνια, πόσα νετρόνια και πόσα ηλεκτρόνια συγκροτούν το άτομο του φθορίου;<br>β. Πού βρίσκεται συγκεντρωμένη η μάζα του φθορίου και γιατί;<br>γ. Είναι σωστό ή λάθος ότι το μεγαλύτερο μέρος του ατόμου είναι κενό;<br>δ. Είναι σωστό ή λάθος ότι το άτομο είναι ηλεκτρικά ουδέτερο;<br>ε. Το άτομο του φθορίου μπορεί να προσλάβει ένα ηλεκτρόνιο. Σε τι θα μετατραπεί σε αυτή την περίπτωση;<br>στ. Τα ιόντα φθορίου σχηματίζουν με τα ιόντα νατρίου (+1) την ιοντική ένωση νάτριο φθορίδιο (NaF). Ποια είναι τα δομικά σωματίδια της ένωσης;",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p><span class='text-white'>α.</span> Το άτομο του φθορίου περιέχει 9 πρωτόνια, 19 − 9 = 10 νετρόνια και 9 ηλεκτρόνια.</p><p><span class='text-white'>β.</span> Η μάζα του ατόμου είναι συγκεντρωμένη στον πυρήνα του, γιατί εκεί βρίσκονται τα πρωτόνια και τα νετρόνια, ενώ η μάζα των ηλεκτρονίων είναι αμελητέα.</p><p><span class='text-white'>γ.</span> Σωστό. Παρόλο που η μάζα του ατόμου είναι συγκεντρωμένη στον πυρήνα, ο όγκος του πυρήνα είναι ελάχιστος σε σχέση με τον συνολικό όγκο του ατόμου, με αποτέλεσμα το άτομο να αποτελείται κυρίως από κενό χώρο.</p><p><span class='text-white'>δ.</span> Σωστό. Το άτομο είναι ηλεκτρικά ουδέτερο, γιατί ο αριθμός των πρωτονίων στον πυρήνα (9) είναι ίσος με τον αριθμό των ηλεκτρονίων που περιφέρονται γύρω από τον πυρήνα (9).</p><p><span class='text-white'>ε.</span> Θα μετατραπεί σε αρνητικό ιόν (ανιόν) με φορτίο −1 (F<sup>−</sup>), αφού θα έχει 9 πρωτόνια και 10 ηλεκτρόνια.</p><p><span class='text-white'>στ.</span> Τα δομικά σωματίδια της ένωσης νάτριο φθορίδιο είναι τα κατιόντα νατρίου (Na<sup>+</sup>) και τα ανιόντα φθορίου (F<sup>−</sup>).</p></div>"
  },
  {
    "chapterId": "chapter-7",
    "q": "17. Να αντιστοιχίσετε καθεμία από τις ουσίες της στήλης Α στο είδος των δομικών της σωματιδίων στη στήλη Β.<div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><thead class='bg-white/10'><tr><th class='py-2 px-3 font-semibold text-white'>Α</th><th class='py-2 px-3 font-semibold text-white'>Β</th></tr></thead><tbody class='divide-y divide-white/10'><tr><td class='py-2 px-3 font-normal text-purple-100'>1. Νάτριο χλωρίδιο (NaCl)</td><td class='py-2 px-3 font-normal text-purple-100'>Β1. άτομα</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>2. Ευγενές αέριο ήλιο</td><td class='py-2 px-3 font-normal text-purple-100'>Β2. μόρια</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>3. Διατομικό υδρογόνο</td><td class='py-2 px-3 font-normal text-purple-100'>Β3. ιόντα</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>4. Μεθάνιο (CH<sub>4</sub>)</td><td class='py-2 px-3 font-normal text-purple-100'></td></tr></tbody></table></div>",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><thead class='bg-white/10'><tr><th class='py-2 px-3 font-semibold text-white'>Ουσία</th><th class='py-2 px-3 font-semibold text-white'>Αντιστοίχιση</th></tr></thead><tbody class='divide-y divide-white/10'><tr><td class='py-2 px-3 font-normal text-purple-100'>1. Νάτριο χλωρίδιο (NaCl)</td><td class='py-2 px-3 font-bold text-emerald-400'>Α1 → Β3 (ιόντα)</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>2. Ευγενές αέριο ήλιο</td><td class='py-2 px-3 font-bold text-emerald-400'>Α2 → Β1 (άτομα)</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>3. Διατομικό υδρογόνο</td><td class='py-2 px-3 font-bold text-emerald-400'>Α3 → Β2 (μόρια)</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>4. Μεθάνιο (CH<sub>4</sub>)</td><td class='py-2 px-3 font-bold text-emerald-400'>Α4 → Β2 (μόρια)</td></tr></tbody></table></div><p class='text-purple-200 font-normal text-sm'>Το χλωριούχο νάτριο είναι ιοντική ένωση (ιόντα Na<sup>+</sup> και Cl<sup>−</sup>). Το ήλιο, ως ευγενές αέριο, αποτελείται από ελεύθερα άτομα. Το υδρογόνο (H<sub>2</sub>) και το μεθάνιο (CH<sub>4</sub>) αποτελούνται από μόρια.</p></div>"
  },
  {
    "chapterId": "chapter-7",
    "q": "18. Να συμπληρώσετε την ακροστιχίδα. Η λέξη στην ακροστιχίδα χαρακτηρίζει τα σωματίδια σαν τα πρωτόνια, τα νετρόνια και τα ηλεκτρόνια.<br>1. Ακέφαλο (χωρίς το πρώτο του γράμμα) το μέρος του ατόμου που περιέχει συγκεντρωμένη σχεδόν όλη τη μάζα του.<br>2. Τα θετικά φορτισμένα υποατομικά σωματίδια.<br>3. Τόσα ηλεκτρόνια έχει ένα άτομο με Ζ = 8.<br>4. Ο αριθμός των πρωτονίων του πυρήνα.<br>5. Τόσα ηλεκτρόνια έχει προσλάβει ένα ιόν που έχει φορτίο −3.<br>6. Ηλεκτρικά, τέτοια σωματίδια είναι τα νετρόνια.<br>7. Ο αριθμός που δηλώνει το άθροισμα πρωτονίων και νετρονίων του πυρήνα ενός ατόμου.<br>8. Δημιουργείται όταν ένα άτομο προσλαμβάνει ή αποβάλλει ηλεκτρόνια.<br>9. Δημιουργείται όταν ένα άτομο αποβάλλει ηλεκτρόνια.<br>10. Δημιουργείται όταν ένα άτομο προσλαμβάνει ηλεκτρόνια.<div class='overflow-x-auto my-3'><table class='border-collapse text-sm font-bold'><tbody><tr><td class='pr-2 text-right text-white/60 font-normal'>1</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>2</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>3</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>4</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>5</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>6</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>7</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>8</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>9</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>10</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td></tr></tbody></table></div>",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><div class='overflow-x-auto my-3'><table class='border-collapse text-sm font-bold'><tbody><tr><td class='pr-2 text-right text-white/60 font-normal'>1</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>Υ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ρ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Η</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ν</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Α</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Σ</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>2</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>Π</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ρ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ω</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Τ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ο</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ν</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ι</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Α</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>3</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>Ο</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Κ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Τ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ω</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>4</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>Α</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Τ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ο</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Μ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ι</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Κ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ο</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Σ</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>5</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>Τ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ρ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ι</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Α</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>6</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>Ο</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Υ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Δ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ε</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Τ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ε</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ρ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Α</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>7</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>Μ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Α</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ζ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ι</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Κ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ο</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Σ</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>8</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>Ι</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ο</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ν</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>9</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>Κ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Α</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Τ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ι</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ο</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ν</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>10</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>Α</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ν</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ι</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ο</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ν</td></tr></tbody></table></div><p>Η λέξη της ακροστιχίδας είναι: <span class='text-yellow-400 tracking-widest'>ΥΠΟΑΤΟΜΙΚΑ</span></p><p class='text-purple-200 font-normal text-sm'>Στη γραμμή 1 η λέξη ΠΥΡΗΝΑΣ γράφεται «ακέφαλη», χωρίς το πρώτο της γράμμα: ΥΡΗΝΑΣ.</p></div>"
  },
  {
    "chapterId": "chapter-8",
    "q": "1. α. Πότε ένα φαινόμενο χαρακτηρίζεται χημική αντίδραση;<br>β. Να χαρακτηρίσετε τα σώματα της ακόλουθης χημικής εξίσωσης ως αντιδρώντα ή προϊόντα:<br>υδρογόνο χλωρίδιο + νάτριο υδροξείδιο → νάτριο χλωρίδιο + νερό<br>(HCl + NaOH → NaCl + H<sub>2</sub>O)",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p><span class='text-white'>α.</span> Χημική αντίδραση (ή χημική μεταβολή) ονομάζεται κάθε μεταβολή κατά την οποία από τις αρχικές ουσίες, που ονομάζονται αντιδρώντα, σχηματίζονται νέες ουσίες με διαφορετικές ιδιότητες, που ονομάζονται προϊόντα.</p><p><span class='text-white'>β.</span> Αντιδρώντα είναι το υδρογόνο χλωρίδιο (HCl) και το νάτριο υδροξείδιο (NaOH). Προϊόντα είναι το νάτριο χλωρίδιο (NaCl) και το νερό (H<sub>2</sub>O).</p></div>"
  },
  {
    "chapterId": "chapter-8",
    "q": "2. Να συμπληρώσετε τα κενά στον ακόλουθο πίνακα:<div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><tbody class='divide-y divide-white/10'><tr><td class='py-2 px-3 font-semibold text-white'>Χημική αντίδραση</td><td class='py-2 px-3 font-normal text-purple-100'>Το μαγνήσιο αντιδρά με το οξυγόνο και παράγει μαγνήσιο οξείδιο.</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Περιγραφή</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Χημική εξίσωση</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Χημική αντίδραση</td><td class='py-2 px-3 font-normal text-purple-100'>Ο ………… αντιδρά με το οξυγόνο και παράγει …………</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Περιγραφή</td><td class='py-2 px-3 font-normal text-purple-100'>άνθρακας + οξυγόνο → άνθρακας διοξείδιο</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Χημική εξίσωση</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Χημική αντίδραση</td><td class='py-2 px-3 font-normal text-purple-100'>Ο σίδηρος αντιδρά με το οξυγόνο και παράγει σίδηρο οξείδιο.</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Περιγραφή</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Χημική εξίσωση</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr></tbody></table></div>",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><tbody class='divide-y divide-white/10'><tr><td class='py-2 px-3 font-semibold text-white'>Χημική αντίδραση</td><td class='py-2 px-3 font-normal text-purple-100'>Το μαγνήσιο αντιδρά με το οξυγόνο και παράγει μαγνήσιο οξείδιο.</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Περιγραφή</td><td class='py-2 px-3 font-bold text-emerald-400'>μαγνήσιο + οξυγόνο → μαγνήσιο οξείδιο</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Χημική εξίσωση</td><td class='py-2 px-3 font-bold text-emerald-400'>2Mg + O<sub>2</sub> → 2MgO</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Χημική αντίδραση</td><td class='py-2 px-3 font-bold text-emerald-400'>Ο άνθρακας αντιδρά με το οξυγόνο και παράγει άνθρακα διοξείδιο.</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Περιγραφή</td><td class='py-2 px-3 font-normal text-purple-100'>άνθρακας + οξυγόνο → άνθρακας διοξείδιο</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Χημική εξίσωση</td><td class='py-2 px-3 font-bold text-emerald-400'>C + O<sub>2</sub> → CO<sub>2</sub></td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Χημική αντίδραση</td><td class='py-2 px-3 font-normal text-purple-100'>Ο σίδηρος αντιδρά με το οξυγόνο και παράγει σίδηρο οξείδιο.</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Περιγραφή</td><td class='py-2 px-3 font-bold text-emerald-400'>σίδηρος + οξυγόνο → σίδηρος οξείδιο</td></tr><tr><td class='py-2 px-3 font-semibold text-white'>Χημική εξίσωση</td><td class='py-2 px-3 font-bold text-emerald-400'>2Fe + O<sub>2</sub> → 2FeO</td></tr></tbody></table></div><p class='text-purple-200 font-normal text-sm'>Ο σίδηρος σχηματίζει και άλλα οξείδια, π.χ. 4Fe + 3O<sub>2</sub> → 2Fe<sub>2</sub>O<sub>3</sub>.</p></div>"
  },
  {
    "chapterId": "chapter-8",
    "q": "3. Να αντιστοιχίσετε καθεμία από τις ουσίες της στήλης Α στα αντιδρώντα από τα οποία μπορεί να παραχθεί, στη στήλη Β.<div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><thead class='bg-white/10'><tr><th class='py-2 px-3 font-semibold text-white'>Α</th><th class='py-2 px-3 font-semibold text-white'>Β</th></tr></thead><tbody class='divide-y divide-white/10'><tr><td class='py-2 px-3 font-normal text-purple-100'>1. NaCl</td><td class='py-2 px-3 font-normal text-purple-100'>Β1. H<sub>2</sub> + I<sub>2</sub></td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>2. CO<sub>2</sub></td><td class='py-2 px-3 font-normal text-purple-100'>Β2. N<sub>2</sub> + O<sub>2</sub></td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>3. N<sub>2</sub>O<sub>5</sub></td><td class='py-2 px-3 font-normal text-purple-100'>Β3. Fe + O<sub>2</sub></td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>4. Fe<sub>2</sub>O<sub>3</sub></td><td class='py-2 px-3 font-normal text-purple-100'>Β4. Na + Cl<sub>2</sub></td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>5. HI</td><td class='py-2 px-3 font-normal text-purple-100'>Β5. C + O<sub>2</sub></td></tr></tbody></table></div>",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><thead class='bg-white/10'><tr><th class='py-2 px-3 font-semibold text-white'>Ουσία</th><th class='py-2 px-3 font-semibold text-white'>Αντιστοίχιση</th></tr></thead><tbody class='divide-y divide-white/10'><tr><td class='py-2 px-3 font-normal text-purple-100'>1. NaCl</td><td class='py-2 px-3 font-bold text-emerald-400'>Α1 → Β4 (Na + Cl<sub>2</sub>)</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>2. CO<sub>2</sub></td><td class='py-2 px-3 font-bold text-emerald-400'>Α2 → Β5 (C + O<sub>2</sub>)</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>3. N<sub>2</sub>O<sub>5</sub></td><td class='py-2 px-3 font-bold text-emerald-400'>Α3 → Β2 (N<sub>2</sub> + O<sub>2</sub>)</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>4. Fe<sub>2</sub>O<sub>3</sub></td><td class='py-2 px-3 font-bold text-emerald-400'>Α4 → Β3 (Fe + O<sub>2</sub>)</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>5. HI</td><td class='py-2 px-3 font-bold text-emerald-400'>Α5 → Β1 (H<sub>2</sub> + I<sub>2</sub>)</td></tr></tbody></table></div></div>"
  },
  {
    "chapterId": "chapter-8",
    "q": "4. Στην εικόνα δίνονται τα προσομοιώματα ορισμένων στοιχείων. Με βάση αυτά να αναπαραστήσετε τις ακόλουθες χημικές εξισώσεις με σύμβολα και λέξεις, αν δίνονται με προσομοιώματα, με λέξεις και προσομοιώματα, αν δίνονται με σύμβολα, και με σύμβολα και προσομοιώματα, αν δίνονται με λέξεις.<img src='/images/bGymnasiou/ch8_q4_models.jpg' alt='Προσομοιώματα των ατόμων H, C, N, O, Cl, Br, I' class='block mx-auto my-4 w-full rounded-xl bg-white p-2' style='max-width:340px'><div class='flex flex-col gap-4'><div><b>α. Με προσομοιώματα:</b> <span class='inline-flex flex-wrap items-center gap-1'><span style='display:inline-flex;align-items:center;'><span style='display:inline-block;width:16px;height:16px;border-radius:50%;background:white;border:1px solid #aaa;box-shadow:inset -2px -2px 4px rgba(0,0,0,0.2);position:relative;z-index:2;'></span><span style='display:inline-block;width:24px;height:24px;border-radius:50%;background:#d946ef;box-shadow:inset -4px -4px 6px rgba(0,0,0,0.3);margin-left:-6px;position:relative;z-index:1;'></span></span> <span style='display:inline-flex;align-items:center;'><span style='display:inline-block;width:16px;height:16px;border-radius:50%;background:white;border:1px solid #aaa;box-shadow:inset -2px -2px 4px rgba(0,0,0,0.2);position:relative;z-index:2;'></span><span style='display:inline-block;width:24px;height:24px;border-radius:50%;background:#d946ef;box-shadow:inset -4px -4px 6px rgba(0,0,0,0.3);margin-left:-6px;position:relative;z-index:1;'></span></span> <span class='mx-2'>&#10142;</span> <span style='display:inline-flex;align-items:center;'><span style='display:inline-block;width:24px;height:24px;border-radius:50%;background:#d946ef;box-shadow:inset -4px -4px 6px rgba(0,0,0,0.3);position:relative;z-index:2;'></span><span style='display:inline-block;width:24px;height:24px;border-radius:50%;background:#d946ef;box-shadow:inset -4px -4px 6px rgba(0,0,0,0.3);margin-left:-6px;position:relative;z-index:1;'></span></span> <span style='display:inline-flex;align-items:center;'><span style='display:inline-block;width:16px;height:16px;border-radius:50%;background:white;border:1px solid #aaa;box-shadow:inset -2px -2px 4px rgba(0,0,0,0.2);position:relative;z-index:2;'></span><span style='display:inline-block;width:16px;height:16px;border-radius:50%;background:white;border:1px solid #aaa;box-shadow:inset -2px -2px 4px rgba(0,0,0,0.2);margin-left:-4px;position:relative;z-index:1;'></span></span></span><br><b>Με λέξεις:</b> <span class='inline-block w-full max-w-xs align-bottom border-b-2 border-dotted border-white/60'>&nbsp;</span><br><b>Με χημική εξίσωση:</b> <span class='inline-block w-full max-w-xs align-bottom border-b-2 border-dotted border-white/60'>&nbsp;</span></div><div><b>β. Με προσομοιώματα:</b> <span class='inline-flex flex-wrap items-center gap-1'><span style='display:inline-flex;align-items:center;'><span style='display:inline-block;width:24px;height:24px;border-radius:50%;background:#3b82f6;box-shadow:inset -4px -4px 6px rgba(0,0,0,0.3);position:relative;z-index:2;'></span><span style='display:inline-block;width:24px;height:24px;border-radius:50%;background:#3b82f6;box-shadow:inset -4px -4px 6px rgba(0,0,0,0.3);margin-left:-6px;position:relative;z-index:1;'></span></span> <span style='display:inline-flex;align-items:center;'><span style='display:inline-block;width:16px;height:16px;border-radius:50%;background:white;border:1px solid #aaa;box-shadow:inset -2px -2px 4px rgba(0,0,0,0.2);position:relative;z-index:2;'></span><span style='display:inline-block;width:16px;height:16px;border-radius:50%;background:white;border:1px solid #aaa;box-shadow:inset -2px -2px 4px rgba(0,0,0,0.2);margin-left:-4px;position:relative;z-index:1;'></span></span> <span style='display:inline-flex;align-items:center;'><span style='display:inline-block;width:16px;height:16px;border-radius:50%;background:white;border:1px solid #aaa;box-shadow:inset -2px -2px 4px rgba(0,0,0,0.2);position:relative;z-index:2;'></span><span style='display:inline-block;width:16px;height:16px;border-radius:50%;background:white;border:1px solid #aaa;box-shadow:inset -2px -2px 4px rgba(0,0,0,0.2);margin-left:-4px;position:relative;z-index:1;'></span></span> <span style='display:inline-flex;align-items:center;'><span style='display:inline-block;width:16px;height:16px;border-radius:50%;background:white;border:1px solid #aaa;box-shadow:inset -2px -2px 4px rgba(0,0,0,0.2);position:relative;z-index:2;'></span><span style='display:inline-block;width:16px;height:16px;border-radius:50%;background:white;border:1px solid #aaa;box-shadow:inset -2px -2px 4px rgba(0,0,0,0.2);margin-left:-4px;position:relative;z-index:1;'></span></span> <span class='mx-2'>&#10142;</span> <span style='display:inline-flex;align-items:center;position:relative;'><span style='display:inline-block;width:14px;height:14px;border-radius:50%;background:white;border:1px solid #aaa;box-shadow:inset -2px -2px 4px rgba(0,0,0,0.2);position:relative;z-index:1;margin-right:-4px;margin-top:8px;'></span><span style='display:inline-block;width:24px;height:24px;border-radius:50%;background:#3b82f6;box-shadow:inset -4px -4px 6px rgba(0,0,0,0.3);position:relative;z-index:3;'></span><span style='display:inline-block;width:14px;height:14px;border-radius:50%;background:white;border:1px solid #aaa;box-shadow:inset -2px -2px 4px rgba(0,0,0,0.2);position:relative;z-index:1;margin-left:-4px;margin-top:8px;'></span><span style='display:inline-block;width:14px;height:14px;border-radius:50%;background:white;border:1px solid #aaa;box-shadow:inset -2px -2px 4px rgba(0,0,0,0.2);position:absolute;top:-4px;left:15px;z-index:2;'></span></span> <span style='display:inline-flex;align-items:center;position:relative;'><span style='display:inline-block;width:14px;height:14px;border-radius:50%;background:white;border:1px solid #aaa;box-shadow:inset -2px -2px 4px rgba(0,0,0,0.2);position:relative;z-index:1;margin-right:-4px;margin-top:8px;'></span><span style='display:inline-block;width:24px;height:24px;border-radius:50%;background:#3b82f6;box-shadow:inset -4px -4px 6px rgba(0,0,0,0.3);position:relative;z-index:3;'></span><span style='display:inline-block;width:14px;height:14px;border-radius:50%;background:white;border:1px solid #aaa;box-shadow:inset -2px -2px 4px rgba(0,0,0,0.2);position:relative;z-index:1;margin-left:-4px;margin-top:8px;'></span><span style='display:inline-block;width:14px;height:14px;border-radius:50%;background:white;border:1px solid #aaa;box-shadow:inset -2px -2px 4px rgba(0,0,0,0.2);position:absolute;top:-4px;left:15px;z-index:2;'></span></span></span><br><b>Με λέξεις:</b> <span class='inline-block w-full max-w-xs align-bottom border-b-2 border-dotted border-white/60'>&nbsp;</span><br><b>Με χημική εξίσωση:</b> <span class='inline-block w-full max-w-xs align-bottom border-b-2 border-dotted border-white/60'>&nbsp;</span></div><div><b>γ. Με λέξεις:</b> Ένα άτομο άνθρακα αντιδρά με δύο μόρια υδρογόνου και παράγεται ένα μόριο μεθανίου (CH<sub>4</sub>).<br><b>Με προσομοιώματα:</b> <span class='inline-block w-full max-w-xs align-bottom border-b-2 border-dotted border-white/60'>&nbsp;</span><br><b>Με χημική εξίσωση:</b> <span class='inline-block w-full max-w-xs align-bottom border-b-2 border-dotted border-white/60'>&nbsp;</span></div><div><b>δ. Με χημική εξίσωση:</b> N<sub>2</sub>(g) + 2O<sub>2</sub>(g) &#10142; 2NO<sub>2</sub>(g)<br><b>Με προσομοιώματα:</b> <span class='inline-block w-full max-w-xs align-bottom border-b-2 border-dotted border-white/60'>&nbsp;</span><br><b>Με λέξεις:</b> <span class='inline-block w-full max-w-xs align-bottom border-b-2 border-dotted border-white/60'>&nbsp;</span></div></div>",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p><span class='text-white'>α.</span> Με λέξεις: Δύο μόρια υδρογόνου βρωμιδίου (υδροβρωμίου) διασπώνται και παράγουν ένα μόριο υδρογόνου και ένα μόριο βρωμίου.<br>Με χημική εξίσωση: 2HBr → H<sub>2</sub> + Br<sub>2</sub></p><p><span class='text-white'>β.</span> Με λέξεις: Ένα μόριο αζώτου αντιδρά με τρία μόρια υδρογόνου και παράγονται δύο μόρια αμμωνίας.<br>Με χημική εξίσωση: N<sub>2</sub> + 3H<sub>2</sub> → 2NH<sub>3</sub></p><p><span class='text-white'>γ.</span> Με προσομοιώματα: <span class='inline-flex flex-wrap items-center gap-1'><span style='display:inline-block;width:24px;height:24px;border-radius:50%;background:#4b5563;box-shadow:inset -4px -4px 6px rgba(0,0,0,0.3);'></span> + <span style='display:inline-flex;align-items:center;'><span style='display:inline-block;width:16px;height:16px;border-radius:50%;background:white;border:1px solid #aaa;box-shadow:inset -2px -2px 4px rgba(0,0,0,0.2);position:relative;z-index:2;'></span><span style='display:inline-block;width:16px;height:16px;border-radius:50%;background:white;border:1px solid #aaa;box-shadow:inset -2px -2px 4px rgba(0,0,0,0.2);margin-left:-4px;position:relative;z-index:1;'></span></span> <span style='display:inline-flex;align-items:center;'><span style='display:inline-block;width:16px;height:16px;border-radius:50%;background:white;border:1px solid #aaa;box-shadow:inset -2px -2px 4px rgba(0,0,0,0.2);position:relative;z-index:2;'></span><span style='display:inline-block;width:16px;height:16px;border-radius:50%;background:white;border:1px solid #aaa;box-shadow:inset -2px -2px 4px rgba(0,0,0,0.2);margin-left:-4px;position:relative;z-index:1;'></span></span> &#10142; <span style='display:inline-flex;align-items:center;position:relative;'><span style='display:inline-block;width:14px;height:14px;border-radius:50%;background:white;border:1px solid #aaa;box-shadow:inset -2px -2px 4px rgba(0,0,0,0.2);position:relative;z-index:1;margin-right:-4px;'></span><span style='display:inline-block;width:24px;height:24px;border-radius:50%;background:#4b5563;box-shadow:inset -4px -4px 6px rgba(0,0,0,0.3);position:relative;z-index:3;'></span><span style='display:inline-block;width:14px;height:14px;border-radius:50%;background:white;border:1px solid #aaa;box-shadow:inset -2px -2px 4px rgba(0,0,0,0.2);position:relative;z-index:1;margin-left:-4px;'></span><span style='display:inline-block;width:14px;height:14px;border-radius:50%;background:white;border:1px solid #aaa;box-shadow:inset -2px -2px 4px rgba(0,0,0,0.2);position:absolute;top:-4px;left:15px;z-index:2;'></span><span style='display:inline-block;width:14px;height:14px;border-radius:50%;background:white;border:1px solid #aaa;box-shadow:inset -2px -2px 4px rgba(0,0,0,0.2);position:absolute;bottom:-4px;left:15px;z-index:2;'></span></span></span><br>Με χημική εξίσωση: C + 2H<sub>2</sub> → CH<sub>4</sub></p><p><span class='text-white'>δ.</span> Με προσομοιώματα: <span class='inline-flex flex-wrap items-center gap-1'><span style='display:inline-flex;align-items:center;'><span style='display:inline-block;width:24px;height:24px;border-radius:50%;background:#3b82f6;box-shadow:inset -4px -4px 6px rgba(0,0,0,0.3);position:relative;z-index:2;'></span><span style='display:inline-block;width:24px;height:24px;border-radius:50%;background:#3b82f6;box-shadow:inset -4px -4px 6px rgba(0,0,0,0.3);margin-left:-6px;position:relative;z-index:1;'></span></span> + <span style='display:inline-flex;align-items:center;'><span style='display:inline-block;width:24px;height:24px;border-radius:50%;background:#ef4444;box-shadow:inset -4px -4px 6px rgba(0,0,0,0.3);position:relative;z-index:2;'></span><span style='display:inline-block;width:24px;height:24px;border-radius:50%;background:#ef4444;box-shadow:inset -4px -4px 6px rgba(0,0,0,0.3);margin-left:-6px;position:relative;z-index:1;'></span></span> <span style='display:inline-flex;align-items:center;'><span style='display:inline-block;width:24px;height:24px;border-radius:50%;background:#ef4444;box-shadow:inset -4px -4px 6px rgba(0,0,0,0.3);position:relative;z-index:2;'></span><span style='display:inline-block;width:24px;height:24px;border-radius:50%;background:#ef4444;box-shadow:inset -4px -4px 6px rgba(0,0,0,0.3);margin-left:-6px;position:relative;z-index:1;'></span></span> &#10142; <span style='display:inline-flex;align-items:center;'><span style='display:inline-block;width:24px;height:24px;border-radius:50%;background:#ef4444;box-shadow:inset -4px -4px 6px rgba(0,0,0,0.3);position:relative;z-index:1;margin-right:-6px;'></span><span style='display:inline-block;width:24px;height:24px;border-radius:50%;background:#3b82f6;box-shadow:inset -4px -4px 6px rgba(0,0,0,0.3);position:relative;z-index:2;'></span><span style='display:inline-block;width:24px;height:24px;border-radius:50%;background:#ef4444;box-shadow:inset -4px -4px 6px rgba(0,0,0,0.3);margin-left:-6px;position:relative;z-index:1;'></span></span> <span style='display:inline-flex;align-items:center;'><span style='display:inline-block;width:24px;height:24px;border-radius:50%;background:#ef4444;box-shadow:inset -4px -4px 6px rgba(0,0,0,0.3);position:relative;z-index:1;margin-right:-6px;'></span><span style='display:inline-block;width:24px;height:24px;border-radius:50%;background:#3b82f6;box-shadow:inset -4px -4px 6px rgba(0,0,0,0.3);position:relative;z-index:2;'></span><span style='display:inline-block;width:24px;height:24px;border-radius:50%;background:#ef4444;box-shadow:inset -4px -4px 6px rgba(0,0,0,0.3);margin-left:-6px;position:relative;z-index:1;'></span></span></span><br>Με λέξεις: Ένα μόριο αζώτου αντιδρά με δύο μόρια οξυγόνου και παράγονται δύο μόρια αζώτου διοξειδίου (NO<sub>2</sub>).</p></div>"
  },
  {
    "chapterId": "chapter-8",
    "q": "5. Οι χημικές εξισώσεις που ακολουθούν έχουν ένα λάθος ή μία παράλειψη. Να το εντοπίσετε, να γράψετε γιατί πιστεύετε ότι είναι λάθος και να γράψετε τη χημική εξίσωση συμπληρωμένη σωστά.<br>α. N<sub>2</sub> + 3H<sub>2</sub> → 2NH<sub>3</sub><br>β. H<sub>2</sub>(g) + I<sub>2</sub>(g) → HI(g)<br>γ. H<sub>2</sub>(g) + ½O<sub>2</sub>(g) → H<sub>2</sub>O(l)<br>δ. H<sub>2</sub>(g) + Cl<sub>2</sub>(g) → 2HI(g)<br>ε. C(s) + O(g) → CO(g)",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p><span class='text-white'>α.</span> Δεν έχουν αναγραφεί οι φυσικές καταστάσεις των ουσιών:<br>N<sub>2</sub>(g) + 3H<sub>2</sub>(g) → 2NH<sub>3</sub>(g)</p><p><span class='text-white'>β.</span> Δεν ισχύει η αρχή διατήρησης των ατόμων (στο 1ο μέλος υπάρχουν 2 άτομα H και 2 άτομα I, στο 2ο μόνο από 1):<br>H<sub>2</sub>(g) + I<sub>2</sub>(g) → 2HI(g)</p><p><span class='text-white'>γ.</span> Οι συντελεστές δηλώνουν αριθμό μορίων και πρέπει να είναι ακέραιοι αριθμοί, αφού δεν υπάρχει «μισό μόριο» οξυγόνου. Πολλαπλασιάζουμε όλους τους συντελεστές με 2:<br>2H<sub>2</sub>(g) + O<sub>2</sub>(g) → 2H<sub>2</sub>O(l)</p><p><span class='text-white'>δ.</span> Το προϊόν έχει γραφτεί λανθασμένα: από την αντίδραση του υδρογόνου με το χλώριο παράγεται υδρογόνο χλωρίδιο (HCl) και όχι HI:<br>H<sub>2</sub>(g) + Cl<sub>2</sub>(g) → 2HCl(g)</p><p><span class='text-white'>ε.</span> Το οξυγόνο είναι διατομικό στοιχείο και γράφεται O<sub>2</sub>:<br>2C(s) + O<sub>2</sub>(g) → 2CO(g)</p></div>"
  },
  {
    "chapterId": "chapter-8",
    "q": "6. Να συμπληρώσετε τους συντελεστές στις ακόλουθες εξισώσεις, έτσι ώστε όσα άτομα κάθε στοιχείου υπάρχουν στο πρώτο μέλος, τόσα να υπάρχουν και στο δεύτερο.<br>α. N<sub>2</sub>(g) + <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>H<sub>2</sub>(g) → <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>NH<sub>3</sub>(g)<br>β. N<sub>2</sub>(g) + O<sub>2</sub>(g) → <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>NO(g)<br>γ. CH<sub>4</sub>(g) + <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>O<sub>2</sub>(g) → CO<sub>2</sub>(g) + <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>H<sub>2</sub>O(g)<br>δ. <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>SO<sub>2</sub>(g) + O<sub>2</sub>(g) → <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>SO<sub>3</sub>(g)<br>ε. <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>C<sub>4</sub>H<sub>10</sub>(g) + <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>O<sub>2</sub>(g) → <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>CO<sub>2</sub>(g) + <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>H<sub>2</sub>O(g)",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p>α. N<sub>2</sub>(g) + <span class='text-amber-300 underline decoration-dotted underline-offset-4'>3</span>H<sub>2</sub>(g) → <span class='text-amber-300 underline decoration-dotted underline-offset-4'>2</span>NH<sub>3</sub>(g)</p><p>β. N<sub>2</sub>(g) + O<sub>2</sub>(g) → <span class='text-amber-300 underline decoration-dotted underline-offset-4'>2</span>NO(g)</p><p>γ. CH<sub>4</sub>(g) + <span class='text-amber-300 underline decoration-dotted underline-offset-4'>2</span>O<sub>2</sub>(g) → CO<sub>2</sub>(g) + <span class='text-amber-300 underline decoration-dotted underline-offset-4'>2</span>H<sub>2</sub>O(g)</p><p>δ. <span class='text-amber-300 underline decoration-dotted underline-offset-4'>2</span>SO<sub>2</sub>(g) + O<sub>2</sub>(g) → <span class='text-amber-300 underline decoration-dotted underline-offset-4'>2</span>SO<sub>3</sub>(g)</p><p>ε. <span class='text-amber-300 underline decoration-dotted underline-offset-4'>2</span>C<sub>4</sub>H<sub>10</sub>(g) + <span class='text-amber-300 underline decoration-dotted underline-offset-4'>13</span>O<sub>2</sub>(g) → <span class='text-amber-300 underline decoration-dotted underline-offset-4'>8</span>CO<sub>2</sub>(g) + <span class='text-amber-300 underline decoration-dotted underline-offset-4'>10</span>H<sub>2</sub>O(g)</p></div>"
  },
  {
    "chapterId": "chapter-8",
    "q": "7. Να συμπληρώσετε τους δείκτες στους χημικούς τύπους στις ακόλουθες εξισώσεις, έτσι ώστε όσα άτομα κάθε στοιχείου υπάρχουν στο πρώτο μέλος, τόσα να υπάρχουν και στο δεύτερο.<br>α. 4P(s) + 5O<sub>2</sub>(g) → 2P<sub><span class='inline-block min-w-4 border-b-2 border-dotted border-white/60'>&nbsp;</span></sub>O<sub><span class='inline-block min-w-4 border-b-2 border-dotted border-white/60'>&nbsp;</span></sub>(g)<br>β. N<sub><span class='inline-block min-w-4 border-b-2 border-dotted border-white/60'>&nbsp;</span></sub>(g) + 2O<sub><span class='inline-block min-w-4 border-b-2 border-dotted border-white/60'>&nbsp;</span></sub>(g) → 2NO<sub><span class='inline-block min-w-4 border-b-2 border-dotted border-white/60'>&nbsp;</span></sub>(g)<br>γ. C<sub><span class='inline-block min-w-4 border-b-2 border-dotted border-white/60'>&nbsp;</span></sub>H<sub><span class='inline-block min-w-4 border-b-2 border-dotted border-white/60'>&nbsp;</span></sub>(g) + 6O<sub>2</sub>(g) → 4CO<sub>2</sub>(g) + 4H<sub>2</sub>O(g)<br>δ. 2SO<sub><span class='inline-block min-w-4 border-b-2 border-dotted border-white/60'>&nbsp;</span></sub>(g) → 2SO<sub>2</sub>(g) + O<sub>2</sub>(g)",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p>α. 4P(s) + 5O<sub>2</sub>(g) → 2P<sub><span class='text-amber-300 underline decoration-dotted underline-offset-4'>2</span></sub>O<sub><span class='text-amber-300 underline decoration-dotted underline-offset-4'>5</span></sub>(g)</p><p>β. N<sub><span class='text-amber-300 underline decoration-dotted underline-offset-4'>2</span></sub>(g) + 2O<sub><span class='text-amber-300 underline decoration-dotted underline-offset-4'>2</span></sub>(g) → 2NO<sub><span class='text-amber-300 underline decoration-dotted underline-offset-4'>2</span></sub>(g)</p><p>γ. C<sub><span class='text-amber-300 underline decoration-dotted underline-offset-4'>4</span></sub>H<sub><span class='text-amber-300 underline decoration-dotted underline-offset-4'>8</span></sub>(g) + 6O<sub>2</sub>(g) → 4CO<sub>2</sub>(g) + 4H<sub>2</sub>O(g)</p><p>δ. 2SO<sub><span class='text-amber-300 underline decoration-dotted underline-offset-4'>3</span></sub>(g) → 2SO<sub>2</sub>(g) + O<sub>2</sub>(g)</p><p class='text-purple-200 font-normal text-sm'>Στην εξίσωση γ ο συντελεστής του O<sub>2</sub> πρέπει να είναι 6, ώστε να ισχύει η αρχή διατήρησης των ατόμων: 12 άτομα O στο 1ο μέλος και 4 · 2 + 4 · 1 = 12 στο 2ο.</p></div>"
  },
  {
    "chapterId": "chapter-8",
    "q": "8. Στη γλώσσα, όπως και στη Χημεία, χρησιμοποιούμε σύμβολα, ώστε να διευκολύνουμε την επικοινωνία. Να αντιστοιχίσετε τα σύμβολα της γλώσσας με τα σύμβολα της Χημείας στα οποία πιστεύετε ότι αντιστοιχούν.<div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><thead class='bg-white/10'><tr><th class='py-2 px-3 font-semibold text-white'>Α</th><th class='py-2 px-3 font-semibold text-white'>Β</th></tr></thead><tbody class='divide-y divide-white/10'><tr><td class='py-2 px-3 font-normal text-purple-100'>1. γράμμα</td><td class='py-2 px-3 font-normal text-purple-100'>Β1. χημική εξίσωση</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>2. λέξη</td><td class='py-2 px-3 font-normal text-purple-100'>Β2. σύμβολο ατόμου</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>3. πρόταση</td><td class='py-2 px-3 font-normal text-purple-100'>Β3. μοριακός τύπος</td></tr></tbody></table></div>",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><thead class='bg-white/10'><tr><th class='py-2 px-3 font-semibold text-white'>Σύμβολο της γλώσσας</th><th class='py-2 px-3 font-semibold text-white'>Αντιστοίχιση</th></tr></thead><tbody class='divide-y divide-white/10'><tr><td class='py-2 px-3 font-normal text-purple-100'>1. γράμμα</td><td class='py-2 px-3 font-bold text-emerald-400'>Α1 → Β2 (σύμβολο ατόμου)</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>2. λέξη</td><td class='py-2 px-3 font-bold text-emerald-400'>Α2 → Β3 (μοριακός τύπος)</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>3. πρόταση</td><td class='py-2 px-3 font-bold text-emerald-400'>Α3 → Β1 (χημική εξίσωση)</td></tr></tbody></table></div></div>"
  },
  {
    "chapterId": "chapter-8",
    "q": "9. Να παρατηρήσετε την ακόλουθη χημική εξίσωση:<br>4HCl(g) + O<sub>2</sub>(g) → 2Cl<sub>2</sub>(g) + 2H<sub>2</sub>O(g)<br>και στη συνέχεια:<br>α. Να χαρακτηρίσετε όλες τις χημικές ουσίες ως αντιδρώντα ή προϊόντα.<br>β. Να την περιγράψετε με λόγια.<br>γ. Να εξηγήσετε γιατί μπροστά από ορισμένα σύμβολα μορίων υπάρχουν αριθμοί και τι σημαίνουν αυτοί.<br>δ. Να εξηγήσετε τι σημαίνουν οι δείκτες στα σύμβολα O<sub>2</sub> και Cl<sub>2</sub>.<br>ε. Να εξηγήσετε τα σύμβολα που βρίσκονται δεξιά από κάθε μοριακό τύπο.<br>στ. Όταν αντιδρούν 73 g HCl με 16 g O<sub>2</sub>, παράγονται 71 g Cl<sub>2</sub> και <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> g H<sub>2</sub>O, γιατί σε μια χημική αντίδραση το άθροισμα των <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> των <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> είναι ίσο με το άθροισμα των μαζών των <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>.",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p><span class='text-white'>α.</span> Αντιδρώντα: HCl και O<sub>2</sub>. Προϊόντα: Cl<sub>2</sub> και H<sub>2</sub>O.</p><p><span class='text-white'>β.</span> Τέσσερα μόρια υδρογόνου χλωριδίου (αέριο) αντιδρούν με ένα μόριο οξυγόνου (αέριο) και παράγονται δύο μόρια χλωρίου (αέριο) και δύο μόρια νερού (υδρατμοί).</p><p><span class='text-white'>γ.</span> Οι αριθμοί αυτοί λέγονται συντελεστές και δείχνουν πόσα μόρια από κάθε ουσία αντιδρούν ή παράγονται (όπου δεν υπάρχει αριθμός, ο συντελεστής είναι 1). Τοποθετούνται ώστε να ισχύει η αρχή διατήρησης των ατόμων, δηλαδή όσα άτομα κάθε στοιχείου υπάρχουν στο πρώτο μέλος, τόσα να υπάρχουν και στο δεύτερο.</p><p><span class='text-white'>δ.</span> Ο δείκτης 2 δείχνει ότι κάθε μόριο οξυγόνου και κάθε μόριο χλωρίου αποτελείται από 2 άτομα, δηλαδή ότι το οξυγόνο και το χλώριο είναι διατομικά στοιχεία (ατομικότητα 2).</p><p><span class='text-white'>ε.</span> Δείχνουν τη φυσική κατάσταση των ουσιών: (s) στερεό, (l) υγρό, (g) αέριο. Εδώ όλες οι ουσίες είναι αέριες (g).</p><p>στ. Όταν αντιδρούν 73 g HCl με 16 g O<sub>2</sub>, παράγονται 71 g Cl<sub>2</sub> και <span class='text-amber-300 underline decoration-dotted underline-offset-4'>18</span> g H<sub>2</sub>O, γιατί σε μια χημική αντίδραση το άθροισμα των <span class='text-amber-300 underline decoration-dotted underline-offset-4'>μαζών</span> των <span class='text-amber-300 underline decoration-dotted underline-offset-4'>αντιδρώντων</span> είναι ίσο με το άθροισμα των μαζών των <span class='text-amber-300 underline decoration-dotted underline-offset-4'>προϊόντων</span>. (73 + 16 = 71 + 18 = 89 g)</p></div>"
  },
  {
    "chapterId": "chapter-8",
    "q": "11. α. Ποιες αντιδράσεις χαρακτηρίζονται εξώθερμες;<br>β. Να αναφέρετε ένα παράδειγμα εξώθερμης αντίδρασης που σας είναι γνωστό από την καθημερινή σας ζωή.",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p><span class='text-white'>α.</span> Εξώθερμες ονομάζονται οι αντιδράσεις κατά τις οποίες ελευθερώνεται ενέργεια με μορφή θερμότητας προς το περιβάλλον.</p><p><span class='text-white'>β.</span> Η καύση των ξύλων στο τζάκι (ή η καύση του υγραερίου στην κουζίνα).</p></div>"
  },
  {
    "chapterId": "chapter-8",
    "q": "12. α. Ποιες αντιδράσεις χαρακτηρίζονται ενδόθερμες;<br>β. Να αναφέρετε ένα παράδειγμα ενδόθερμης αντίδρασης που σας είναι γνωστό από την καθημερινή σας ζωή.<br>γ. Σε ένα δοχείο στο οποίο υπάρχει θερμόμετρο πραγματοποιείται μια ενδόθερμη αντίδραση. Αν η αρχική θερμοκρασία στο δοχείο ήταν 50 °C, η τελική θα είναι μεγαλύτερη, ίση ή μικρότερη από 50 °C; Να δικαιολογήσετε την απάντησή σας.",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p><span class='text-white'>α.</span> Ενδόθερμες ονομάζονται οι αντιδράσεις κατά τις οποίες απορροφάται ενέργεια με μορφή θερμότητας από το περιβάλλον.</p><p><span class='text-white'>β.</span> Το ψήσιμο ενός κέικ: η μαγειρική σόδα διασπάται απορροφώντας θερμότητα και παράγει το διοξείδιο του άνθρακα που «φουσκώνει» το κέικ. Άλλο παράδειγμα είναι η αντίδραση ενός αναβράζοντος δισκίου με το νερό, κατά την οποία το ποτήρι κρυώνει.</p><p class='text-purple-200 font-normal text-sm'>Η εξάτμιση του οινοπνεύματος απορροφά θερμότητα, αλλά δεν είναι χημική αντίδραση· είναι φυσικό φαινόμενο (αλλαγή φυσικής κατάστασης).</p><p><span class='text-white'>γ.</span> Μικρότερη από 50 °C. Στις ενδόθερμες αντιδράσεις απορροφάται θερμότητα από το περιβάλλον, οπότε η θερμοκρασία του περιβάλλοντος (εδώ του δοχείου) μειώνεται.</p></div>"
  },
  {
    "chapterId": "chapter-8",
    "q": "13. Ποια από τα ακόλουθα μεγέθη δεν μεταβάλλονται κατά τη διάρκεια μιας χημικής αντίδρασης; Να δικαιολογήσετε την απάντησή σας.<br>Α. Τα σημεία βρασμού των ουσιών.<br>Β. Οι μάζες των αντιδρώντων σωμάτων.<br>Γ. Η συνολική μάζα του συστήματος αντιδρώντων και προϊόντων.<br>Δ. Η ενεργειακή κατάσταση των σωμάτων.<br>Ε. Η θερμοκρασία του περιβάλλοντος.",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p>Δεν μεταβάλλεται η <span class='text-amber-300'>συνολική μάζα του συστήματος αντιδρώντων και προϊόντων (Γ)</span>, σύμφωνα με την αρχή διατήρησης της μάζας: όση μάζα αντιδρώντων καταναλώνεται, τόση μάζα προϊόντων παράγεται.</p><p>Τα υπόλοιπα μεταβάλλονται:</p><p><span class='text-white'>Α.</span> Παράγονται νέες ουσίες με διαφορετικές ιδιότητες, άρα και με διαφορετικά σημεία βρασμού (το σημείο βρασμού κάθε συγκεκριμένης ουσίας είναι βέβαια σταθερό, αφού είναι φυσική σταθερά).</p><p><span class='text-white'>Β.</span> Οι μάζες των αντιδρώντων ελαττώνονται, καθώς αυτά καταναλώνονται.</p><p><span class='text-white'>Δ.</span> Κάθε χημική αντίδραση συνοδεύεται από έκλυση ή απορρόφηση ενέργειας, άρα η ενέργεια των σωμάτων μεταβάλλεται.</p><p><span class='text-white'>Ε.</span> Η θερμοκρασία του περιβάλλοντος αυξάνεται στις εξώθερμες και ελαττώνεται στις ενδόθερμες αντιδράσεις.</p></div>"
  },
  {
    "chapterId": "chapter-8",
    "q": "16. Να συμπληρώσετε τα κενά με τις κατάλληλες λέξεις ή αριθμούς:<br>α. Το μεθάνιο καίγεται με το οξυγόνο του αέρα και παράγονται άνθρακας διοξείδιο και νερό, όπως φαίνεται στα προσομοιώματα. Η χημική εξίσωση που περιγράφει την αντίδραση είναι: <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>. Κατά την αντίδραση ορισμένης ποσότητας μεθανίου με 64 g οξυγόνου παράχθηκαν 44 g άνθρακα διοξειδίου και 36 g νερού. Η ποσότητα του μεθανίου που κάηκε ήταν <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> g. Η καύση του μεθανίου, όπως και όλες οι καύσεις, είναι μια <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> αντίδραση, με αποτέλεσμα η θερμοκρασία του περιβάλλοντος να <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>.<img src='/images/bGymnasiou/ch8_q16_methane.jpg' alt='Προσομοιώματα της καύσης του μεθανίου' class='block mx-auto my-4 w-full rounded-xl bg-white p-2' style='max-width:480px'>β. Το άζωτο αντιδρά με υδρογόνο κάτω από ορισμένες συνθήκες και παράγει αμμωνία. Αν αντιδράσουν 56 g αζώτου με 12 g υδρογόνου, θα παραχθούν <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> g <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>, βάσει της αρχής <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>. Κατά τη διάρκεια της αντίδρασης εκλύεται θερμότητα και η <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> του περιβάλλοντος <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>, γιατί η αντίδραση είναι <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>.",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p>α. Το μεθάνιο καίγεται με το οξυγόνο του αέρα και παράγονται άνθρακας διοξείδιο και νερό, όπως φαίνεται στα προσομοιώματα. Η χημική εξίσωση που περιγράφει την αντίδραση είναι: <span class='text-amber-300 underline decoration-dotted underline-offset-4'>CH<sub>4</sub> + 2O<sub>2</sub> → CO<sub>2</sub> + 2H<sub>2</sub>O</span>. Κατά την αντίδραση ορισμένης ποσότητας μεθανίου με 64 g οξυγόνου παράχθηκαν 44 g άνθρακα διοξειδίου και 36 g νερού. Η ποσότητα του μεθανίου που κάηκε ήταν <span class='text-amber-300 underline decoration-dotted underline-offset-4'>16</span> g. Η καύση του μεθανίου, όπως και όλες οι καύσεις, είναι μια <span class='text-amber-300 underline decoration-dotted underline-offset-4'>εξώθερμη</span> αντίδραση, με αποτέλεσμα η θερμοκρασία του περιβάλλοντος να <span class='text-amber-300 underline decoration-dotted underline-offset-4'>αυξάνεται</span>.</p><p>β. Το άζωτο αντιδρά με υδρογόνο κάτω από ορισμένες συνθήκες και παράγει αμμωνία. Αν αντιδράσουν 56 g αζώτου με 12 g υδρογόνου, θα παραχθούν <span class='text-amber-300 underline decoration-dotted underline-offset-4'>68</span> g <span class='text-amber-300 underline decoration-dotted underline-offset-4'>αμμωνίας</span>, βάσει της αρχής <span class='text-amber-300 underline decoration-dotted underline-offset-4'>διατήρησης της μάζας</span>. Κατά τη διάρκεια της αντίδρασης εκλύεται θερμότητα και η <span class='text-amber-300 underline decoration-dotted underline-offset-4'>θερμοκρασία</span> του περιβάλλοντος <span class='text-amber-300 underline decoration-dotted underline-offset-4'>αυξάνεται</span>, γιατί η αντίδραση είναι <span class='text-amber-300 underline decoration-dotted underline-offset-4'>εξώθερμη</span>.</p><p class='text-purple-200 font-normal text-sm'>Μάζα μεθανίου = 44 + 36 − 64 = 16 g· μάζα αμμωνίας = 56 + 12 = 68 g (αρχή διατήρησης της μάζας).</p></div>"
  },
  {
    "chapterId": "chapter-9",
    "q": "1. α. Με τι ασχολείται η χημική σύνθεση;<br>β. Να εξηγήσετε τους λόγους για τους οποίους οι επιστήμονες παρασκευάζουν συνθετικά ουσίες οι οποίες υπάρχουν στη φύση.<br>γ. Να βρείτε ένα υλικό ή φάρμακο καθημερινής χρήσης που παρασκευάζεται βιομηχανικά και να συγκεντρώσετε πληροφορίες γι’ αυτό.",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p><span class='text-white'>α.</span> Η χημική σύνθεση ασχολείται με την παρασκευή χημικών ουσιών από άλλες, απλούστερες ουσίες ή πρώτες ύλες, μέσω χημικών αντιδράσεων, σε εργαστηριακή ή βιομηχανική κλίμακα. Με τη χημική σύνθεση παρασκευάζονται τόσο ουσίες που υπάρχουν στη φύση όσο και νέες ουσίες που δεν υπάρχουν στη φύση (π.χ. πλαστικά, πολλά φάρμακα). Για τον σχεδιασμό της χρειάζεται να γνωρίζουμε τη σύσταση, τη δομή και τις ιδιότητες των ουσιών.</p><p><span class='text-white'>β.</span> Οι επιστήμονες παρασκευάζουν συνθετικά ουσίες που υπάρχουν στη φύση για πολλούς λόγους:</p><ul class='list-disc ml-5 space-y-1'><li>ανάγκη παραγωγής μεγάλων ποσοτήτων, που δεν μπορούν να εξασφαλιστούν από τις φυσικές πηγές,</li><li>μελέτη των ιδιοτήτων μιας ουσίας,</li><li>αυξημένη καθαρότητα της ουσίας, χωρίς άλλες προσμείξεις,</li><li>μικρότερο κόστος και προστασία των φυσικών πόρων (π.χ. των φυτών ή των ζώων από τα οποία θα έπρεπε να απομονωθεί η ουσία).</li></ul><p><span class='text-white'>γ.</span> Ενδεικτική απάντηση – η ασπιρίνη (ακετυλοσαλικυλικό οξύ): είναι ένα από τα πιο διαδεδομένα φάρμακα και χρησιμοποιείται ως παυσίπονο, αντιπυρετικό και αντιφλεγμονώδες. Παρασκευάζεται βιομηχανικά από το σαλικυλικό οξύ. Συγγενική της ουσία, η σαλικίνη, υπάρχει στον φλοιό της ιτιάς, τον οποίο χρησιμοποιούσαν από την αρχαιότητα για την ανακούφιση από τον πόνο και τον πυρετό.</p></div>"
  },
  {
    "chapterId": "chapter-9",
    "q": "2. Στο ακόλουθο σχήμα δίνονται απλουστευμένα τα στάδια της σύνθεσης του Buna, ενός είδους συνθετικού καουτσούκ, από ανόργανες πρώτες ύλες. Να περιγράψετε τα διακριτά στάδια της σύνθεσής του.<img src='/images/bGymnasiou/ch9_q2_buna.png' alt='Στάδια της σύνθεσης του συνθετικού καουτσούκ Buna' class='block mx-auto my-4 w-full rounded-xl bg-white p-2' style='max-width:760px'>",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p><span class='text-white'>1.</span> Το ανθρακασβέστιο (CaC<sub>2</sub>) αντιδρά με νερό και παράγεται ακετυλένιο (CH≡CH).</p><p><span class='text-white'>2.</span> Δύο μόρια ακετυλενίου ενώνονται (διμερισμός) και παράγεται βινυλακετυλένιο (CH<sub>2</sub>=CH–C≡CH).</p><p><span class='text-white'>3.</span> Το βινυλακετυλένιο αντιδρά με υδρογόνο και παράγεται 1,3-βουταδιένιο (CH<sub>2</sub>=CH–CH=CH<sub>2</sub>).</p><p><span class='text-white'>4.</span> Τέλος, πολλά μόρια 1,3-βουταδιενίου ενώνονται (πολυμερισμός) και σχηματίζεται το πολυμερές Buna, <span class='whitespace-nowrap'>(–CH<sub>2</sub>–CH=CH–CH<sub>2</sub>–)<sub>ν</sub></span>.</p></div>"
  },
  {
    "chapterId": "chapter-9",
    "q": "3. α. Με τι ασχολείται η χημική ανάλυση;<br>β. Να εξηγήσετε τους λόγους για τους οποίους η χημική ανάλυση έμμεσα προστατεύει τους καταναλωτές από ενδεχόμενες νοθείες στα τρόφιμα, στα φάρμακα κ.λπ.",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p><span class='text-white'>α.</span> Η χημική ανάλυση προσδιορίζει τη σύσταση των υλικών σωμάτων τόσο ποιοτικά (ποιες ουσίες περιέχουν) όσο και ποσοτικά (σε ποια ποσότητα).</p><p><span class='text-white'>β.</span> Με τη χημική ανάλυση γίνεται ο έλεγχος της ποιότητας και της ασφάλειας των καταναλωτικών προϊόντων (τρόφιμα, φάρμακα, υλικά συσκευασίας κ.ά.). Έτσι εντοπίζονται νοθείες, προσμείξεις ή επικίνδυνες ουσίες πριν τα προϊόντα φτάσουν στους καταναλωτές. Η χημική ανάλυση χρησιμοποιείται επίσης στη διάγνωση ασθενειών, στον έλεγχο ντόπινγκ, στην ανάλυση υπολειμμάτων (π.χ. φυτοφαρμάκων) και στην εγκληματολογία.</p></div>"
  },
  {
    "chapterId": "chapter-9",
    "q": "4. Κατά την περίοδο της πανδημίας COVID-19 ο Εθνικός Οργανισμός Δημόσιας Υγείας (ΕΟΔΥ) έδινε στη δημοσιότητα προβλέψεις για την εξέλιξή της, οι οποίες συνήθως επιβεβαιώνονταν έπειτα από μικρό χρονικό διάστημα. Να ανατρέξετε σε δημοσιεύματα της εποχής και να απαντήσετε στις ερωτήσεις.<br>α. Σε ποιες μετρήσεις στηρίζονταν οι προβλέψεις που ανακοίνωνε ο ΕΟΔΥ;<br>β. Πώς και ποιοι πραγματοποιούσαν τις μετρήσεις αυτές;",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p><span class='text-white'>α.</span> Οι προβλέψεις στηρίζονταν κυρίως σε μετρήσεις του ιικού φορτίου, δηλαδή της ποσότητας του γενετικού υλικού του ιού SARS-CoV-2, στα αστικά λύματα (επιδημιολογία λυμάτων), καθώς και στον αριθμό των κρουσμάτων από τα διαγνωστικά τεστ, στο ποσοστό των θετικών τεστ, στις νοσηλείες και στη διαθεσιμότητα των πόρων του συστήματος υγείας. Η αύξηση του ιικού φορτίου στα λύματα εμφανίζεται μερικές ημέρες πριν από την αύξηση των κρουσμάτων, γι’ αυτό οι προβλέψεις επιβεβαιώνονταν λίγο αργότερα.</p><p><span class='text-white'>β.</span> Δείγματα λυμάτων συλλέγονταν από τις εγκαταστάσεις επεξεργασίας λυμάτων των πόλεων και αναλύονταν με μεθόδους χημικής (μοριακής) ανάλυσης σε εργαστήρια πανεπιστημίων, σε συνεργασία με τον ΕΟΔΥ. Τα διαγνωστικά τεστ (μοριακά PCR και rapid) γίνονταν σε νοσοκομεία, κέντρα υγείας, δημόσια και ιδιωτικά διαγνωστικά εργαστήρια, ενώ τα στοιχεία συγκέντρωναν και αξιολογούσαν επιδημιολογικές ομάδες.</p></div>"
  },
  {
    "chapterId": "chapter-9",
    "q": "5. Πολλά βαρέα μέταλλα, όπως ο μόλυβδος (Pb), είναι τοξικά για τον άνθρωπο και ενοχοποιούνται για πρόκληση καρκίνου και σοβαρών ασθενειών του κεντρικού νευρικού συστήματος· γι’ αυτό υπάρχουν αυστηρά όρια για την περιεκτικότητά τους στο πόσιμο νερό.<br>α. Πώς ελέγχεται η ύπαρξη και η ποσότητα των βαρέων μετάλλων στο νερό;<br>β. Από την 1η Δεκεμβρίου 2013, το Υπουργείο Υγείας μείωσε το επιτρεπόμενο όριο μολύβδου στο πόσιμο νερό στα 10 μg/L. Σε ένα χημικό εργαστήριο αναλύονται 10 mL του νερού μιας πηγής και ανιχνεύονται 2 · 10<sup>−8</sup> g μολύβδου. Είναι κατάλληλο για πόσιμο αυτό το νερό;",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p><span class='text-white'>α.</span> Η ύπαρξη και η ποσότητα των βαρέων μετάλλων στο νερό ελέγχονται με τις μεθόδους της χημικής ανάλυσης (ποιοτικής και ποσοτικής).</p><p><span class='text-white'>β.</span> Στα 10 mL νερού της πηγής περιέχονται 2 · 10<sup>−8</sup> g μολύβδου.<br>Στα 1000 mL (1 L) θα περιέχονται 100 · 2 · 10<sup>−8</sup> g = 2 · 10<sup>−6</sup> g = 2 μg μολύβδου.</p><p>Το επιτρεπόμενο όριο είναι 10 μg/L (δηλαδή 10 · 10<sup>−6</sup> g/L). Αφού 2 μg/L < 10 μg/L, το νερό είναι κατάλληλο για πόσιμο ως προς τον μόλυβδο.</p></div>"
  },
  {
    "chapterId": "chapter-9",
    "q": "6. α. Τι είναι η ρύπανση του περιβάλλοντος;<br>β. Ποιες ανθρώπινες δραστηριότητες επιβαρύνουν το περιβάλλον με ρύπους;<br>γ. Στον ακόλουθο πίνακα να συμπληρώσετε τους κυριότερους ρύπους, την πηγή προέλευσής τους και τις επιπτώσεις τους στο περιβάλλον και στα οικοσυστήματα.<div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><thead class='bg-white/10'><tr><th class='py-2 px-3 font-semibold text-white'>Ρύπος</th><th class='py-2 px-3 font-semibold text-white'>Πηγή</th><th class='py-2 px-3 font-semibold text-white'>Επιπτώσεις</th></tr></thead><tbody class='divide-y divide-white/10'><tr><td colspan='3' class='py-2 px-3 font-semibold text-sky-300 bg-white/5'>Ατμοσφαιρικοί ρύποι</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>1. Άνθρακας διοξείδιο (CO<sub>2</sub>)</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>2. Θείο διοξείδιο (SO<sub>2</sub>)</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>3. Οξείδια του αζώτου (NO<sub>x</sub>)</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>4. Άκαυστοι υδρογονάνθρακες (VOCs)</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td colspan='3' class='py-2 px-3 font-semibold text-sky-300 bg-white/5'>Ρύποι εδάφους</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>1. …</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>2. …</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>3. …</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>4. …</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td colspan='3' class='py-2 px-3 font-semibold text-sky-300 bg-white/5'>Ρύποι υδάτινου περιβάλλοντος</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>1. …</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>2. …</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>3. …</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>4. …</td><td class='py-2 px-3 font-normal text-white/40'>…</td><td class='py-2 px-3 font-normal text-white/40'>…</td></tr></tbody></table></div>",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p><span class='text-white'>α.</span> Ρύπανση του περιβάλλοντος είναι η επιβάρυνση του εδάφους, των υδάτινων πόρων και της ατμόσφαιρας από ανθρώπινες δραστηριότητες με χημικές ουσίες, οι οποίες είτε δεν υπάρχουν κανονικά σε αυτά είτε υπάρχουν σε μικρότερες ποσότητες, με αποτέλεσμα να προκαλούνται βλάβες στους οργανισμούς και στα οικοσυστήματα. Οι ουσίες αυτές ονομάζονται ρύποι και, όταν είναι υγρές, λύματα.</p><p><span class='text-white'>β.</span> Οι μεταφορές, η βιομηχανία, τα θερμοηλεκτρικά εργοστάσια, η αγροτική παραγωγή, οι καυστήρες θέρμανσης, τα αστικά απορρίμματα και η αστική χρήση του νερού.</p><p><span class='text-white'>γ.</span> Ενδεικτική απάντηση:</p><div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><thead class='bg-white/10'><tr><th class='py-2 px-3 font-semibold text-white'>Ρύπος</th><th class='py-2 px-3 font-semibold text-white'>Πηγή</th><th class='py-2 px-3 font-semibold text-white'>Επιπτώσεις</th></tr></thead><tbody class='divide-y divide-white/10'><tr><td colspan='3' class='py-2 px-3 font-semibold text-sky-300 bg-white/5'>Ατμοσφαιρικοί ρύποι</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>1. Άνθρακας διοξείδιο (CO<sub>2</sub>)</td><td class='py-2 px-3 font-bold text-emerald-400'>Καύση ορυκτών καυσίμων (μεταφορές, βιομηχανία, θερμοηλεκτρικά εργοστάσια, θέρμανση), αποψίλωση δασών</td><td class='py-2 px-3 font-bold text-emerald-400'>Ενίσχυση του φαινομένου του θερμοκηπίου – υπερθέρμανση του πλανήτη, κλιματική αλλαγή</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>2. Θείο διοξείδιο (SO<sub>2</sub>)</td><td class='py-2 px-3 font-bold text-emerald-400'>Καύση ορυκτών καυσίμων που περιέχουν θείο (πετρέλαιο, γαιάνθρακες), βιομηχανία, ηφαίστεια</td><td class='py-2 px-3 font-bold text-emerald-400'>Όξινη βροχή (καταστροφή δασών, μνημείων, οξίνιση λιμνών), αναπνευστικά προβλήματα</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>3. Οξείδια του αζώτου (NO<sub>x</sub>)</td><td class='py-2 px-3 font-bold text-emerald-400'>Καυσαέρια αυτοκινήτων, καύσεις σε υψηλές θερμοκρασίες, κεραυνοί</td><td class='py-2 px-3 font-bold text-emerald-400'>Όξινη βροχή, φωτοχημικό νέφος, αναπνευστικά προβλήματα</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>4. Άκαυστοι υδρογονάνθρακες (VOCs)</td><td class='py-2 px-3 font-bold text-emerald-400'>Ατελής καύση καυσίμων, εξάτμιση καυσίμων και διαλυτών (π.χ. από χρώματα)</td><td class='py-2 px-3 font-bold text-emerald-400'>Φωτοχημικό νέφος, βλάβες στην υγεία (ορισμένοι είναι καρκινογόνοι)</td></tr><tr><td colspan='3' class='py-2 px-3 font-semibold text-sky-300 bg-white/5'>Ρύποι εδάφους</td></tr><tr><td class='py-2 px-3 font-bold text-emerald-400'>1. Βαρέα μέταλλα (μόλυβδος, κάδμιο, υδράργυρος, χρώμιο)</td><td class='py-2 px-3 font-bold text-emerald-400'>Βιομηχανία, βυρσοδεψεία, μεταλλεία, μπαταρίες</td><td class='py-2 px-3 font-bold text-emerald-400'>Τοξικότητα, συσσώρευση στους οργανισμούς και είσοδος στην τροφική αλυσίδα</td></tr><tr><td class='py-2 px-3 font-bold text-emerald-400'>2. Λιπάσματα</td><td class='py-2 px-3 font-bold text-emerald-400'>Αγροτική παραγωγή</td><td class='py-2 px-3 font-bold text-emerald-400'>Υποβάθμιση του εδάφους, μεταφορά στα υπόγεια νερά, ευτροφισμός</td></tr><tr><td class='py-2 px-3 font-bold text-emerald-400'>3. Φυτοφάρμακα (εντομοκτόνα, ζιζανιοκτόνα)</td><td class='py-2 px-3 font-bold text-emerald-400'>Αγροτική παραγωγή</td><td class='py-2 px-3 font-bold text-emerald-400'>Θανάτωση ωφέλιμων οργανισμών, υπολείμματα στα τρόφιμα, είσοδος στην τροφική αλυσίδα</td></tr><tr><td class='py-2 px-3 font-bold text-emerald-400'>4. Σκουπίδια και πλαστικά</td><td class='py-2 px-3 font-bold text-emerald-400'>Αστικά και βιομηχανικά απόβλητα, χωματερές</td><td class='py-2 px-3 font-bold text-emerald-400'>Ρύπανση του εδάφους και των υπόγειων νερών από τα στραγγίσματα, μικροπλαστικά</td></tr><tr><td colspan='3' class='py-2 px-3 font-semibold text-sky-300 bg-white/5'>Ρύποι υδάτινου περιβάλλοντος</td></tr><tr><td class='py-2 px-3 font-bold text-emerald-400'>1. Αστικά λύματα και απορρυπαντικά</td><td class='py-2 px-3 font-bold text-emerald-400'>Νοικοκυριά, αστικά απόβλητα</td><td class='py-2 px-3 font-bold text-emerald-400'>Ευτροφισμός, μικροβιακή μόλυνση, ασθένειες</td></tr><tr><td class='py-2 px-3 font-bold text-emerald-400'>2. Λιπάσματα</td><td class='py-2 px-3 font-bold text-emerald-400'>Αγροτική παραγωγή</td><td class='py-2 px-3 font-bold text-emerald-400'>Ευτροφισμός (υπερβολική ανάπτυξη φυκιών, έλλειψη οξυγόνου, θάνατος ψαριών)</td></tr><tr><td class='py-2 px-3 font-bold text-emerald-400'>3. Πετρελαιοκηλίδες και λάδια</td><td class='py-2 px-3 font-bold text-emerald-400'>Θαλάσσιες μεταφορές, ατυχήματα δεξαμενόπλοιων</td><td class='py-2 px-3 font-bold text-emerald-400'>Θάνατος θαλάσσιων οργανισμών, εμπόδιο στη διάλυση του οξυγόνου</td></tr><tr><td class='py-2 px-3 font-bold text-emerald-400'>4. Βαρέα μέταλλα και πλαστικά</td><td class='py-2 px-3 font-bold text-emerald-400'>Βιομηχανία, βυρσοδεψεία, μεταλλεία, αστικά απόβλητα</td><td class='py-2 px-3 font-bold text-emerald-400'>Συσσώρευση στην τροφική αλυσίδα, υποβάθμιση των ωκεανών, εξαφάνιση ειδών</td></tr></tbody></table></div></div>"
  },
  {
    "chapterId": "chapter-9",
    "q": "7. Να προτείνετε τουλάχιστον πέντε τρόπους για την αντιμετώπιση της περιβαλλοντικής ρύπανσης.",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><ul class='list-disc ml-5 space-y-1'><li>Έρευνα και ανάπτυξη νέων τεχνολογιών αντιρρύπανσης και αξιοποίησης των ήπιων μορφών ενέργειας.</li><li>Αλλαγή του τρόπου παραγωγής και χρήσης των χημικών ουσιών, με εφαρμογή των αρχών της Πράσινης Χημείας.</li><li>Αλλαγή του παραγωγικού μοντέλου από γραμμική σε κυκλική οικονομία.</li><li>Χρήση ανανεώσιμων πηγών ενέργειας αντί για ορυκτά καύσιμα.</li><li>Επεξεργασία και καθαρισμός των λυμάτων.</li><li>Νομοθεσία για τη χρήση και τη διαχείριση των χημικών ουσιών, καθώς και για τη διαχείριση των απορριμμάτων κάθε είδους.</li><li>Μείωση των ενεργειακών αναγκών για θέρμανση, ψύξη και μετακίνηση.</li><li>Αλλαγή της καταναλωτικής νοοτροπίας, με μείωση των ρύπων στην πηγή τους.</li><li>Ανακύκλωση και επαναχρησιμοποίηση προϊόντων.</li><li>Αλλαγή των συνηθειών μετακίνησης (μέσα μαζικής μεταφοράς, ποδήλατο, περπάτημα).</li></ul></div>"
  },
  {
    "chapterId": "chapter-9",
    "q": "8. Να αντιστοιχίσετε τους ρύπους της πρώτης στήλης με μία ή περισσότερες πηγές της δεύτερης στήλης από τις οποίες είναι δυνατό να παραχθούν.<div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><thead class='bg-white/10'><tr><th class='py-2 px-3 font-semibold text-white'>Α. Ρύπος</th><th class='py-2 px-3 font-semibold text-white'>Β. Πηγή</th></tr></thead><tbody class='divide-y divide-white/10'><tr><td class='py-2 px-3 font-normal text-purple-100'>1. Ιόντα μετάλλων</td><td class='py-2 px-3 font-normal text-purple-100'>Β1. Βιομηχανία</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>2. Νιτρικά ιόντα</td><td class='py-2 px-3 font-normal text-purple-100'>Β2. Σκουπίδια</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>3. Επικίνδυνοι διαλύτες</td><td class='py-2 px-3 font-normal text-purple-100'>Β3. Λιπάσματα</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>4. Οργανικές ουσίες</td><td class='py-2 px-3 font-normal text-purple-100'>Β4. Μεταφορές – ατυχήματα</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>5. Πετρελαιοκηλίδες</td><td class='py-2 px-3 font-normal text-purple-100'></td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>6. Πλαστικά</td><td class='py-2 px-3 font-normal text-purple-100'></td></tr></tbody></table></div>",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><thead class='bg-white/10'><tr><th class='py-2 px-3 font-semibold text-white'>Ρύπος</th><th class='py-2 px-3 font-semibold text-white'>Αντιστοίχιση</th></tr></thead><tbody class='divide-y divide-white/10'><tr><td class='py-2 px-3 font-normal text-purple-100'>1. Ιόντα μετάλλων</td><td class='py-2 px-3 font-bold text-emerald-400'>Α1 → Β1, Β2</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>2. Νιτρικά ιόντα</td><td class='py-2 px-3 font-bold text-emerald-400'>Α2 → Β3</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>3. Επικίνδυνοι διαλύτες</td><td class='py-2 px-3 font-bold text-emerald-400'>Α3 → Β1</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>4. Οργανικές ουσίες</td><td class='py-2 px-3 font-bold text-emerald-400'>Α4 → Β1, Β2</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>5. Πετρελαιοκηλίδες</td><td class='py-2 px-3 font-bold text-emerald-400'>Α5 → Β4</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>6. Πλαστικά</td><td class='py-2 px-3 font-bold text-emerald-400'>Α6 → Β2</td></tr></tbody></table></div><p class='text-purple-200 font-normal text-sm'>Τα ιόντα μετάλλων προέρχονται από τη βιομηχανία, αλλά και από σκουπίδια όπως οι μπαταρίες και οι ηλεκτρονικές συσκευές. Οι οργανικές ουσίες προέρχονται από βιομηχανικά απόβλητα, αλλά και από τα οργανικά απορρίμματα (σκουπίδια).</p></div>"
  },
  {
    "chapterId": "chapter-9",
    "q": "9. Να συμπληρώσετε τα κενά με τις κατάλληλες λέξεις ή φράσεις.<br>α. Ρύπανση του νερού είναι η άμεση ή έμμεση εισαγωγή <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> ή <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> στο υδάτινο περιβάλλον, που <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>.<br>β. Τα νερά των ποταμών, των λιμνών και των θαλασσών ρυπαίνονται από <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>, <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span> και <span class='inline-block min-w-[4.5rem] border-b-2 border-dotted border-white/60 mx-1'>&nbsp;</span>.",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p>α. Ρύπανση του νερού είναι η άμεση ή έμμεση εισαγωγή <span class='text-amber-300 underline decoration-dotted underline-offset-4'>απορριμμάτων</span> ή <span class='text-amber-300 underline decoration-dotted underline-offset-4'>αποβλήτων</span> στο υδάτινο περιβάλλον, που <span class='text-amber-300 underline decoration-dotted underline-offset-4'>υποβαθμίζει την ποιότητά του και το κάνει επικίνδυνο για τον άνθρωπο και τους άλλους οργανισμούς</span>.</p><p>β. Τα νερά των ποταμών, των λιμνών και των θαλασσών ρυπαίνονται από <span class='text-amber-300 underline decoration-dotted underline-offset-4'>τα βιομηχανικά απόβλητα</span>, <span class='text-amber-300 underline decoration-dotted underline-offset-4'>τα αστικά λύματα</span> και <span class='text-amber-300 underline decoration-dotted underline-offset-4'>την υπερβολική χρήση λιπασμάτων</span>.</p></div>"
  },
  {
    "chapterId": "chapter-9",
    "q": "10. Να αναφέρετε πέντε διαφορετικές κατηγορίες ουσιών που είναι ρύποι για τους υδάτινους πόρους.",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><ul class='list-disc ml-5 space-y-1'><li>βιομηχανικά απόβλητα, όπως οι διαλύτες και τα βαρέα μέταλλα,</li><li>λιπάσματα,</li><li>φυτοφάρμακα (παρασιτοκτόνα),</li><li>αστικά λύματα και απορρυπαντικά,</li><li>πετρέλαιο και λάδια (πετρελαιοκηλίδες),</li><li>πλαστικά και άλλα αστικά απορρίμματα.</li></ul></div>"
  },
  {
    "chapterId": "chapter-9",
    "q": "11. α. Να αναφέρετε ποιες συνήθειες πρέπει να αλλάξει η οικογένειά σας και το ευρύτερο κοινωνικό σας περιβάλλον για να προστατέψετε το νερό από τη ρύπανση.<br>β. Ποιες είναι οι πιο σοβαρές επιπτώσεις της ρύπανσης του νερού;<br>γ. Γιατί η εγκατάσταση βιομηχανικών μονάδων κοντά σε λίμνες και ποτάμια μπορεί να υποβαθμίσει το υδάτινο οικοσύστημα;",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p><span class='text-white'>α.</span> Ορισμένες συνήθειες που πρέπει να αλλάξουν είναι:</p><ul class='list-disc ml-5 space-y-1'><li>η εξοικονόμηση νερού στο σπίτι,</li><li>η σωστή διαχείριση των αποβλήτων και η ανακύκλωση (π.χ. τα τηγανόλαδα και τα φάρμακα να μην πετιούνται στους υπονόμους),</li><li>η μείωση της χρήσης χημικών λιπασμάτων και απορρυπαντικών,</li><li>η ενημέρωση και η εκπαίδευση σε τρόπους προστασίας του νερού.</li></ul><p><span class='text-white'>β.</span> Οι πιο σοβαρές επιπτώσεις της ρύπανσης του νερού είναι:</p><ul class='list-disc ml-5 space-y-1'><li>σοβαρά προβλήματα υγείας στους ανθρώπους που καταναλώνουν το νερό ή τρόφιμα από αυτό,</li><li>καταστροφή των υδάτινων οικοσυστημάτων (π.χ. θάνατος ψαριών από ευτροφισμό),</li><li>υποβάθμιση της ποιότητας ζωής,</li><li>αρνητικές επιπτώσεις στην οικονομία (π.χ. αλιεία, τουρισμός).</li></ul><p><span class='text-white'>γ.</span> Γιατί τα απόβλητα των βιομηχανιών (π.χ. βαρέα μέταλλα, διαλύτες, θερμά νερά) μπορεί να καταλήξουν στις λίμνες και στα ποτάμια, προκαλώντας ρύπανση και υποβάθμιση της ποιότητας του νερού, διαταραχή της βιοποικιλότητας και της ισορροπίας των οικοσυστημάτων.</p></div>"
  },
  {
    "chapterId": "chapter-9",
    "q": "12. Να δικαιολογήσετε την ακόλουθη έκφραση: «Η ιδιότητα του νερού να είναι εξαιρετικά καλός διαλύτης για πάρα πολλές ουσίες έχει πολύ σοβαρά μειονεκτήματα».",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><p>Επειδή το νερό διαλύει πάρα πολλές ουσίες, διαλύει και πολλές επιβλαβείς ουσίες, όπως βαρέα μέταλλα, χημικά απόβλητα, φυτοφάρμακα και οργανικές τοξίνες. Οι ουσίες αυτές μεταφέρονται με το νερό σε μεγάλες αποστάσεις μέσω του υδρολογικού κύκλου (ποτάμια, υπόγεια νερά, θάλασσες) και ρυπαίνουν περιοχές μακριά από την πηγή της ρύπανσης, ενώ εύκολα καταλήγουν στους οργανισμούς και στον άνθρωπο.</p></div>"
  },
  {
    "chapterId": "chapter-9",
    "q": "14. Να αντιστοιχίσετε καθεμία από τις δραστηριότητες της στήλης Α με τους ρύπους που μπορεί να οφείλονται σε αυτή, στη στήλη Β.<div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><thead class='bg-white/10'><tr><th class='py-2 px-3 font-semibold text-white'>Α</th><th class='py-2 px-3 font-semibold text-white'>Β</th></tr></thead><tbody class='divide-y divide-white/10'><tr><td class='py-2 px-3 font-normal text-purple-100'>1. βυρσοδεψείο</td><td class='py-2 px-3 font-normal text-purple-100'>Β1. βαρέα μέταλλα</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>2. πλύσιμο πιάτων</td><td class='py-2 px-3 font-normal text-purple-100'>Β2. λιπάσματα</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>3. καλλιέργεια λαχανικών</td><td class='py-2 px-3 font-normal text-purple-100'>Β3. απορρυπαντικά</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>4. μεταλλείο χρυσού</td><td class='py-2 px-3 font-normal text-purple-100'>Β4. λάδια</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>5. ακτοπλοΐα</td><td class='py-2 px-3 font-normal text-purple-100'>Β5. διαλύτες</td></tr></tbody></table></div>",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><div class='overflow-x-auto my-3'><table class='w-full text-left border-collapse bg-white/5 rounded-xl overflow-hidden text-sm'><thead class='bg-white/10'><tr><th class='py-2 px-3 font-semibold text-white'>Δραστηριότητα</th><th class='py-2 px-3 font-semibold text-white'>Αντιστοίχιση</th></tr></thead><tbody class='divide-y divide-white/10'><tr><td class='py-2 px-3 font-normal text-purple-100'>1. βυρσοδεψείο</td><td class='py-2 px-3 font-bold text-emerald-400'>Α1 → Β5, Β1</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>2. πλύσιμο πιάτων</td><td class='py-2 px-3 font-bold text-emerald-400'>Α2 → Β3</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>3. καλλιέργεια λαχανικών</td><td class='py-2 px-3 font-bold text-emerald-400'>Α3 → Β2</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>4. μεταλλείο χρυσού</td><td class='py-2 px-3 font-bold text-emerald-400'>Α4 → Β1</td></tr><tr><td class='py-2 px-3 font-normal text-purple-100'>5. ακτοπλοΐα</td><td class='py-2 px-3 font-bold text-emerald-400'>Α5 → Β4</td></tr></tbody></table></div><p class='text-purple-200 font-normal text-sm'>Τα βυρσοδεψεία χρησιμοποιούν διαλύτες, αλλά και άλατα χρωμίου (βαρύ μέταλλο). Στα μεταλλεία χρυσού χρησιμοποιούνται τοξικές ουσίες, όπως ο υδράργυρος.</p></div>"
  },
  {
    "chapterId": "chapter-9",
    "q": "16. Να συμπληρώσετε την ακροστιχίδα. Η λέξη στην ακροστιχίδα δηλώνει τα υγρά ή ημιστερεά απόβλητα από την αστική, βιομηχανική ή γεωργική χρήση του νερού.<br>1. Ρύποι που προέρχονται από τις θαλάσσιες μεταφορές.<br>2. Σε αυτά τα οικοσυστήματα ανήκουν τα καβούρια, τα φύκια και τα ψάρια.<br>3. Τα βαρέα είναι τοξικοί ρύποι, οι οποίοι βιοσυσσωρεύονται στους οργανισμούς.<br>4. Τα βρόμικα νερά από τα πλυσίματα είναι τέτοια λύματα.<br>5. Είναι πηγή μικροβιακής μόλυνσης του νερού, όταν πετιούνται στους υπονόμους.<br>6. Από αυτή πεθαίνουν τα ψάρια εξαιτίας του ευτροφισμού.<div class='overflow-x-auto my-3'><table class='border-collapse text-sm font-bold'><tbody><tr><td class='pr-2 text-right text-white/60 font-normal'>1</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>2</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>3</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>4</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>5</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>6</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>&nbsp;</td></tr></tbody></table></div>",
    "a": "<div class='text-purple-300 font-bold leading-relaxed space-y-2'><div class='overflow-x-auto my-3'><table class='border-collapse text-sm font-bold'><tbody><tr><td class='pr-2 text-right text-white/60 font-normal'>1</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>Λ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Α</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Δ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ι</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Α</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>2</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>Υ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Δ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Α</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Τ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ι</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ν</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Α</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>3</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>Μ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ε</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Τ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Α</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Λ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Λ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Α</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>4</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>Α</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Σ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Τ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ι</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Κ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Α</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>5</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>Τ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ρ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ο</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Φ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ε</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Σ</td></tr><tr><td class='pr-2 text-right text-white/60 font-normal'>6</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-yellow-400 text-gray-900'>Α</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Σ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Φ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Υ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ξ</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Ι</td><td class='w-7 h-7 min-w-7 text-center border border-white/30 bg-white/5 text-emerald-300'>Α</td></tr></tbody></table></div><p>Η λέξη της ακροστιχίδας είναι: <span class='text-yellow-400 tracking-widest'>ΛΥΜΑΤΑ</span></p></div>"
  }
];

export const bGymnasiouMCQ: MCQ[] = [
  {
    "chapterId": "chapter-1",
    "q": "4. α. Η λειτουργία του ανθρώπινου οργανισμού στηρίζεται σε πολύπλοκες χημικές μεταβολές που πραγματοποιούνται στο σώμα.",
    "options": [
      {
        "text": "Σωστό",
        "correct": true
      },
      {
        "text": "Λάθος",
        "correct": false
      }
    ],
    "explanation": "<b>Σωστό.</b> Όλες οι λειτουργίες του οργανισμού, όπως η πέψη και η αναπνοή, στηρίζονται σε χημικές μεταβολές."
  },
  {
    "chapterId": "chapter-1",
    "q": "4. β. Ο κόσμος που μας περιβάλλει αποτελείται από χημικές ουσίες.",
    "options": [
      {
        "text": "Σωστό",
        "correct": true
      },
      {
        "text": "Λάθος",
        "correct": false
      }
    ],
    "explanation": "<b>Σωστό.</b> Όλα τα υλικά σώματα, φυσικά ή συνθετικά, ακόμη και ο αέρας και το νερό, αποτελούνται από χημικές ουσίες."
  },
  {
    "chapterId": "chapter-1",
    "q": "4. γ. Η Χημεία βοηθά τον άνθρωπο να αντιμετωπίσει τον πόνο.",
    "options": [
      {
        "text": "Σωστό",
        "correct": true
      },
      {
        "text": "Λάθος",
        "correct": false
      }
    ],
    "explanation": "<b>Σωστό.</b> Η Χημεία παρασκευάζει φάρμακα, όπως τα παυσίπονα και τα αναισθητικά."
  },
  {
    "chapterId": "chapter-1",
    "q": "4. δ. Η Χημεία δεν έχει σχέση με τα τρόφιμα και τα υλικά που χρησιμοποιούνται στις κατασκευές.",
    "options": [
      {
        "text": "Σωστό",
        "correct": false
      },
      {
        "text": "Λάθος",
        "correct": true
      }
    ],
    "explanation": "<b>Λάθος.</b> Η Χημεία μελετά τη σύσταση και ελέγχει την ποιότητα των τροφίμων, ενώ παράγει και πολλά από τα υλικά των κατασκευών (τσιμέντο, χάλυβα, χρώματα, πλαστικά)."
  },
  {
    "chapterId": "chapter-1",
    "q": "4. ε. Ένα από τα αντικείμενα της Χημείας είναι η παραγωγή καλλυντικών και αρωμάτων.",
    "options": [
      {
        "text": "Σωστό",
        "correct": true
      },
      {
        "text": "Λάθος",
        "correct": false
      }
    ],
    "explanation": "<b>Σωστό.</b> Τα καλλυντικά και τα αρώματα είναι χημικά προϊόντα."
  },
  {
    "chapterId": "chapter-3",
    "q": "2. α. Δεν υπάρχει πρόβλημα επάρκειας νερού, διότι το 71% της Γης καλύπτεται από νερό.",
    "options": [
      {
        "text": "Σωστό",
        "correct": false
      },
      {
        "text": "Λάθος",
        "correct": true
      }
    ],
    "explanation": "<b>Λάθος.</b> Περίπου το 97% του νερού της Γης είναι αλμυρό και το μεγαλύτερο μέρος του γλυκού νερού βρίσκεται στους παγετώνες· μόνο περίπου το 1% μπορεί να αξιοποιηθεί από τον άνθρωπο."
  },
  {
    "chapterId": "chapter-3",
    "q": "2. β. Το νερό είναι απαραίτητο για την επιβίωση των ζώντων οργανισμών.",
    "options": [
      {
        "text": "Σωστό",
        "correct": true
      },
      {
        "text": "Λάθος",
        "correct": false
      }
    ],
    "explanation": "<b>Σωστό.</b> Χωρίς νερό δεν μπορεί να υπάρξει ζωή· όλες οι λειτουργίες των οργανισμών γίνονται με τη συμμετοχή του νερού."
  },
  {
    "chapterId": "chapter-3",
    "q": "2. γ. Ορισμένα φυτά, όπως οι κάκτοι, μπορούν να επιβιώσουν χωρίς καθόλου νερό.",
    "options": [
      {
        "text": "Σωστό",
        "correct": false
      },
      {
        "text": "Λάθος",
        "correct": true
      }
    ],
    "explanation": "<b>Λάθος.</b> Οι κάκτοι χρειάζονται πολύ λίγο νερό, το οποίο αποθηκεύουν στους ιστούς τους, αλλά δεν μπορούν να επιβιώσουν χωρίς καθόλου νερό."
  },
  {
    "chapterId": "chapter-3",
    "q": "2. δ. Η βιομηχανική ανάπτυξη του δυτικού κόσμου έχει αυξήσει κατά πολύ την κατανάλωση νερού.",
    "options": [
      {
        "text": "Σωστό",
        "correct": true
      },
      {
        "text": "Λάθος",
        "correct": false
      }
    ],
    "explanation": "<b>Σωστό.</b> Η βιομηχανία, η εντατική γεωργία και η αστικοποίηση έχουν αυξήσει κατά πολύ την κατανάλωση νερού."
  },
  {
    "chapterId": "chapter-3",
    "q": "2. ε. Τα στερεά τρόφιμα, όπως τα φρούτα, δεν περιέχουν νερό.",
    "options": [
      {
        "text": "Σωστό",
        "correct": false
      },
      {
        "text": "Λάθος",
        "correct": true
      }
    ],
    "explanation": "<b>Λάθος.</b> Τα φρούτα περιέχουν μεγάλες ποσότητες νερού· π.χ. το καρπούζι περιέχει περίπου 90% νερό."
  },
  {
    "chapterId": "chapter-3",
    "q": "5. α. Το νερό είναι το κύριο συστατικό:",
    "options": [
      {
        "text": "i. των φυτών",
        "correct": false
      },
      {
        "text": "ii. του ανθρώπινου σώματος",
        "correct": false
      },
      {
        "text": "iii. του γάλακτος",
        "correct": false
      },
      {
        "text": "iv. όλων των προηγούμενων",
        "correct": true
      }
    ],
    "explanation": "Σωστή απάντηση: iv. Το νερό είναι το κύριο συστατικό των φυτών, του ανθρώπινου σώματος (περίπου 66%) και του γάλακτος."
  },
  {
    "chapterId": "chapter-3",
    "q": "5. β. Το μεγαλύτερο ποσοστό του νερού στη Γη είναι:",
    "options": [
      {
        "text": "i. αλμυρό και βρίσκεται στους παγετώνες",
        "correct": false
      },
      {
        "text": "ii. γλυκό και βρίσκεται στους παγετώνες",
        "correct": false
      },
      {
        "text": "iii. αλμυρό και βρίσκεται στους ωκεανούς",
        "correct": true
      },
      {
        "text": "iv. πόσιμο και βρίσκεται στις λίμνες και στα ποτάμια",
        "correct": false
      }
    ],
    "explanation": "Σωστή απάντηση: iii. Περίπου το 97% του νερού της Γης είναι αλμυρό και βρίσκεται στους ωκεανούς και στις θάλασσες. Το γλυκό νερό είναι μόνο περίπου 3% και το μεγαλύτερο μέρος του βρίσκεται στους παγετώνες."
  },
  {
    "chapterId": "chapter-3",
    "q": "10. α. Το ψωμί είναι ένα ομογενές μείγμα.",
    "options": [
      {
        "text": "Σωστό",
        "correct": false
      },
      {
        "text": "Λάθος",
        "correct": true
      }
    ],
    "explanation": "<b>Λάθος.</b> Στο ψωμί διακρίνονται με γυμνό μάτι διαφορετικά μέρη (κόρα, ψίχα, πόροι με αέρα), άρα είναι ετερογενές μείγμα."
  },
  {
    "chapterId": "chapter-3",
    "q": "10. β. Το θαλασσινό νερό είναι ένα μείγμα.",
    "options": [
      {
        "text": "Σωστό",
        "correct": true
      },
      {
        "text": "Λάθος",
        "correct": false
      }
    ],
    "explanation": "<b>Σωστό.</b> Το θαλασσινό νερό είναι μείγμα (διάλυμα) νερού, αλάτων και άλλων ουσιών."
  },
  {
    "chapterId": "chapter-3",
    "q": "10. γ. Το αλατοπίπερο δεν είναι ούτε αλμυρό όπως το αλάτι, ούτε καυτερό όπως το πιπέρι.",
    "options": [
      {
        "text": "Σωστό",
        "correct": false
      },
      {
        "text": "Λάθος",
        "correct": true
      }
    ],
    "explanation": "<b>Λάθος.</b> Τα συστατικά ενός μείγματος διατηρούν τις ιδιότητές τους, οπότε το αλατοπίπερο είναι και αλμυρό και καυτερό."
  },
  {
    "chapterId": "chapter-3",
    "q": "10. δ. Ο γρανίτης είναι ένα πέτρωμα τα συστατικά του οποίου είναι διακριτά ακόμη και με γυμνό μάτι, επομένως είναι ένα ομογενές μείγμα.",
    "options": [
      {
        "text": "Σωστό",
        "correct": false
      },
      {
        "text": "Λάθος",
        "correct": true
      }
    ],
    "explanation": "<b>Λάθος.</b> Αφού τα συστατικά του διακρίνονται με γυμνό μάτι, ο γρανίτης είναι ετερογενές μείγμα."
  },
  {
    "chapterId": "chapter-3",
    "q": "10. ε. Δεν υπάρχουν στερεά μείγματα.",
    "options": [
      {
        "text": "Σωστό",
        "correct": false
      },
      {
        "text": "Λάθος",
        "correct": true
      }
    ],
    "explanation": "<b>Λάθος.</b> Υπάρχουν στερεά μείγματα, όπως το αλατοπίπερο, ο γρανίτης και τα κράματα (π.χ. ο ορείχαλκος)."
  },
  {
    "chapterId": "chapter-3",
    "q": "10. στ. Για να εξαφανιστεί η γλυκιά γεύση της ζάχαρης, αρκεί να αναμειχθεί με νερό.",
    "options": [
      {
        "text": "Σωστό",
        "correct": false
      },
      {
        "text": "Λάθος",
        "correct": true
      }
    ],
    "explanation": "<b>Λάθος.</b> Η ζάχαρη διατηρεί τις ιδιότητές της και στο διάλυμα, γι’ αυτό το ζαχαρόνερο είναι γλυκό."
  },
  {
    "chapterId": "chapter-3",
    "q": "10. ζ. Τα μείγματα σχηματίζονται με ανάμειξη των συστατικών τους σε καθορισμένη αναλογία.",
    "options": [
      {
        "text": "Σωστό",
        "correct": false
      },
      {
        "text": "Λάθος",
        "correct": true
      }
    ],
    "explanation": "<b>Λάθος.</b> Τα μείγματα σχηματίζονται με ανάμειξη των συστατικών τους σε οποιαδήποτε αναλογία· η σύστασή τους δεν είναι σταθερή."
  },
  {
    "chapterId": "chapter-3",
    "q": "13. α. Ένα μείγμα μπορεί να βρίσκεται:",
    "options": [
      {
        "text": "i. σε στερεή κατάσταση",
        "correct": false
      },
      {
        "text": "ii. σε υγρή κατάσταση",
        "correct": false
      },
      {
        "text": "iii. σε αέρια κατάσταση",
        "correct": false
      },
      {
        "text": "iv. σε στερεή, υγρή ή αέρια κατάσταση",
        "correct": true
      }
    ],
    "explanation": "Σωστή απάντηση: iv. Π.χ. το αλατοπίπερο (στερεό), το θαλασσινό νερό (υγρό) και ο αέρας (αέριο) είναι μείγματα."
  },
  {
    "chapterId": "chapter-3",
    "q": "13. β. Τα ετερογενή μείγματα:",
    "options": [
      {
        "text": "i. έχουν συστατικά που δεν διακρίνονται με γυμνό μάτι ή μικροσκόπιο",
        "correct": false
      },
      {
        "text": "ii. έχουν ίδιες ιδιότητες σε όλη τους την έκταση",
        "correct": false
      },
      {
        "text": "iii. σχηματίζονται με ανάμειξη των συστατικών τους σε καθορισμένες αναλογίες",
        "correct": false
      },
      {
        "text": "iv. έχουν συστατικά που διακρίνονται οπωσδήποτε με μικροσκόπιο",
        "correct": true
      }
    ],
    "explanation": "Σωστή απάντηση: iv. Στα ετερογενή μείγματα τα συστατικά διακρίνονται με γυμνό μάτι ή τουλάχιστον με μικροσκόπιο, και οι ιδιότητές τους δεν είναι ίδιες σε όλη τους την έκταση."
  },
  {
    "chapterId": "chapter-3",
    "q": "13. γ. Με εξέταση του αίματος στο μικροσκόπιο διακρίνονται τα ερυθρά αιμοσφαίρια και το πλάσμα. Επομένως το αίμα είναι:",
    "options": [
      {
        "text": "i. ομογενές μείγμα",
        "correct": false
      },
      {
        "text": "ii. ετερογενές μείγμα",
        "correct": true
      },
      {
        "text": "iii. δεν είναι μείγμα",
        "correct": false
      }
    ],
    "explanation": "Σωστή απάντηση: ii. Αφού τα συστατικά του διακρίνονται στο μικροσκόπιο, το αίμα είναι ετερογενές μείγμα."
  },
  {
    "chapterId": "chapter-3",
    "q": "13. δ. Αν αναμείξουμε λάδι και νερό, θα σχηματιστούν δύο διακριτές φάσεις με το λάδι να επιπλέει πάνω στο νερό. Το σύστημα λάδι – νερό είναι:",
    "options": [
      {
        "text": "i. διάλυμα",
        "correct": false
      },
      {
        "text": "ii. ομογενές μείγμα",
        "correct": false
      },
      {
        "text": "iii. ετερογενές μείγμα",
        "correct": true
      },
      {
        "text": "iv. κράμα",
        "correct": false
      }
    ],
    "explanation": "Σωστή απάντηση: iii. Τα δύο συστατικά διακρίνονται με γυμνό μάτι."
  },
  {
    "chapterId": "chapter-3",
    "q": "13. ε. Οι αφροί είναι μείγματα αερίων ουσιών σε υγρό διαλύτη, των οποίων τα συστατικά διακρίνονται μόνο στο μικροσκόπιο. Επομένως οι αφροί είναι:",
    "options": [
      {
        "text": "i. διαλύματα",
        "correct": false
      },
      {
        "text": "ii. ομογενή μείγματα",
        "correct": false
      },
      {
        "text": "iii. ετερογενή μείγματα",
        "correct": true
      },
      {
        "text": "iv. κανένα από τα προηγούμενα",
        "correct": false
      }
    ],
    "explanation": "Σωστή απάντηση: iii. Ένα μείγμα του οποίου τα συστατικά διακρίνονται έστω και μόνο στο μικροσκόπιο είναι ετερογενές."
  },
  {
    "chapterId": "chapter-3",
    "q": "13. στ. Σε δύο ποτήρια που περιέχουν την ίδια ποσότητα νερού διαλύονται στο Δ<sub>1</sub> δύο κουταλιές αλάτι και στο Δ<sub>2</sub> μία κουταλιά αλάτι. Πιο πυκνό διάλυμα είναι:",
    "options": [
      {
        "text": "i. το Δ<sub>1</sub>",
        "correct": true
      },
      {
        "text": "ii. το Δ<sub>2</sub>",
        "correct": false
      },
      {
        "text": "iii. είναι το ίδιο πυκνά",
        "correct": false
      }
    ],
    "explanation": "Σωστή απάντηση: i. Το Δ<sub>1</sub> περιέχει μεγαλύτερη ποσότητα διαλυμένης ουσίας στην ίδια ποσότητα νερού."
  },
  {
    "chapterId": "chapter-3",
    "q": "19. α. Για την παραλαβή αλατιού στις αλυκές χρησιμοποιείται η τεχνική της απόσταξης.",
    "options": [
      {
        "text": "Σωστό",
        "correct": false
      },
      {
        "text": "Λάθος",
        "correct": true
      }
    ],
    "explanation": "<b>Λάθος.</b> Στις αλυκές το αλάτι παραλαμβάνεται με εξάτμιση του θαλασσινού νερού από τον ήλιο και τον αέρα, όχι με απόσταξη."
  },
  {
    "chapterId": "chapter-3",
    "q": "19. β. Η εκχύλιση είναι η μέθοδος με την οποία οι αρωματικές ουσίες του γαλλικού καφέ περνούν στο ρόφημα από τους κόκκους του.",
    "options": [
      {
        "text": "Σωστό",
        "correct": true
      },
      {
        "text": "Λάθος",
        "correct": false
      }
    ],
    "explanation": "<b>Σωστό.</b> Το ζεστό νερό διαλύει (εκχυλίζει) από τον αλεσμένο καφέ τις αρωματικές και τις άλλες ευδιάλυτες ουσίες, οι οποίες περνούν στο ρόφημα, ενώ τα αδιάλυτα υπολείμματα συγκρατούνται στο φίλτρο."
  },
  {
    "chapterId": "chapter-3",
    "q": "19. γ. Ένα ετερογενές μείγμα στερεών μπορεί να διαχωριστεί στα συστατικά του με διαλογή.",
    "options": [
      {
        "text": "Σωστό",
        "correct": true
      },
      {
        "text": "Λάθος",
        "correct": false
      }
    ],
    "explanation": "<b>Σωστό.</b> Η διαλογή εφαρμόζεται σε ετερογενή μείγματα στερεών όταν τα συστατικά τους διακρίνονται και έχουν κατάλληλο μέγεθος, π.χ. φακές με πετραδάκια."
  },
  {
    "chapterId": "chapter-3",
    "q": "19. δ. Δεν είναι δυνατό να διαχωρίσουμε τις χρωστικές ενός μελανιού.",
    "options": [
      {
        "text": "Σωστό",
        "correct": false
      },
      {
        "text": "Λάθος",
        "correct": true
      }
    ],
    "explanation": "<b>Λάθος.</b> Οι χρωστικές ενός μελανιού διαχωρίζονται με χρωματογραφία."
  },
  {
    "chapterId": "chapter-3",
    "q": "25. α. Σε 1000 g διαλύματος ζάχαρης περιεκτικότητας 10% m/m περιέχονται:",
    "options": [
      {
        "text": "i. 90 g ζάχαρης",
        "correct": false
      },
      {
        "text": "ii. 900 g ζάχαρης",
        "correct": false
      },
      {
        "text": "iii. 90 g νερού",
        "correct": false
      },
      {
        "text": "iv. 900 g νερού",
        "correct": true
      }
    ],
    "explanation": "Σωστή απάντηση: iv. Σε 100 g διαλύματος περιέχονται 10 g ζάχαρης, άρα σε 1000 g περιέχονται 100 g ζάχαρης και 1000 − 100 = 900 g νερού."
  },
  {
    "chapterId": "chapter-3",
    "q": "25. β. Ένα υδατικό διάλυμα υδροχλωρικού οξέος 15% m/v περιέχει:",
    "options": [
      {
        "text": "i. 15 g υδροχλωρίου σε 100 g διαλύματος",
        "correct": false
      },
      {
        "text": "ii. 15 g υδροχλωρίου σε 100 mL διαλύματος",
        "correct": true
      },
      {
        "text": "iii. 15 g υδροχλωρίου σε 100 mL νερού",
        "correct": false
      },
      {
        "text": "iv. 15 g νερού σε 100 mL διαλύματος",
        "correct": false
      }
    ],
    "explanation": "Σωστή απάντηση: ii. Η περιεκτικότητα % m/v εκφράζει τα γραμμάρια της διαλυμένης ουσίας σε 100 mL διαλύματος."
  },
  {
    "chapterId": "chapter-3",
    "q": "25. γ. Η θάλασσα είναι ένα διάλυμα που περιέχει, εκτός από μαγειρικό αλάτι (NaCl), και άλλα άλατα με μικρότερη περιεκτικότητα. Η περιεκτικότητα του θαλασσινού νερού σε μαγνήσιο χλωρίδιο (MgCl<sub>2</sub>) είναι περίπου 0,1% m/v. 1 g MgCl<sub>2</sub> θα περιέχεται σε:",
    "options": [
      {
        "text": "i. 1000 g θαλασσινού νερού",
        "correct": false
      },
      {
        "text": "ii. 1000 mL θαλασσινού νερού",
        "correct": true
      },
      {
        "text": "iii. 100 mL θαλασσινού νερού",
        "correct": false
      }
    ],
    "explanation": "Σωστή απάντηση: ii. Σε 100 mL θαλασσινού νερού περιέχονται 0,1 g MgCl<sub>2</sub>, άρα 1 g περιέχεται σε 1000 mL."
  },
  {
    "chapterId": "chapter-3",
    "q": "32. Σε 1 L αέρα περιεκτικότητας 21% v/v σε οξυγόνο περιέχονται:",
    "options": [
      {
        "text": "α. 21 cm<sup>3</sup> οξυγόνου",
        "correct": false
      },
      {
        "text": "β. 79 cm<sup>3</sup> οξυγόνου",
        "correct": false
      },
      {
        "text": "γ. 42 cm<sup>3</sup> οξυγόνου",
        "correct": false
      },
      {
        "text": "δ. 210 cm<sup>3</sup> οξυγόνου",
        "correct": true
      }
    ],
    "explanation": "Σωστή απάντηση: δ. 1 L = 1000 cm<sup>3</sup>. Σε 100 cm<sup>3</sup> αέρα περιέχονται 21 cm<sup>3</sup> οξυγόνου, άρα σε 1000 cm<sup>3</sup> περιέχονται 210 cm<sup>3</sup>."
  },
  {
    "chapterId": "chapter-3",
    "q": "Το νερό είναι εξαιρετικός διαλύτης και για τον λόγο αυτόν δεν βρίσκεται ποτέ στη φύση εντελώς καθαρό.",
    "options": [
      {
        "text": "Σωστό",
        "correct": true
      },
      {
        "text": "Λάθος",
        "correct": false
      }
    ],
    "explanation": "<b>Σωστό.</b> Επειδή διαλύει πάρα πολλές ουσίες (άλατα, αέρια του αέρα κ.ά.), το νερό στη φύση είναι πάντα μείγμα. Καθαρό νερό παίρνουμε μόνο στο εργαστήριο, π.χ. με απόσταξη."
  },
  {
    "chapterId": "chapter-3",
    "q": "Το νερό παίζει σημαντικό ρόλο στη ρύθμιση της θερμοκρασίας του πλανήτη.",
    "options": [
      {
        "text": "Σωστό",
        "correct": true
      },
      {
        "text": "Λάθος",
        "correct": false
      }
    ],
    "explanation": "<b>Σωστό.</b> Οι ωκεανοί απορροφούν και αποθηκεύουν μεγάλα ποσά θερμότητας και την αποδίδουν αργά, ενώ οι υδρατμοί της ατμόσφαιρας συγκρατούν θερμότητα. Έτσι μετριάζονται οι μεταβολές της θερμοκρασίας."
  },
  {
    "chapterId": "chapter-3",
    "q": "Το νερό είναι το πιο άφθονο υγρό στη Γη.",
    "options": [
      {
        "text": "Σωστό",
        "correct": true
      },
      {
        "text": "Λάθος",
        "correct": false
      }
    ],
    "explanation": "<b>Σωστό.</b> Το νερό καλύπτει περίπου το 71% της επιφάνειας της Γης."
  },
  {
    "chapterId": "chapter-3",
    "q": "Το θαλασσινό νερό είναι κατάλληλο για την άρδευση (πότισμα) των καλλιεργειών.",
    "options": [
      {
        "text": "Σωστό",
        "correct": false
      },
      {
        "text": "Λάθος",
        "correct": true
      }
    ],
    "explanation": "<b>Λάθος.</b> Η μεγάλη περιεκτικότητά του σε άλατα το καθιστά ακατάλληλο: τα άλατα αφυδατώνουν τα φυτά και υποβαθμίζουν το έδαφος."
  },
  {
    "chapterId": "chapter-4",
    "q": "5. α. Αν κατά τη διάσπαση ορισμένης ποσότητας υδροϊωδίου σε υδρογόνο και ιώδιο παράγονται 2 g υδρογόνου και 254 g ιωδίου, και κατά τη διάσπαση άλλης ποσότητας παράγονται 127 g ιωδίου, θα παράγεται ταυτόχρονα 1 g υδρογόνου.",
    "options": [
      {
        "text": "Σωστό",
        "correct": true
      },
      {
        "text": "Λάθος",
        "correct": false
      }
    ],
    "explanation": "<b>Σωστό.</b> Η αναλογία μαζών υδρογόνου – ιωδίου στο υδροϊώδιο είναι σταθερή: 2 g : 254 g = 1 g : 127 g."
  },
  {
    "chapterId": "chapter-4",
    "q": "5. β. Ο άνθρακας δεν μπορεί να διασπαστεί σε άλλες απλούστερες ουσίες, επομένως είναι μια χημική ένωση.",
    "options": [
      {
        "text": "Σωστό",
        "correct": false
      },
      {
        "text": "Λάθος",
        "correct": true
      }
    ],
    "explanation": "<b>Λάθος.</b> Αφού ο άνθρακας δεν διασπάται σε απλούστερες ουσίες, είναι χημικό στοιχείο."
  },
  {
    "chapterId": "chapter-4",
    "q": "5. γ. Το αλατόνερο περιέχει πολλά διαφορετικά χημικά στοιχεία, επομένως είναι μια χημική ένωση.",
    "options": [
      {
        "text": "Σωστό",
        "correct": false
      },
      {
        "text": "Λάθος",
        "correct": true
      }
    ],
    "explanation": "<b>Λάθος.</b> Το αλατόνερο είναι μείγμα (διάλυμα) νερού και αλατιού, όχι χημική ένωση· δεν έχει σταθερή σύσταση."
  },
  {
    "chapterId": "chapter-4",
    "q": "5. δ. Μπορούμε να ανιχνεύσουμε αν ένα αέριο είναι το υδρογόνο πλησιάζοντας ένα μισοσβησμένο σπίρτο, γιατί θα το δούμε να ανάβει ξανά.",
    "options": [
      {
        "text": "Σωστό",
        "correct": false
      },
      {
        "text": "Λάθος",
        "correct": true
      }
    ],
    "explanation": "<b>Λάθος.</b> Με μισοσβησμένο σπίρτο (ή παρασχίδα) που ξανανάβει ανιχνεύουμε το οξυγόνο. Το υδρογόνο ανιχνεύεται με αναμμένο σπίρτο: καίγεται με χαρακτηριστικό κρότο."
  },
  {
    "chapterId": "chapter-4",
    "q": "5. ε. Κατά την ηλεκτρόλυση ορισμένης ποσότητας νερού παράγονται 0,5 L αερίου υδρογόνου και 0,5 L αερίου οξυγόνου.",
    "options": [
      {
        "text": "Σωστό",
        "correct": false
      },
      {
        "text": "Λάθος",
        "correct": true
      }
    ],
    "explanation": "<b>Λάθος.</b> Κατά την ηλεκτρόλυση του νερού ο όγκος του υδρογόνου είναι διπλάσιος από τον όγκο του οξυγόνου (π.χ. 1 L υδρογόνου και 0,5 L οξυγόνου)."
  },
  {
    "chapterId": "chapter-4",
    "q": "5. στ. Όταν οι χημικές ουσίες κατά τη διάσπασή τους παράγουν αέρια χημικά στοιχεία, η αναλογία των όγκων των αερίων στοιχείων είναι πάντα 2/1.",
    "options": [
      {
        "text": "Σωστό",
        "correct": false
      },
      {
        "text": "Λάθος",
        "correct": true
      }
    ],
    "explanation": "<b>Λάθος.</b> Η αναλογία όγκων εξαρτάται από την ένωση· π.χ. κατά τη διάσπαση της αμμωνίας η αναλογία όγκων αζώτου – υδρογόνου είναι 1/3."
  },
  {
    "chapterId": "chapter-4",
    "q": "5. ζ. Το οινόπνευμα έχει σημείο βρασμού 78,5 °C, οπότε, αν ένα σώμα αρχίζει να βράζει στους 78,5 °C, είναι οπωσδήποτε οινόπνευμα.",
    "options": [
      {
        "text": "Σωστό",
        "correct": false
      },
      {
        "text": "Λάθος",
        "correct": true
      }
    ],
    "explanation": "<b>Λάθος.</b> Και άλλες ουσίες ή μείγματα μπορεί να βράζουν στους 78,5 °C. Για να ταυτοποιήσουμε μια ουσία πρέπει να εξετάσουμε περισσότερες φυσικές σταθερές (π.χ. και το σημείο τήξης)."
  },
  {
    "chapterId": "chapter-4",
    "q": "5. η. Οι χημικές ενώσεις έχουν καθορισμένες φυσικές σταθερές, ενώ τα χημικά στοιχεία όχι.",
    "options": [
      {
        "text": "Σωστό",
        "correct": false
      },
      {
        "text": "Λάθος",
        "correct": true
      }
    ],
    "explanation": "<b>Λάθος.</b> Και τα χημικά στοιχεία, ως καθαρές ουσίες, έχουν καθορισμένες φυσικές σταθερές (π.χ. σημείο τήξης και σημείο βρασμού)."
  },
  {
    "chapterId": "chapter-4",
    "q": "5. θ. Το θαλασσινό νερό δεν έχει σταθερό σημείο βρασμού.",
    "options": [
      {
        "text": "Σωστό",
        "correct": true
      },
      {
        "text": "Λάθος",
        "correct": false
      }
    ],
    "explanation": "<b>Σωστό.</b> Το θαλασσινό νερό είναι μείγμα και η θερμοκρασία του μεταβάλλεται κατά τη διάρκεια του βρασμού."
  },
  {
    "chapterId": "chapter-4",
    "q": "5. ι. Η αμμωνία αποτελείται από άζωτο και υδρογόνο με καθορισμένη αναλογία μαζών και γι’ αυτό έχει τις ιδιότητες και του αζώτου και του υδρογόνου.",
    "options": [
      {
        "text": "Σωστό",
        "correct": false
      },
      {
        "text": "Λάθος",
        "correct": true
      }
    ],
    "explanation": "<b>Λάθος.</b> Μια χημική ένωση έχει διαφορετικές ιδιότητες από τα στοιχεία που την αποτελούν."
  },
  {
    "chapterId": "chapter-4",
    "q": "7. α. Από τα ακόλουθα σώματα χημικό στοιχείο είναι:",
    "options": [
      {
        "text": "i. το γάλα",
        "correct": false
      },
      {
        "text": "ii. το νερό",
        "correct": false
      },
      {
        "text": "iii. το μαγειρικό αλάτι",
        "correct": false
      },
      {
        "text": "iv. ο άνθρακας",
        "correct": true
      }
    ],
    "explanation": "Σωστή απάντηση: iv. Το γάλα είναι μείγμα, ενώ το νερό και το μαγειρικό αλάτι είναι χημικές ενώσεις."
  },
  {
    "chapterId": "chapter-4",
    "q": "7. β. Δεν είναι σωστή η πρόταση για μια χημική ένωση:",
    "options": [
      {
        "text": "i. Μπορεί να συντεθεί από απλούστερες ουσίες.",
        "correct": false
      },
      {
        "text": "ii. Έχει καθορισμένες φυσικές σταθερές σε ορισμένες συνθήκες.",
        "correct": false
      },
      {
        "text": "iii. Η αναλογία μαζών των στοιχείων που την αποτελούν είναι σταθερή.",
        "correct": false
      },
      {
        "text": "iv. Διατηρεί τις ιδιότητες των στοιχείων που την αποτελούν.",
        "correct": true
      }
    ],
    "explanation": "Σωστή απάντηση: iv. Μια χημική ένωση έχει διαφορετικές ιδιότητες από τα στοιχεία που την αποτελούν."
  },
  {
    "chapterId": "chapter-4",
    "q": "7. γ. Αν κατά τη διάσπαση της αμμωνίας η σχέση των όγκων αζώτου – υδρογόνου είναι 1/3, τότε, όταν παράγονται 600 cm<sup>3</sup> υδρογόνου, ταυτόχρονα παράγονται από το άζωτο:",
    "options": [
      {
        "text": "i. 600 cm<sup>3</sup>",
        "correct": false
      },
      {
        "text": "ii. 1800 cm<sup>3</sup>",
        "correct": false
      },
      {
        "text": "iii. 200 cm<sup>3</sup>",
        "correct": true
      },
      {
        "text": "iv. 300 cm<sup>3</sup>",
        "correct": false
      }
    ],
    "explanation": "Σωστή απάντηση: iii. V<sub>αζώτου</sub> = 600 / 3 = 200 cm<sup>3</sup>."
  },
  {
    "chapterId": "chapter-4",
    "q": "7. δ. Τα χημικά στοιχεία έχουν καθορισμένα και σταθερά:",
    "options": [
      {
        "text": "i. σημείο τήξης",
        "correct": false
      },
      {
        "text": "ii. σημείο βρασμού",
        "correct": false
      },
      {
        "text": "iii. σύσταση",
        "correct": false
      },
      {
        "text": "iv. τα i, ii και iii",
        "correct": true
      }
    ],
    "explanation": "Σωστή απάντηση: iv. Τα χημικά στοιχεία είναι καθαρές ουσίες, άρα έχουν σταθερή σύσταση και καθορισμένες φυσικές σταθερές."
  },
  {
    "chapterId": "chapter-4",
    "q": "7. ε. Από τα ακόλουθα σώματα δεν έχει σταθερό σημείο τήξης:",
    "options": [
      {
        "text": "i. το χλωριούχο νάτριο",
        "correct": false
      },
      {
        "text": "ii. ο χρυσός",
        "correct": false
      },
      {
        "text": "iii. ο χάλυβας",
        "correct": true
      },
      {
        "text": "iv. ο μόλυβδος",
        "correct": false
      }
    ],
    "explanation": "Σωστή απάντηση: iii. Ο χάλυβας είναι κράμα, δηλαδή μείγμα (κυρίως σιδήρου και άνθρακα), γι’ αυτό δεν έχει σταθερό σημείο τήξης."
  },
  {
    "chapterId": "chapter-5",
    "q": "3. α. Τα άτομα, σύμφωνα με τον Δημόκριτο, είναι:",
    "options": [
      {
        "text": "i. ακίνητα",
        "correct": false
      },
      {
        "text": "ii. χωρίς κενό",
        "correct": true
      },
      {
        "text": "iii. δημιουργούνται από το μηδέν",
        "correct": false
      },
      {
        "text": "iv. φθαρτά",
        "correct": false
      }
    ],
    "explanation": "Σωστή απάντηση: ii. Σύμφωνα με τον Δημόκριτο, τα άτομα είναι συμπαγή (χωρίς κενό στο εσωτερικό τους), άτμητα, άφθαρτα και αναλλοίωτα και κινούνται συνεχώς. Δεν είναι ακίνητα, δεν δημιουργούνται από το μηδέν και δεν φθείρονται."
  },
  {
    "chapterId": "chapter-5",
    "q": "3. β. Τα άτομα, σύμφωνα με τον Dalton:",
    "options": [
      {
        "text": "i. είναι όλα ίδια",
        "correct": false
      },
      {
        "text": "ii. καταστρέφονται",
        "correct": false
      },
      {
        "text": "iii. δημιουργούνται από το μηδέν",
        "correct": false
      },
      {
        "text": "iv. έχουν ίδια μάζα, αν ανήκουν στο ίδιο στοιχείο",
        "correct": true
      }
    ],
    "explanation": "Σωστή απάντηση: iv. Σύμφωνα με τον Dalton, τα άτομα του ίδιου στοιχείου είναι ίδια (έχουν ίδια μάζα), ενώ τα άτομα διαφορετικών στοιχείων διαφέρουν· τα άτομα δεν δημιουργούνται ούτε καταστρέφονται."
  },
  {
    "chapterId": "chapter-5",
    "q": "7. α. Τα υλικά σώματα μπορούν να τεμαχίζονται συνεχώς σε όλο και μικρότερα σωματίδια.",
    "options": [
      {
        "text": "Σωστό",
        "correct": false
      },
      {
        "text": "Λάθος",
        "correct": true
      }
    ],
    "explanation": "<b>Λάθος.</b> Η διαίρεση της ύλης δεν μπορεί να συνεχίζεται επ’ άπειρον· σταματά στα άτομα."
  },
  {
    "chapterId": "chapter-5",
    "q": "7. β. Ο Δημόκριτος υποστήριξε με πειραματικά δεδομένα την ύπαρξη των ατόμων.",
    "options": [
      {
        "text": "Σωστό",
        "correct": false
      },
      {
        "text": "Λάθος",
        "correct": true
      }
    ],
    "explanation": "<b>Λάθος.</b> Η θεωρία του Δημόκριτου ήταν φιλοσοφική· στηριζόταν στη λογική σκέψη και όχι σε πειράματα."
  },
  {
    "chapterId": "chapter-5",
    "q": "7. γ. Κατά τη διάσπαση του νερού αλλάζουν οι συνδυασμοί των ατόμων στα μόρια.",
    "options": [
      {
        "text": "Σωστό",
        "correct": true
      },
      {
        "text": "Λάθος",
        "correct": false
      }
    ],
    "explanation": "<b>Σωστό.</b> Κατά τη διάσπαση του νερού τα άτομα δεν αλλάζουν, αλλά αναδιατάσσονται: τα άτομα υδρογόνου και οξυγόνου των μορίων του νερού (H<sub>2</sub>O) σχηματίζουν νέους συνδυασμούς, τα μόρια του υδρογόνου (H<sub>2</sub>) και του οξυγόνου (O<sub>2</sub>)."
  },
  {
    "chapterId": "chapter-5",
    "q": "7. δ. Τα μόρια του υδρογόνου είναι άσπρα και του οξυγόνου κόκκινα.",
    "options": [
      {
        "text": "Σωστό",
        "correct": false
      },
      {
        "text": "Λάθος",
        "correct": true
      }
    ],
    "explanation": "<b>Λάθος.</b> Τα χρώματα των προσομοιωμάτων είναι συμβατικά· τα μόρια δεν έχουν χρώμα."
  },
  {
    "chapterId": "chapter-5",
    "q": "7. ε. Τα μικρότερα σωματίδια που υπάρχουν ελεύθερα στη φύση είναι τα άτομα.",
    "options": [
      {
        "text": "Σωστό",
        "correct": false
      },
      {
        "text": "Λάθος",
        "correct": true
      }
    ],
    "explanation": "<b>Λάθος.</b> Τα άτομα σπάνια υπάρχουν ελεύθερα στη φύση· συνήθως συνδυάζονται μεταξύ τους και σχηματίζουν μόρια. Το μόριο είναι η μικρότερη ποσότητα μιας ουσίας που μπορεί να υπάρξει ελεύθερη στη φύση (ακόμη και τα ελεύθερα άτομα των ευγενών αερίων, όπως του ηλίου, θεωρούνται μονοατομικά μόρια)."
  },
  {
    "chapterId": "chapter-5",
    "q": "7. στ. Τα μόρια των στοιχείων μπορούν να δημιουργηθούν με συνδυασμό όμοιων ή διαφορετικών ατόμων.",
    "options": [
      {
        "text": "Σωστό",
        "correct": false
      },
      {
        "text": "Λάθος",
        "correct": true
      }
    ],
    "explanation": "<b>Λάθος.</b> Τα μόρια των στοιχείων αποτελούνται μόνο από όμοια άτομα· από διαφορετικά άτομα σχηματίζονται τα μόρια των χημικών ενώσεων."
  },
  {
    "chapterId": "chapter-5",
    "q": "7. ζ. Οι χημικές ενώσεις έχουν εντελώς διαφορετικές ιδιότητες από τα στοιχεία από τα οποία δημιουργούνται.",
    "options": [
      {
        "text": "Σωστό",
        "correct": true
      },
      {
        "text": "Λάθος",
        "correct": false
      }
    ],
    "explanation": "<b>Σωστό.</b> Π.χ. το νερό έχει εντελώς διαφορετικές ιδιότητες από το υδρογόνο και το οξυγόνο που το αποτελούν."
  },
  {
    "chapterId": "chapter-5",
    "q": "7. η. Όταν δημιουργείται μια χημική ένωση, αλλάζει ο αριθμός των ατόμων των στοιχείων που την αποτελούν.",
    "options": [
      {
        "text": "Σωστό",
        "correct": false
      },
      {
        "text": "Λάθος",
        "correct": true
      }
    ],
    "explanation": "<b>Λάθος.</b> Ο αριθμός των ατόμων διατηρείται· τα άτομα απλώς συνδυάζονται με νέο τρόπο."
  },
  {
    "chapterId": "chapter-6",
    "q": "5. α. Οι μοριακοί τύποι μάς πληροφορούν για την αναλογία των ατόμων κάθε στοιχείου στο μόριο της ένωσης.",
    "options": [
      {
        "text": "Σωστό",
        "correct": false
      },
      {
        "text": "Λάθος",
        "correct": true
      }
    ],
    "explanation": "<b>Λάθος.</b> Οι μοριακοί τύποι μάς πληροφορούν για το είδος και τον ακριβή αριθμό των ατόμων κάθε στοιχείου στο μόριο, όχι απλώς για την αναλογία τους."
  },
  {
    "chapterId": "chapter-6",
    "q": "5. β. Μοριακούς τύπους χρησιμοποιούμε μόνο για τις χημικές ενώσεις.",
    "options": [
      {
        "text": "Σωστό",
        "correct": false
      },
      {
        "text": "Λάθος",
        "correct": true
      }
    ],
    "explanation": "<b>Λάθος.</b> Μοριακούς τύπους χρησιμοποιούμε και για τα μόρια των στοιχείων, π.χ. O<sub>2</sub>, O<sub>3</sub>, P<sub>4</sub>."
  },
  {
    "chapterId": "chapter-6",
    "q": "5. γ. Η ατομικότητα ενός στοιχείου είναι ο αριθμός που μας δείχνει πόσα άτομα του στοιχείου μετέχουν στο μόριο της χημικής ένωσης.",
    "options": [
      {
        "text": "Σωστό",
        "correct": false
      },
      {
        "text": "Λάθος",
        "correct": true
      }
    ],
    "explanation": "<b>Λάθος.</b> Η ατομικότητα αναφέρεται στα μόρια των στοιχείων: είναι ο αριθμός των ατόμων που αποτελούν το μόριο ενός στοιχείου (π.χ. για το O<sub>3</sub> είναι 3)."
  },
  {
    "chapterId": "chapter-6",
    "q": "10. α. Ο φωσφόρος είναι ένα στοιχείο το οποίο άλλοτε είναι τετρατομικό και άλλοτε εξατομικό. Το μόριό του λοιπόν συμβολίζεται με τους τύπους:",
    "options": [
      {
        "text": "i. P",
        "correct": false
      },
      {
        "text": "ii. P<sub>4</sub> ή P<sub>6</sub>",
        "correct": true
      },
      {
        "text": "iii. P<sub>6</sub>",
        "correct": false
      },
      {
        "text": "iv. P<sub>4</sub>",
        "correct": false
      }
    ],
    "explanation": "Σωστή απάντηση: ii. Ο δείκτης δηλώνει τον αριθμό των ατόμων στο μόριο: P<sub>4</sub> για το τετρατομικό και P<sub>6</sub> για το εξατομικό μόριο."
  },
  {
    "chapterId": "chapter-6",
    "q": "10. β. Η γλυκόζη έχει μοριακό τύπο C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>, επομένως:",
    "options": [
      {
        "text": "i. 6 άτομα άνθρακα συνδέονται με 12 άτομα υδρογόνου και 6 άτομα οξυγόνου, και σχηματίζονται δύο μόρια γλυκόζης.",
        "correct": false
      },
      {
        "text": "ii. 12 άτομα άνθρακα συνδέονται με 12 άτομα υδρογόνου και 6 άτομα οξυγόνου, και σχηματίζονται δύο μόρια γλυκόζης.",
        "correct": false
      },
      {
        "text": "iii. 12 άτομα άνθρακα συνδέονται με 24 άτομα υδρογόνου και 12 άτομα οξυγόνου, και σχηματίζεται ένα μόριο γλυκόζης.",
        "correct": false
      },
      {
        "text": "iv. 6 άτομα άνθρακα συνδέονται με 12 άτομα υδρογόνου και 6 άτομα οξυγόνου, και σχηματίζεται ένα μόριο γλυκόζης.",
        "correct": true
      }
    ],
    "explanation": "Σωστή απάντηση: iv. Ο μοριακός τύπος δείχνει ότι ένα μόριο γλυκόζης αποτελείται από 6 άτομα άνθρακα, 12 άτομα υδρογόνου και 6 άτομα οξυγόνου."
  },
  {
    "chapterId": "chapter-7",
    "q": "1. α. Οι απόψεις των επιστημόνων για τη δομή της ύλης δεν έχουν αλλάξει από τον 18ο αιώνα που ο Dalton διατύπωσε την ατομική του θεωρία.",
    "options": [
      {
        "text": "Σωστό",
        "correct": false
      },
      {
        "text": "Λάθος",
        "correct": true
      }
    ],
    "explanation": "<b>Λάθος.</b> Μετά τον Dalton (που διατύπωσε τη θεωρία του στις αρχές του 19ου αιώνα, 1803–1808) οι απόψεις για τη δομή της ύλης άλλαξαν ριζικά, με την ανακάλυψη των υποατομικών σωματιδίων (ηλεκτρόνια, πρωτόνια, νετρόνια) και τα ατομικά πρότυπα των Thomson, Rutherford και Bohr."
  },
  {
    "chapterId": "chapter-7",
    "q": "1. β. Οι επιστήμονες ανέκαθεν πίστευαν ότι το άτομο αποτελείται κυρίως από κενό.",
    "options": [
      {
        "text": "Σωστό",
        "correct": false
      },
      {
        "text": "Λάθος",
        "correct": true
      }
    ],
    "explanation": "<b>Λάθος.</b> Η άποψη ότι το άτομο αποτελείται κυρίως από κενό διατυπώθηκε για πρώτη φορά από τον Rutherford (1911), μετά το πείραμα με το φύλλο χρυσού."
  },
  {
    "chapterId": "chapter-7",
    "q": "1. γ. Ο E. Rutherford ήταν ο πρώτος που μίλησε για τον πυρήνα και τα ηλεκτρόνια που περιφέρονται σε μεγάλη απόσταση από αυτόν.",
    "options": [
      {
        "text": "Σωστό",
        "correct": true
      },
      {
        "text": "Λάθος",
        "correct": false
      }
    ],
    "explanation": "<b>Σωστό.</b> Ο Rutherford πρότεινε το πυρηνικό πρότυπο: ένας μικρός, θετικά φορτισμένος πυρήνας στο κέντρο του ατόμου και ηλεκτρόνια που περιφέρονται σε μεγάλη απόσταση από αυτόν."
  },
  {
    "chapterId": "chapter-7",
    "q": "1. δ. Ο N. Bohr διατύπωσε πρώτος την άποψη ότι τα ηλεκτρόνια κινούνται με τυχαίο τρόπο γύρω από τον πυρήνα.",
    "options": [
      {
        "text": "Σωστό",
        "correct": false
      },
      {
        "text": "Λάθος",
        "correct": true
      }
    ],
    "explanation": "<b>Λάθος.</b> Ο Bohr υποστήριξε ότι τα ηλεκτρόνια κινούνται σε καθορισμένες τροχιές (στιβάδες) γύρω από τον πυρήνα και όχι με τυχαίο τρόπο."
  },
  {
    "chapterId": "chapter-7",
    "q": "13. α. Για να μετατραπεί ένα άτομο σε κατιόν:",
    "options": [
      {
        "text": "i. προσλαμβάνει πρωτόνια",
        "correct": false
      },
      {
        "text": "ii. προσλαμβάνει ηλεκτρόνια",
        "correct": false
      },
      {
        "text": "iii. αποβάλλει πρωτόνια",
        "correct": false
      },
      {
        "text": "iv. αποβάλλει ηλεκτρόνια",
        "correct": true
      }
    ],
    "explanation": "Σωστή απάντηση: iv. Όταν ένα άτομο αποβάλλει ηλεκτρόνια, τα πρωτόνια γίνονται περισσότερα από τα ηλεκτρόνια και αποκτά θετικό φορτίο (κατιόν)."
  },
  {
    "chapterId": "chapter-7",
    "q": "13. β. Το ασβέστιο, με ατομικό αριθμό 20, μετατρέπεται σε ιόν αποβάλλοντας δύο ηλεκτρόνια. Το φορτίο του ιόντος του ασβεστίου είναι:",
    "options": [
      {
        "text": "i. +1",
        "correct": false
      },
      {
        "text": "ii. +2",
        "correct": true
      },
      {
        "text": "iii. −2",
        "correct": false
      },
      {
        "text": "iv. κανένα από τα προηγούμενα",
        "correct": false
      }
    ],
    "explanation": "Σωστή απάντηση: ii. Το ιόν έχει 20 πρωτόνια και 18 ηλεκτρόνια, άρα φορτίο +2 (Ca<sup>2+</sup>)."
  },
  {
    "chapterId": "chapter-7",
    "q": "13. γ. Το θείο έχει ατομικό αριθμό 16 και το ιόν του έχει 18 e. Το φορτίο του ιόντος είναι:",
    "options": [
      {
        "text": "i. +1",
        "correct": false
      },
      {
        "text": "ii. +2",
        "correct": false
      },
      {
        "text": "iii. −2",
        "correct": true
      },
      {
        "text": "iv. −1",
        "correct": false
      }
    ],
    "explanation": "Σωστή απάντηση: iii. Το ιόν έχει 16 πρωτόνια και 18 ηλεκτρόνια, άρα φορτίο −2 (S<sup>2−</sup>)."
  },
  {
    "chapterId": "chapter-7",
    "q": "16. α. Δομικά σωματίδια των χημικών ουσιών είναι μόνο τα μόρια.",
    "options": [
      {
        "text": "Σωστό",
        "correct": false
      },
      {
        "text": "Λάθος",
        "correct": true
      }
    ],
    "explanation": "<b>Λάθος.</b> Δομικά σωματίδια των χημικών ουσιών μπορεί να είναι μόρια, άτομα (π.χ. ευγενή αέρια) ή ιόντα (ιοντικές ενώσεις)."
  },
  {
    "chapterId": "chapter-7",
    "q": "16. β. Τα διατομικά στοιχεία αποτελούνται από ιόντα.",
    "options": [
      {
        "text": "Σωστό",
        "correct": false
      },
      {
        "text": "Λάθος",
        "correct": true
      }
    ],
    "explanation": "<b>Λάθος.</b> Τα διατομικά στοιχεία (π.χ. H<sub>2</sub>, O<sub>2</sub>) αποτελούνται από μόρια."
  },
  {
    "chapterId": "chapter-7",
    "q": "16. γ. Τα ιόντα δημιουργούνται αν το άτομο προσλάβει ή αποβάλει πρωτόνια ή ηλεκτρόνια.",
    "options": [
      {
        "text": "Σωστό",
        "correct": false
      },
      {
        "text": "Λάθος",
        "correct": true
      }
    ],
    "explanation": "<b>Λάθος.</b> Τα ιόντα δημιουργούνται μόνο με πρόσληψη ή αποβολή ηλεκτρονίων· ο αριθμός των πρωτονίων του πυρήνα δεν αλλάζει."
  },
  {
    "chapterId": "chapter-7",
    "q": "16. δ. Ένα άτομο με ατομικό αριθμό 17 έχει 17 νετρόνια στον πυρήνα του.",
    "options": [
      {
        "text": "Σωστό",
        "correct": false
      },
      {
        "text": "Λάθος",
        "correct": true
      }
    ],
    "explanation": "<b>Λάθος.</b> Ο ατομικός αριθμός (17) είναι ο αριθμός των πρωτονίων. Ο αριθμός των νετρονίων είναι A − Z και δεν προκύπτει μόνο από τον ατομικό αριθμό."
  },
  {
    "chapterId": "chapter-7",
    "q": "16. ε. Ένα άτομο με μαζικό αριθμό 80 έχει μεγαλύτερη μάζα από ένα άτομο με μαζικό αριθμό 56.",
    "options": [
      {
        "text": "Σωστό",
        "correct": true
      },
      {
        "text": "Λάθος",
        "correct": false
      }
    ],
    "explanation": "<b>Σωστό.</b> Ο μαζικός αριθμός είναι ο συνολικός αριθμός πρωτονίων και νετρονίων, που καθορίζουν τη μάζα του ατόμου."
  },
  {
    "chapterId": "chapter-7",
    "q": "16. στ. Ένα άτομο μπορεί να έχει θετικό ή αρνητικό φορτίο ή να είναι ηλεκτρικά ουδέτερο.",
    "options": [
      {
        "text": "Σωστό",
        "correct": false
      },
      {
        "text": "Λάθος",
        "correct": true
      }
    ],
    "explanation": "<b>Λάθος.</b> Το άτομο είναι πάντα ηλεκτρικά ουδέτερο· όταν αποκτήσει φορτίο, δεν είναι πλέον άτομο αλλά ιόν."
  },
  {
    "chapterId": "chapter-7",
    "q": "16. ζ. Αν γνωρίζουμε ότι το άτομο του σιδήρου μπορεί να αποβάλει 2 ή 3 ηλεκτρόνια, συμπεραίνουμε ότι σχηματίζει δύο διαφορετικά ιόντα.",
    "options": [
      {
        "text": "Σωστό",
        "correct": true
      },
      {
        "text": "Λάθος",
        "correct": false
      }
    ],
    "explanation": "<b>Σωστό.</b> Σχηματίζει τα ιόντα Fe<sup>2+</sup> και Fe<sup>3+</sup>."
  },
  {
    "chapterId": "chapter-8",
    "q": "10. α. Σε μια χημική εξίσωση είναι ίσοι στο 1ο και στο 2ο μέλος:",
    "options": [
      {
        "text": "i. οι αριθμοί των μορίων των αντιδρώντων και των προϊόντων",
        "correct": false
      },
      {
        "text": "ii. οι αριθμοί των ατόμων όλων των στοιχείων",
        "correct": true
      },
      {
        "text": "iii. το άθροισμα του αριθμού των μορίων των αντιδρώντων και των προϊόντων",
        "correct": false
      },
      {
        "text": "iv. ο αριθμός των μορίων των αντιδρώντων με τον αριθμό των ατόμων των προϊόντων",
        "correct": false
      }
    ],
    "explanation": "Σωστή απάντηση: ii. Σύμφωνα με την αρχή διατήρησης των ατόμων, όσα άτομα κάθε στοιχείου υπάρχουν στο 1ο μέλος, τόσα υπάρχουν και στο 2ο. Ο αριθμός των μορίων μπορεί να αλλάζει."
  },
  {
    "chapterId": "chapter-8",
    "q": "10. β. Στη χημική εξίσωση N<sub>2</sub>O<sub>4</sub> → …NO<sub>2</sub>, ο συντελεστής του NO<sub>2</sub> είναι:",
    "options": [
      {
        "text": "i. 1",
        "correct": false
      },
      {
        "text": "ii. 4",
        "correct": false
      },
      {
        "text": "iii. 3",
        "correct": false
      },
      {
        "text": "iv. κανένα από τα προηγούμενα",
        "correct": true
      }
    ],
    "explanation": "Σωστή απάντηση: iv. Ο συντελεστής είναι 2: N<sub>2</sub>O<sub>4</sub> → 2NO<sub>2</sub> (2 άτομα N και 4 άτομα O σε κάθε μέλος)."
  },
  {
    "chapterId": "chapter-8",
    "q": "10. γ. Από τη χημική αντίδραση του υδρογόνου με το χλώριο παράγεται:",
    "options": [
      {
        "text": "i. NH<sub>3</sub>",
        "correct": false
      },
      {
        "text": "ii. HBr",
        "correct": false
      },
      {
        "text": "iii. H<sub>2</sub>O",
        "correct": false
      },
      {
        "text": "iv. HCl",
        "correct": true
      }
    ],
    "explanation": "Σωστή απάντηση: iv. H<sub>2</sub> + Cl<sub>2</sub> → 2HCl. Τα προϊόντα μπορούν να περιέχουν μόνο άτομα των στοιχείων που υπάρχουν στα αντιδρώντα."
  },
  {
    "chapterId": "chapter-8",
    "q": "10. δ. Όταν καίγονται 16 g μεθανίου (CH<sub>4</sub>) με 64 g οξυγόνου (O<sub>2</sub>), παράγονται 36 g νερού (H<sub>2</sub>O) και …",
    "options": [
      {
        "text": "i. 44 g NO<sub>2</sub>",
        "correct": false
      },
      {
        "text": "ii. 16 g CO<sub>2</sub>",
        "correct": false
      },
      {
        "text": "iii. 44 g CO<sub>2</sub>",
        "correct": true
      },
      {
        "text": "iv. 64 g CO<sub>2</sub>",
        "correct": false
      }
    ],
    "explanation": "Σωστή απάντηση: iii. Αρχή διατήρησης της μάζας: 16 + 64 = 80 g = 36 g + x, άρα x = 44 g CO<sub>2</sub>. Δεν μπορεί να παράγεται NO<sub>2</sub>, αφού στα αντιδρώντα δεν υπάρχει άζωτο."
  },
  {
    "chapterId": "chapter-8",
    "q": "14. α. Οι φυσικές ιδιότητες των ουσιών που παράγονται από μια χημική αντίδραση είναι ίδιες με τις φυσικές ιδιότητες των αρχικών ουσιών.",
    "options": [
      {
        "text": "Σωστό",
        "correct": false
      },
      {
        "text": "Λάθος",
        "correct": true
      }
    ],
    "explanation": "<b>Λάθος.</b> Κατά τη χημική αντίδραση παράγονται νέες ουσίες με διαφορετικές ιδιότητες."
  },
  {
    "chapterId": "chapter-8",
    "q": "14. β. Κατά τη διάσπαση α g μιας ουσίας Α παράγονται α g μιας ουσίας Β και α g μιας ουσίας Γ.",
    "options": [
      {
        "text": "Σωστό",
        "correct": false
      },
      {
        "text": "Λάθος",
        "correct": true
      }
    ],
    "explanation": "<b>Λάθος.</b> Σε κάθε χημική αντίδραση η συνολική μάζα των αντιδρώντων είναι ίση με τη συνολική μάζα των προϊόντων. Αν διασπαστούν α g της ουσίας Α, τα προϊόντα Β και Γ θα έχουν μαζί μάζα α g (και όχι 2α g)."
  },
  {
    "chapterId": "chapter-8",
    "q": "14. γ. Όταν πραγματοποιείται μια χημική αντίδραση, η θερμοκρασία του περιβάλλοντος μπορεί να αυξηθεί ή να ελαττωθεί.",
    "options": [
      {
        "text": "Σωστό",
        "correct": true
      },
      {
        "text": "Λάθος",
        "correct": false
      }
    ],
    "explanation": "<b>Σωστό.</b> Η θερμοκρασία αυξάνεται όταν η αντίδραση ελευθερώνει ενέργεια στο περιβάλλον (εξώθερμη) και ελαττώνεται όταν απορροφά ενέργεια από το περιβάλλον (ενδόθερμη)."
  },
  {
    "chapterId": "chapter-8",
    "q": "15. α. Οι άνθρωποι καταναλώνουν τροφές που τους παρέχουν την απαραίτητη ενέργεια για να συντηρηθούν, να αναπτυχθούν και να κινηθούν. Οι χημικές αντιδράσεις που λαμβάνουν χώρα κατά την πέψη των τροφών είναι:",
    "options": [
      {
        "text": "i. ενδόθερμες",
        "correct": false
      },
      {
        "text": "ii. δεν συνοδεύονται από μεταβολές στην ενέργεια",
        "correct": false
      },
      {
        "text": "iii. ενδόθερμες ή εξώθερμες",
        "correct": false
      },
      {
        "text": "iv. εξώθερμες",
        "correct": true
      }
    ],
    "explanation": "Σωστή απάντηση: iv. Οι αντιδράσεις αυτές ελευθερώνουν την ενέργεια που χρειάζεται ο οργανισμός, άρα είναι εξώθερμες."
  },
  {
    "chapterId": "chapter-8",
    "q": "15. β. 200 g ασβεστόλιθου (CaCO<sub>3</sub>) διασπώνται όταν θερμαίνονται ισχυρά και παράγουν 88 g άνθρακα διοξειδίου (CO<sub>2</sub>) και α g ασβεστίου οξειδίου (CaO). Η αντίδραση είναι:",
    "options": [
      {
        "text": "i. εξώθερμη",
        "correct": false
      },
      {
        "text": "ii. δεν συνοδεύεται από μεταβολές στην ενέργεια",
        "correct": false
      },
      {
        "text": "iii. ενδόθερμη ή εξώθερμη",
        "correct": false
      },
      {
        "text": "iv. ενδόθερμη",
        "correct": true
      }
    ],
    "explanation": "Σωστή απάντηση: iv. Η διάσπαση γίνεται μόνο όταν θερμαίνουμε ισχυρά, δηλαδή απορροφά θερμότητα: είναι ενδόθερμη."
  },
  {
    "chapterId": "chapter-8",
    "q": "15. β. (συνέχεια) Από την αντίδραση της διάσπασης των 200 g ασβεστόλιθου, στην οποία παράγονται και 88 g CO<sub>2</sub>, παράχθηκαν:",
    "options": [
      {
        "text": "i. 56 g CaO",
        "correct": false
      },
      {
        "text": "ii. 100 g CaO",
        "correct": false
      },
      {
        "text": "iii. 112 g CaO",
        "correct": true
      }
    ],
    "explanation": "Σωστή απάντηση: iii. Αρχή διατήρησης της μάζας: 200 g = 88 g + α, άρα α = 112 g CaO."
  },
  {
    "chapterId": "chapter-9",
    "q": "3. γ. Με τι από τα ακόλουθα δεν ασχολείται η χημική ανάλυση;",
    "options": [
      {
        "text": "i. με τον έλεγχο της ποιότητας και της ασφάλειας των τροφίμων",
        "correct": false
      },
      {
        "text": "ii. με τον προσδιορισμό της ποσότητας των αντικαταθλιπτικών φαρμάκων στα αστικά λύματα",
        "correct": false
      },
      {
        "text": "iii. με την ανάπτυξη τεχνικών ποιοτικού και ποσοτικού προσδιορισμού των μετάλλων στο νερό",
        "correct": false
      },
      {
        "text": "iv. με τη σύνθεση και την παραγωγή νέων ουσιών",
        "correct": true
      }
    ],
    "explanation": "Σωστή απάντηση: iv. Η σύνθεση και η παραγωγή νέων ουσιών είναι αντικείμενο της χημικής σύνθεσης· η χημική ανάλυση προσδιορίζει τη σύσταση των υλικών."
  },
  {
    "chapterId": "chapter-9",
    "q": "13. α. Μπορούμε να χρησιμοποιούμε όση ποσότητα απορρυπαντικού θέλουμε, χωρίς να επιβαρύνουμε τα υδάτινα οικοσυστήματα.",
    "options": [
      {
        "text": "Σωστό",
        "correct": false
      },
      {
        "text": "Λάθος",
        "correct": true
      }
    ],
    "explanation": "<b>Λάθος.</b> Η υπερβολική χρήση απορρυπαντικών ρυπαίνει τα νερά και προκαλεί ευτροφισμό στα υδάτινα οικοσυστήματα."
  },
  {
    "chapterId": "chapter-9",
    "q": "13. β. Ο βιολογικός καθαρισμός μιμείται τη φυσική διαδικασία αυτοκαθαρισμού των υδάτινων οικοσυστημάτων.",
    "options": [
      {
        "text": "Σωστό",
        "correct": true
      },
      {
        "text": "Λάθος",
        "correct": false
      }
    ],
    "explanation": "<b>Σωστό.</b> Στον βιολογικό καθαρισμό μικροοργανισμοί διασπούν τις οργανικές ουσίες των λυμάτων, όπως συμβαίνει και στη φύση κατά τον αυτοκαθαρισμό των υδάτινων οικοσυστημάτων, αλλά με πολύ γρηγορότερο ρυθμό."
  },
  {
    "chapterId": "chapter-9",
    "q": "13. γ. Μπορούμε να πάρουμε μέτρα για την πρόληψη της ρύπανσης του νερού.",
    "options": [
      {
        "text": "Σωστό",
        "correct": true
      },
      {
        "text": "Λάθος",
        "correct": false
      }
    ],
    "explanation": "<b>Σωστό.</b> Π.χ. με σωστή διαχείριση των αποβλήτων, περιορισμό της χρήσης λιπασμάτων και απορρυπαντικών και κατάλληλη νομοθεσία."
  },
  {
    "chapterId": "chapter-9",
    "q": "13. δ. Η ρύπανση της θάλασσας με λύματα μπορεί να προκαλέσει σοβαρές βλάβες στους ανθρώπους, ακόμη και αν ζουν μακριά της.",
    "options": [
      {
        "text": "Σωστό",
        "correct": true
      },
      {
        "text": "Λάθος",
        "correct": false
      }
    ],
    "explanation": "<b>Σωστό.</b> Μέσω της τροφικής αλυσίδας (π.χ. με την κατανάλωση ψαριών και θαλασσινών) οι ρύποι μπορούν να φτάσουν και σε ανθρώπους που ζουν μακριά από τη θάλασσα."
  },
  {
    "chapterId": "chapter-9",
    "q": "15. α. Το φαινόμενο του ευτροφισμού οφείλεται κυρίως στη ρύπανση του νερού από:",
    "options": [
      {
        "text": "i. λάδια",
        "correct": false
      },
      {
        "text": "ii. μέταλλα",
        "correct": false
      },
      {
        "text": "iii. λιπάσματα",
        "correct": true
      },
      {
        "text": "iv. περιττώματα",
        "correct": false
      }
    ],
    "explanation": "Σωστή απάντηση: iii. Τα λιπάσματα (νιτρικά και φωσφορικά άλατα) ευνοούν την υπερβολική ανάπτυξη φυκιών· όταν αυτά πεθαίνουν και αποικοδομούνται, καταναλώνεται το οξυγόνο του νερού και τα ψάρια πεθαίνουν από ασφυξία."
  },
  {
    "chapterId": "chapter-9",
    "q": "15. β. Δεν είναι μέτρο πρόληψης της ρύπανσης του νερού:",
    "options": [
      {
        "text": "i. ο βιολογικός καθαρισμός",
        "correct": true
      },
      {
        "text": "ii. ο περιορισμός της χρήσης λιπασμάτων",
        "correct": false
      },
      {
        "text": "iii. η νομοθεσία για τον καθαρισμό των πλοίων",
        "correct": false
      },
      {
        "text": "iv. η αποφυγή ρίψης τροφών στους υπονόμους",
        "correct": false
      }
    ],
    "explanation": "Σωστή απάντηση: i. Ο βιολογικός καθαρισμός είναι μέθοδος επεξεργασίας των λυμάτων που έχουν ήδη δημιουργηθεί, δηλαδή μέτρο αντιμετώπισης και όχι πρόληψης. Τα ii, iii και iv περιορίζουν τους ρύπους στην πηγή τους, άρα είναι μέτρα πρόληψης (οι τροφές που πετιούνται στους υπονόμους είναι πηγή μικροβιακής μόλυνσης του νερού)."
  },
  {
    "chapterId": "chapter-9",
    "q": "15. γ. Ο κίνδυνος της εξάπλωσης ασθενειών εξαιτίας του νερού οφείλεται κυρίως:",
    "options": [
      {
        "text": "i. στα βιομηχανικά απόβλητα",
        "correct": false
      },
      {
        "text": "ii. στα αστικά λύματα",
        "correct": true
      },
      {
        "text": "iii. στις γεωργικές καλλιέργειες",
        "correct": false
      }
    ],
    "explanation": "Σωστή απάντηση: ii. Τα αστικά λύματα περιέχουν παθογόνους μικροοργανισμούς (π.χ. από τα περιττώματα), οι οποίοι προκαλούν μολυσματικές ασθένειες, όπως η χολέρα, ο τύφος και η ηπατίτιδα Α. Τα βιομηχανικά απόβλητα και οι γεωργικές καλλιέργειες (λιπάσματα, φυτοφάρμακα) μπορούν επίσης να βλάψουν την υγεία, κυρίως όμως προκαλούν δηλητηριάσεις και όχι εξάπλωση ασθενειών."
  }
];
