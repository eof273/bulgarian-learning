import {AlphabetGroupObject, AlphabetObject} from './types.ts'
import AlphabetLetterGroup from './AlphabetLetterGroup.ts'

class Alphabet {
  groups: AlphabetLetterGroup[]
  groupsCount: number
  languageName: string
  
  constructor(alphabet: AlphabetObject) {
    this.groups = []
    this.groupsCount = 0
    this.languageName = ''
    
    this.initGroups(alphabet.groups)
  }
  
  getGroup(index: number) {
    return this.groups[index]
  }
  
  toObject() {
    const groups = []
    
    for (let i = 0; i < this.groupsCount; i++) {
      groups.push(this.getGroup(i).toObject())
    }
    
    return {
      name: this.languageName,
      groups: groups
    }
  }
  
  addGroup(index: number, group: AlphabetGroupObject) {
    this.groups[index] = new AlphabetLetterGroup(index, group)
    this.groupsCount++
  }
  
  initGroups(groups: AlphabetGroupObject[]) {
    const groupsCount = groups.length
    
    for (let i = 0; i < groupsCount; i++) {
      this.addGroup(i, groups[i])
    }
  }
}

export default Alphabet
