const openModalButtonRef = document.querySelector('.quick-action .icon.add');
const modalRef = document.querySelector('.modal');
const closeModalButtonRef = document.querySelector('.modal .right-section .close');
const textareaRef = document.querySelector('.modal textarea');
const priorityBoxesRef = document.querySelectorAll('.modal .right-section .priority-filter .box');
const ticketsSectionRef = document.querySelector('.ticket-section');

const tasks = [
    {
        id: '1',
        description: 'Task 1',
        priority: 'p1'
    },
    {
        id: '2',
        description: 'Task 2',
        priority: 'p2'
    },{
        id: '3',
        description: 'Task 3',
        priority: 'p3'
    }
];

const newTask = {
    id: '',
    description: '',
    priority: ''
};


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
        listTickets(tasks);
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

function createTicket(ticket) {
    return `
    <div class="ticket-priority ${ticket.priority}"></div>
    <div class="ticket-id">${ticket.id}</div>
    <div class="ticket-content">
        <textarea disabled>${ticket.description}</textarea>
    </div>
    <div class="ticket-lock locked">
        <i class="fa-solid fa-lock"></i>
        <i class="fa-solid fa-lock-open"></i>
    </div>
    `;
}

function clearList() {
    ticketsSectionRef.innerHTML = '';
}

function listTickets(tickets) {
    clearList();
    tickets.forEach((ticket) => {
        console.log(ticket);
        const ticketContainerRef = document.createElement('div');
        ticketContainerRef.setAttribute('class', 'ticket-container');
        ticketContainerRef.setAttribute('data-id', ticket.id);
        const ticketHTML = createTicket(ticket);
        ticketContainerRef.innerHTML = ticketHTML;
        ticketsSectionRef.appendChild(ticketContainerRef);
        const textAreaRef = ticketContainerRef.querySelector('.ticket-content textarea');
        textAreaRef.addEventListener('blur', function(ev) {
            const currentTicketContainerRef = ev.target.closest('.ticket-container');
            const currentTicketId = currentTicketContainerRef.getAttribute('data-id');
            updateTaskDescription(currentTicketId, textAreaRef.value);
        });
    });
}

function updateTaskDescription(id, updatedDescription) {
    const selectedTask = tasks.find((task) => task.id === id);
    selectedTask.description = updatedDescription;
    console.log(tasks);
}


ticketsSectionRef.addEventListener('click', function(ev) {
    if ([...ev.target.classList].includes('fa-solid')) {
        const currentTicketContainerRef = ev.target.closest('.ticket-container');
        const currentTextAreaRef = currentTicketContainerRef.querySelector('.ticket-content textarea')
        const lockRef = currentTicketContainerRef.querySelector('.ticket-lock');
        const isEditable = lockRef.classList.contains('locked');
        if (isEditable) {
            lockRef.classList.remove('locked');
            currentTextAreaRef.removeAttribute('disabled');
        } else {
            lockRef.classList.add('locked');
            currentTextAreaRef.setAttribute('disabled', true);
        }
    }
});

listTickets(tasks);
