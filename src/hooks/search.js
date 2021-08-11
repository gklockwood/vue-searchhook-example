import { ref, computed, watch } from 'vue';

// Using the term items to make it reusable 
// adding parameter of searchProp to store dynamic values
export default function useSearch(items, searchProp) {
    const enteredSearchTerm = ref('');
    const activeSearchTerm = ref('');

    const availableItems = computed(function() {
        let filteredItems = [];
        if (activeSearchTerm.value) {
            filteredItems = items.filter((item) =>
                item[searchProp].toLowerCase().includes(activeSearchTerm.value.toLowerCase())
            );
        } else if (items.vaue) {
            filteredItems = items.value;
        }
        return filteredItems;
    });

    watch(enteredSearchTerm, function(newValue) {
        setTimeout(() => {
            if (newValue === enteredSearchTerm.value) {
                activeSearchTerm.value = newValue;
            }
        }, 300);
    });

    function updateSearch(val) {
        enteredSearchTerm.value = val;
    }

    return {
        enteredSearchTerm,
        availableItems,
        updateSearch
    };
}