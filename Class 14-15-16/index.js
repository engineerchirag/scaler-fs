const openModalButtonRef = document.querySelector('.quick-action .icon.add');
const modalRef = document.querySelector('.modal');
const closeModalButtonRef = document.querySelector('.modal .right-section .close');
const textareaRef = document.querySelector('.modal textarea');
const priorityBoxesRef = document.querySelectorAll('.modal .right-section .priority-filter .box');
const ticketsSectionRef = document.querySelector('.ticket-section');
const deleteDivRef = document.querySelector('.quick-action .icon.delete');
const deleteIconRef = document.querySelector('.quick-action .icon.delete .fa-trash');
const priorityFilterRef = document.querySelector('.priority-filter');
const clearFilterRef = document.querySelector('.clear-filter');

let tasks;

function initializeLocalStorage() {
    tasks = getTasksFromLocalStorage();
    if (!tasks) {
        tasks = [
            {
                id: (new ShortUniqueId())(),
                description: 'Task 1',
                priority: 'p1'
            },
            {
                id: (new ShortUniqueId())(),
                description: 'Task 2',
                priority: 'p2'
            },{
                id: (new ShortUniqueId())(),
                description: 'Task 3',
                priority: 'p3'
            }
        ]
        updateTasksInLocalStorage(tasks);
    }
}
initializeLocalStorage();


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
        var uid = new ShortUniqueId();
        tasks.push({
            id: uid(),
            description: description,
            priority: priority
        });
        listTickets(tasks);
        updateTasksInLocalStorage(tasks);
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
    <div class="ticket-priority" data-priority=${ticket.priority}></div>
    <div class="ticket-id">${ticket.id}</div>
    <div class="ticket-content">
        <textarea disabled>${ticket.description}</textarea>
    </div>
    <div class="ticket-lock locked">
        <i class="fa-solid fa-lock"></i>
        <i class="fa-solid fa-lock-open"></i>
    </div>
    <div class="ticket-delete">
        <i class="fa-solid fa-trash"></i>
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
    updateTasksInLocalStorage(tasks);
    console.log(tasks);
}


ticketsSectionRef.addEventListener('click', function(ev) {
    if ([...ev.target.classList].includes('fa-lock')) {
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

    if ([...ev.target.classList].includes('fa-trash')) {
        const currentTicketContainerRef = ev.target.closest('.ticket-container');
        const taskId = currentTicketContainerRef.getAttribute('data-id');
        deleteTask(taskId);
        listTickets(tasks);
    }

    if (ev.target.classList.contains('ticket-priority')) {
        changePriority(ev.target);
    }
});

listTickets(tasks);

function deleteTask(taskId) {
    // Delete task from tasks
    tasks = tasks.filter(task => task.id != taskId);

    // update in localStorage
    updateTasksInLocalStorage(tasks);
}

function updateTasksInLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasksFromLocalStorage() {
    const tasksData = localStorage.getItem('tasks');
    return tasksData ? JSON.parse(tasksData) : undefined;
}

deleteDivRef.addEventListener('click', function(ev) {
    const isDeleteEnabled = ev.currentTarget.classList.contains('enabled');
    if (!isDeleteEnabled) {
        ev.currentTarget.classList.add('enabled');
        ticketsSectionRef.classList.add('enable-delete');
    } else {
        ev.currentTarget.classList.remove('enabled');
        ticketsSectionRef.classList.remove('enable-delete');
    }
});


priorityFilterRef.addEventListener('click', function(ev) {
    if (ev.target.classList.contains('box')) {
        const selectedPriority = ev.target.id;
        const filteredTasks = tasks.filter(task => task.priority === selectedPriority);
        listTickets(filteredTasks);
    }
});

clearFilterRef.addEventListener('click', function(ev) {
    listTickets(tasks);
});

function getNextPriority(priorityStr) {
    const priority = Number(priorityStr.split('p')[1]);
    const priorities = [1, 2, 3, 4];
    return `p${(priority % priorities.length) + 1}`;
}

function changePriority(domRef) {
    // Change in DOM
    const currentPriority = domRef.getAttribute('data-priority');
    const currentTicketContainerRef = domRef.closest('.ticket-container');
    const taskId = currentTicketContainerRef.getAttribute('data-id');
    const nextPriority = getNextPriority(currentPriority);
    domRef.setAttribute('data-priority', nextPriority);

    // Update in tasks (in memory)
    impactedTask = tasks.find(task => task.id === taskId);
    impactedTask.priority = nextPriority;

    // Update in localStorage
    updateTasksInLocalStorage(tasks);
}

