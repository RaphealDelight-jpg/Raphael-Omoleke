function char(n,h=100,s=10){
  return {name:n,health:h,strength:s,
    attack(t){t.health-=this.strength},
    heal(){this.health+=10}
  };
}
const a=char('A'), b=char('B'); a.attack(b); b.heal(); console.log(a,b);
