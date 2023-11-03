import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Parent } from './type';

@Injectable()
export class ParentService {
  private parent: Parent[] = [];

  insertParent(firstname: string, lastname: string): string {
    const parentId = uuidv4();
    this.parent.push(new Parent(parentId, firstname, lastname));
    return parentId;
  }

  getParent(): Parent[] {
    return this.parent;
  }

  getSingleParent(parentId: string): Parent {
    const [parent] = this.findParent(parentId);
    return parent;
  }

  updateParent(parentId: string, firstName: string, lastName: string): Parent {
    const [parent] = this.findParent(parentId);

    if (firstName) {
      parent.firstName = firstName;
    }
    if (lastName) {
      parent.lastName = lastName;
    }

    return parent;
  }

  deleteParent(parentId: string) {
    const [parent, index] = this.findParent(parentId);
    this.parent.splice(index, 1);
    return { message: 'Uspjesno obrisano' };
  }

  findParent(id: string): [Parent, number] {
    const parentIndex = this.parent.findIndex((parent) => parent.id === id);
    if (parentIndex === -1) {
      throw new NotFoundException(`Parent with ID ${id} not found`);
    }
    return [this.parent[parentIndex], parentIndex];
  }
}
