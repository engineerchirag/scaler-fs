const openModalButtonRef = document.querySelector('.quick-action .icon.add');
const modalRef = document.querySelector('.modal');
const closeModalButtonRef = document.querySelector('.modal .right-section .close');
const textareaRef = document.querySelector('.modal textarea');
const priorityBoxesRef = document.querySelectorAll('.modal .right-section .priority-filter .box');

const tasks = [];

const newTask = {
    id: '',
    description: '',
    priority: ''
};

// [
//     {
//         id: '',
//         description: '',
//         priority: ''
//     },
//     {
//         id: '',
//         description: '',
//         priority: ''
//     },{
//         id: '',
//         description: '',
//         priority: ''
//     }
// ]

function openModal() {
    modalRef.classList.remove('hide');
}

function closeModal() {
    modalRef.classList.add('hide');
}

openModalButtonRef.addEventListener('click', function () {
    const isHideClassApplied = [ ...modalRef.classList].includes('hide');
    if (isHideClassApplied) {
        openModal()
    } else {
        closeModal()
    }
});

closeModalButtonRef.addEventListener('click', function () {
    closeModal();
});

textareaRef.addEventListener('keyup', function(ev) {
    if (ev.key == "Shift") {
        const description = ev.target.value;
        const priority = getSelectedClassPriority();
        tasks.push({
            id: tasks.length + 1,
            description: description,
            priority: priority
        });
        console.log(tasks);
        closeModal();
    }
});

function getSelectedClassPriority() {
    let priority = '';
    priorityBoxesRef.forEach(function(singleBoxRef, idx) {
        if ([...singleBoxRef.classList].includes('selected')) {
            priority = `p${idx+1}`;
        }
    });
    return priority;
}

function removeSelectedClassFromBox() {
    priorityBoxesRef.forEach(function(singleBoxRef) {
        singleBoxRef.classList.remove('selected');
    })
}

function addSelectedClassToCurrentBox(boxRef) {
    boxRef.classList.add('selected');
}

priorityBoxesRef.forEach(function(boxRef) {
    boxRef.addEventListener('click', function(ev) {
        // remove selected class from all box
        removeSelectedClassFromBox();
        // add selected class to current box
        addSelectedClassToCurrentBox(ev.target);
    })
});