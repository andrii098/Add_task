
const statuses = [
    {
        name: "Не начато",
        class: "primary",
        icon: "bi bi-app",
    },
    {
        name: "В процессе",
        class: "warning",
        icon: "bi bi-hourglass",
    },
    {
        name: "Выполнено",
        class: "success",
        icon: "bi bi-check-square",
    },
    {
        name: "Приостановка",
        class: "danger",
        icon: "bi bi-pause-btn",
    },
    {
        name: "Отменено",
        class: "secondary",
        icon: "bi bi-x-square",
    },
];

function statusNameHelper(options) {
   return (statuses[options] || {name:'unknown'}).name;
}

function statusClassHelper(options) {
   return (statuses[options] || {class:'info'}).class;
}

function statusIconHelper(options) {
   return (statuses[options] || {icon:'bi bi-question-square'}).icon;
}


module.exports = {
    statuses,
    statusNameHelper,
    statusClassHelper,
    statusIconHelper,
}


