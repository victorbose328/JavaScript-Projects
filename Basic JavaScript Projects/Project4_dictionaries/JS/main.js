function my_Dictionary() {
    var Heroes = {
        Ironman: "Iron Man is the superhero persona of Tony Stark, a businessman and engineer who runs the weapons manufacturer Stark Industries.",
        Thor: "A prominent God in Germanic paganism. He is a hammer-wielding god associated with lightning, thunder, storms, sacred groves and trees, strength, the protection of humankind, hallowing, and fertility.",
        Deadpool: "Deadpool is the alter ego of Wade Wilson, a disfigured Canadian mercenary with superhuman regenerative healing abilities. He is known for his tendency to joke incessantly and break the fourth wall for humorous effect.",
    };
    delete Heroes.Thor
    document.getElementById("Dictionary").innerHTML = Heroes.Thor;   
}
