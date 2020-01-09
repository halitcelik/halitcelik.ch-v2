//Although they are not used anywhere else, just for good practice, I wrap variables in block with {} so that they are not in global scope.
{


    let iconsArray = document.querySelectorAll(".unsocial-icons>a");
    let box = document.getElementById("msg-box");
    var messageText = ""
    document.addEventListener("click", function(e) {
        var targetName = e.target.getAttribute("data-rel");
        if (targetName == "facebook" || targetName == "twitter") {
            messageText = "Sorry I don't have " + targetName + "\n account. How about mailing me?"
            box.style.opacity = 1
            box.style.visibility = "visible";
            e.preventDefault();
        } else if (targetName == "email") {
            messageText = ""
        } else if (box.style.visibility == "visible" && targetName != "facebook" && targetName != "twitter") {
            box.style.opacity = 0;
            setTimeout(function() {
                box.style.visibility = "hidden";
            }, 1000)
        }
        document.getElementById("msg-text").textContent = messageText;
    });

}

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        navItem: 0,
        bio: false,
        works: false,
        contact: false
    },
    methods: {
        loopAnimation: function(i) {
            var vm = this;
            setTimeout(function() {
                vm.navItem += 1;
                if (--i) vm.loopAnimation(i);
            }, 500)
        },
        toggle: function(event) {
            console.log(event, "clicked")
            if (event === "bio") {
                this.bio = true;
                this.works = false;
                this.contact = false
            } else if (event === "works") {
                this.bio = false;
                this.works = true;
                this.contact = false
            } else {
                this.bio = false;
                this.works = false;
                this.contact = true;
            }
        }
    },
    mounted: function() {
        this.$nextTick(function() {
            this.loopAnimation(4)
        })
    }
});
