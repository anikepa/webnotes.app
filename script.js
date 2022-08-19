const addbtn = document.querySelector("#addbtn")
const main = document.querySelector("#main")
addbtn.addEventListener(
    "click",
    function () {
        addnotes()
    }
)
const addnotes = () => {
    const note = document.createElement("div")
    note.classList.add("note")
    note.innerHTML = `<div class="tool">
    <i class="save   ri-save-2-line"></i>
    <i class="dele   ri-delete-bin-5-line"></i>
    </div>
    <textarea></textarea>
`;
    note.querySelector(".dele").addEventListener(
        "click",
        function () {
            note.remove()
        }
    )

    note.querySelector(".save").addEventListener(
        "click",
        function () {
            savenotes()
        }
    )
    main.append(note)
}