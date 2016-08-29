// > spinalCase("This Is Spinal Tap") 
// "this-is-spinal-tap"
// > spinalCase("thisIsSpinalTap") 
// "this-is-spinal-tap"
// > spinalCase("The_Andy_Griffith_Show")
// "the-andy-griffith-show"
// > spinalCase("Teletubbies say Eh-oh")
// "teletubbies-say-eh-oh"
// > spinalCase("AllThe-small Things")
// "all-the-small-things"

function spinalCase(str) {
  return String(str).replace(/_/g, "-")
                    .replace(/^\s/, "")
                    .split(/(?=[A-Z])/).join(" ")
                    .replace(/\s/g, "-")
		    .replace(/[-]+/g, "-")
		    .toLowerCase();
}

spinalCase('AllThe-small Things');
