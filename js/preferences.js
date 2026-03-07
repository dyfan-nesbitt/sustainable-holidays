var uncheckedContinents = document.querySelector('.unchecked-continents');
var checkedContinents = document.querySelector('.checked-continents');
var uncheckedEnvironments = document.querySelector('.unchecked-environments');
var checkedEnvironments = document.querySelector('.checked-environments');
var uncheckedActivities = document.querySelector('.unchecked-activities');
var checkedActivities = document.querySelector('.checked-activities');
var holidayStartDateInput = document.getElementById('holidayStartDate');
var holidayEndDateInput = document.getElementById('holidayEndDate');
var groupSizeSelect = document.getElementById('groupSizeSelect');
var proceedButton = document.getElementById('proceedButton');
var preferences;

fetch('JSON/preferences.json')
    .then(response => response.json())
    .then(data => {
        preferences = data;
        updatePreferences();
    })
    .catch(error => console.error('Error loading preferences:', error));



function updatePreferences() {
    
    uncheckedContinents.innerHTML = "";
    checkedContinents.innerHTML = "";
    uncheckedEnvironments.innerHTML = "";
    checkedEnvironments.innerHTML = "";
    uncheckedActivities.innerHTML = "";
    checkedActivities.innerHTML = "";

    // Handle continents
    preferences.continents.forEach(function (item, index) {
        var preferenceElement = document.createElement("li");
        preferenceElement.textContent = item.preference;
        preferenceElement.setAttribute('data-category', 'continents');
        preferenceElement.setAttribute('data-index', index);

        preferenceElement.addEventListener("click", function (event) {
            var category = event.target.getAttribute('data-category');
            var itemIndex = parseInt(event.target.getAttribute('data-index'));
            preferences[category][itemIndex].checked = !preferences[category][itemIndex].checked;
            updatePreferences();
        });

        if (item.checked) {
            checkedContinents.appendChild(preferenceElement);
        } else {
            uncheckedContinents.appendChild(preferenceElement);
        }
    });

    //environments
    preferences.environments.forEach(function (item, index) {
        var preferenceElement = document.createElement("li");
        preferenceElement.textContent = item.preference;
        preferenceElement.setAttribute('data-category', 'environments');
        preferenceElement.setAttribute('data-index', index);

        preferenceElement.addEventListener("click", function (event) {
            var category = event.target.getAttribute('data-category');
            var itemIndex = parseInt(event.target.getAttribute('data-index'));
            preferences[category][itemIndex].checked = !preferences[category][itemIndex].checked;
            updatePreferences();
        });

        if (item.checked) {
            checkedEnvironments.appendChild(preferenceElement);
        } else {
            uncheckedEnvironments.appendChild(preferenceElement);
        }
    });

    //activities
    preferences.activities.forEach(function (item, index) {
        var preferenceElement = document.createElement("li");
        preferenceElement.textContent = item.preference;
        preferenceElement.setAttribute('data-category', 'activities');
        preferenceElement.setAttribute('data-index', index);

        preferenceElement.addEventListener("click", function (event) {
            var category = event.target.getAttribute('data-category');
            var itemIndex = parseInt(event.target.getAttribute('data-index'));
            preferences[category][itemIndex].checked = !preferences[category][itemIndex].checked;
            updatePreferences();
        });

        if (item.checked) {
            checkedActivities.appendChild(preferenceElement);
        } else {
            uncheckedActivities.appendChild(preferenceElement);
        }
    });

    // Save the preferences to localStorage
    var selectedPreferences = [];
    ['continents', 'environments', 'activities'].forEach(function(category) {
        preferences[category].forEach(function(item) {
            if (item.checked) {
                selectedPreferences.push(item.preference);
            }
        });
    });

    //local storage
    localStorage.setItem('selectedPreferences', JSON.stringify(selectedPreferences));
    localStorage.setItem('holidayStartDate', holidayStartDateInput.value);
    localStorage.setItem('holidayEndDate', holidayEndDateInput.value);
    localStorage.setItem('groupSize', groupSizeSelect.value);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners for date and group size inputs
    holidayStartDateInput.addEventListener('change', function() {
        updatePreferences();
    });
    
    holidayEndDateInput.addEventListener('change', function() {
        updatePreferences();
    });
    
    groupSizeSelect.addEventListener('change', function() {
        updatePreferences();
    });
    
    // Proceed button to navigate to results page
    proceedButton.addEventListener('click', function() {
        window.location.href = "results.html";
    });
});