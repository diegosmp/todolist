const setTagAsDone = async (element, id) => {
    event.preventDefault()
    try {
        let header = new Headers({ 'Content-Type': 'application/json' })
        let body = JSON.stringify({task: {done: element.checked}})
        let response = await fetch(`/tasks/${id}/?_method=put`, {
            method:'PUT',
            headers: header,
            body: body
        })
        let data = await response.json()
        let task = data.task
        let parent = element.parentNode

        if(task.done) {
            element.checked = true
            parent.classList.add('has-text-success')
            parent.classList.add('is-italic')
        }else {
            element.checked = false
            parent.classList.remove('has-text-success')
            parent.classList.remove('is-italic')
        }
    } catch (error) {
        console.log(error.message)
        alert('Erro ao atualizar a tarefa ')
    }
}