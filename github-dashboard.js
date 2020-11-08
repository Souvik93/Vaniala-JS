export function searchUser() {
    let user = document.querySelector("#si");
    console.log("Hey There !! From Search User");
    console.log(user);
    const userName = user.value;
    
    fetch(`https://api.github.com/users/${userName}`)
    .then(response => response.json())
    .then(commits => {
        if(commits) {

        
        let emnt = document.getElementById("gd");
        
        let newTag = document.createElement("section");
        newTag.id = 'bd';
        let newElement = document.createElement("h5");
        newElement.innerText = `Username :- ${commits.login}`;

        newTag.appendChild(newElement);

        // Add Profile Pic

        newElement = document.createElement('img');
        
        newElement.src = commits.avatar_url;
        
        newElement.style.width = '140px';

        newElement.style.height = '140px';

        newElement.style.borderRadius = '50%';


        newTag.appendChild(newElement);

        // Add Followers Counts .

        newElement = document.createElement("span");

        newElement.innerText = 'Followers ';

        newTag.appendChild(newElement);
        
        newElement = document.createElement("a");
        newElement.innerText = commits.followers;
        newElement.href = commits.followers_url;

        newTag.appendChild(newElement);

        //Add Following Counts
        newElement = document.createElement('span');
        newElement.textContent = ' Following ';

        newTag.appendChild(newElement);

        newElement = document.createElement('a');

        newElement.innerHTML= commits.following;

        newElement.href = commits.following_url;

        newTag.appendChild(newElement);

        newTag.appendChild(document.createElement('br'));

        newElement = document.createElement('button');

        newElement.innerText = 'Show Repositories';
        newElement.addEventListener('click',fetchRepositories);
        newElement.id = 'showRepositories';

        newTag.appendChild(newElement);

        emnt.append(newTag);
        // alert(commits.login);
        }
    })
    .catch(error=>{
        console.error(error);
    });
    
    function fetchRepositories() {

        console.log('Heyyyyyyyy From!! fetch Repositories');
        
        const url = `https://api.github.com/users/${document.getElementById('si').value}/repos`;

        fetch(url)
        .then(response=>response.json())
        .then(repositories=> {

            document.getElementById('showRepositories').style.display='none';

            const element = document.getElementById('bd');

            const newSection = document.createElement('section');
            newSection.id ='rd';

            const repositoryHeader = document.createElement('p');

            repositoryHeader.innerHTML = 'Total Repositories  :-' + repositories.length;

            const fragment = document.createDocumentFragment();

            const ulElement = document.createElement('ul');

            

            repositories.map(repository=>{
                const childElement = document.createElement('li');
                childElement.innerHTML = repository.name;
                childElement.id = repository.id;
                ulElement.appendChild(childElement);
            });
            


            

            fragment.appendChild(repositoryHeader);

            fragment.appendChild(ulElement);
            // newSection.appendChild(repositoryHeader);
            /// newSection.appendChild(ulElement);

            const hideButtonElement = document.createElement('button');

            hideButtonElement.innerHTML = 'Hide Repositories';

            hideButtonElement.id = 'hide';

            hideButtonElement.onclick = () => {
                console.log('Hey There !! From click method');
                document.getElementById('hide').remove();
                document.getElementById('rd').remove();
                document.getElementById('showRepositories').style.display = 'block';

            };

            fragment.appendChild(hideButtonElement);

            // newSection.appendChild(hideButtonElement);

            newSection.appendChild(fragment);

            element.append(newSection);


        });
    }
}

// module.export = searchUser;