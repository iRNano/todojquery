/*
Instructions:
1. for list items: done part. Apply the completed css rule on list elements when it is clicked.
2. Apply a jQuery effect on plus sign  wherein the input element will fade out.
3. Add a function wherein if the user enter the task, it will add (append) on the list elements.
4. remove list item when trash button is clicked.
*/

$('ul').on('click', (event) => { //Apply inheritance - ALL children will have click listeners
	if(event.target.nodeName === 'SPAN' ){ 
		$(event.target.parentNode).fadeOut(1500, () => $(event.target.parentNode).remove());
	}else if(event.target.nodeName === 'I'){
		$(event.target.parentNode.parentNode).fadeOut(1500, () => $(event.target.parentNode.parentNode).remove());	
	}else{
		$(event.target).addClass('completed');
	}
});	
$('.fa-plus').click(()=>$('input').fadeToggle()); 
$('input').on('keypress', (event)=>{
	if((event.keyCode === 13 && $('input').val() !== "")){
		$('ul').append(`<li><span><i class="fas fa-trash-alt"></i></span>${$('input').val()} </li>`);
		$('input').val('');
	}
});