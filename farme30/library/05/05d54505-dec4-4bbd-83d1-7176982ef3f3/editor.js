System.register(["cce.code-quality.cr", "cc", "../../../Common/Game/MyComponent.js", "./Floor.js", "./FloorType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, instantiate, Node, Prefab, Vec3, _decorator, MyComponent, Floor, FloorType, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3, _temp, _crd, ccclass, property, FloorManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMyComponent(extras) {
    _reporterNs.report("MyComponent", "../../../Common/Game/MyComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFloor(extras) {
    _reporterNs.report("Floor", "./Floor", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFloorType(extras) {
    _reporterNs.report("FloorType", "./FloorType", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _class3: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cceCodeQualityCr) {
      _reporterNs = _cceCodeQualityCr;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_CommonGameMyComponentJs) {
      MyComponent = _CommonGameMyComponentJs.MyComponent;
    }, function (_FloorJs) {
      Floor = _FloorJs.Floor;
    }, function (_FloorTypeJs) {
      FloorType = _FloorTypeJs.FloorType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "05d54UF3sRLvYPRcXaYLvPz", "FloorMananger", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FloorManager", FloorManager = (_dec = ccclass('FloorManager'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = (_temp = _class3 = class FloorManager extends (_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "floorPrefabs", _descriptor, this);

          _initializerDefineProperty(this, "Camera", _descriptor2, this);

          _initializerDefineProperty(this, "Player", _descriptor3, this);

          _defineProperty(this, "allFloors", []);

          _defineProperty(this, "data", {
            Level1: {
              floorData: "111111111111111111111111",
              floorDirectionData: "111333222333111111111444",
              doorData: "000000000000000000000000"
            }
          });

          _defineProperty(this, "movespeed", 3);

          _defineProperty(this, "moveSpeedx", 0);

          _defineProperty(this, "moveSpeedz", 0);

          _defineProperty(this, "nowFloorIndex", 0);

          _defineProperty(this, "cameraAngle", 0);
        }

        onLoad() {
          FloorManager.I = this.node.getComponent(FloorManager);
        }

        Init() {
          // let door = this.CreateFloor(10001);
          // if (door) {
          //     this.node.addChild(door);
          //     door.position = new Vec3(0, 0, 0)
          // }
          this.CreateFloorForJson(this.data);
        }

        CreateFloor(FloorID) {
          for (let i = 0; i < this.floorPrefabs.length; i++) {
            const element = this.floorPrefabs[i].data.getComponent(_crd && Floor === void 0 ? (_reportPossibleCrUseOfFloor({
              error: Error()
            }), Floor) : Floor);

            if (element.ID == FloorID) {
              let floor = instantiate(this.floorPrefabs[i]);
              this.allFloors.push(floor.getComponent(_crd && Floor === void 0 ? (_reportPossibleCrUseOfFloor({
                error: Error()
              }), Floor) : Floor));
              return floor;
            }
          }

          console.error("创建地板失败,不存在ID为:", FloorID, "的地板,请检查后重试!");
          return null;
        }

        CreateFloorForJson(json) {
          // json = this.data;
          let node = this.node;
          let x = 0;
          let z = 0;

          for (let i = 0; i < json.Level1.floorData.length; i++) {
            const element = json.Level1.floorData[i];
            const id = Number(element) + 10000;
            let floorNode = this.CreateFloor(id);

            if (floorNode) {
              let type = this.SetNewFloorTypeData(floorNode, json, i);

              if (i == 0) {
                floorNode.setWorldPosition(0, 0, 0);
              } else {
                ({
                  z,
                  x
                } = this.SetFloorNodePosition(type, z, floorNode, x));
              }

              node.addChild(floorNode);
            }
          }
        }

        SetFloorNodePosition(type, z, floorNode, x) {
          switch (type) {
            case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
              error: Error()
            }), FloorType) : FloorType).FRONT:
              z = z - 3;
              floorNode.setWorldPosition(x, 0, z);
              break;

            case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
              error: Error()
            }), FloorType) : FloorType).BACK:
              z = z + 3;
              floorNode.setWorldPosition(x, 0, z);
              break;

            case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
              error: Error()
            }), FloorType) : FloorType).LEFT:
              x = x - 3;
              floorNode.setWorldPosition(x, 0, z);
              break;

            case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
              error: Error()
            }), FloorType) : FloorType).RIGHT:
              x = x + 3;
              floorNode.setWorldPosition(x, 0, z);
              break;

            default:
              break;
          }

          return {
            z,
            x
          };
        }
        /**创建时根据json数据设置新地板的方向属性 */


        SetNewFloorTypeData(floorNode, json, i) {
          let floor = floorNode.getComponent(_crd && Floor === void 0 ? (_reportPossibleCrUseOfFloor({
            error: Error()
          }), Floor) : Floor);

          if (floor) {
            switch (json.Level1.floorDirectionData[i]) {
              case '1':
                floor.floorType = (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).FRONT;
                break;

              case '2':
                floor.floorType = (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).BACK;
                break;

              case '3':
                floor.floorType = (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).LEFT;
                break;

              case '4':
                floor.floorType = (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).RIGHT;
                break;

              default:
                throw new Error("找不到类型:" + json.Level1.floorDirectionData[i]);
            }

            return floor.floorType;
          }

          throw new Error("找不到类型:" + json.Level1.floorDirectionData[i]);
        }

        RemoveFloor() {
          this.floorPrefabs.splice(0, 1);
        }

        onUpDate(dt) {
          this.MoveFloor(dt);
        }

        MoveFloor(dt) {
          var _this$Camera, _this$Camera2, _this$Player;

          if (!this.allFloors[this.nowFloorIndex]) return;

          if (!this.allFloors[this.nowFloorIndex].IsNowFloor()) {
            this.nowFloorIndex++;
          } //若下个结点存在 并且与当前结点的类型不同


          if (this.nowFloorIndex + 1 < this.allFloors.length && this.allFloors[this.nowFloorIndex + 1].floorType != this.allFloors[this.nowFloorIndex].floorType) {
            //应该转向
            if (Vec3.distance(this.allFloors[this.nowFloorIndex].node.worldPosition, new Vec3(0, 0, 0)) < 0.1) {
              switch (this.allFloors[this.nowFloorIndex + 1].floorType) {
                case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).FRONT:
                  this.MoveFront();
                  break;

                case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).BACK:
                  this.MoveBack();
                  break;

                case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).LEFT:
                  this.MoveLeft();
                  break;

                case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                  error: Error()
                }), FloorType) : FloorType).RIGHT:
                  this.MoveRight();
                  break;

                default:
                  this.MoveStop();
                  break;
              }
            } //转摄像头


            switch (this.allFloors[this.nowFloorIndex + 1].floorType) {
              case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                error: Error()
              }), FloorType) : FloorType).FRONT:
                this.cameraAngle = 0;
                break;

              case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                error: Error()
              }), FloorType) : FloorType).BACK:
                this.cameraAngle = 180;
                break;

              case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                error: Error()
              }), FloorType) : FloorType).LEFT:
                this.cameraAngle = 90;
                break;

              case (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
                error: Error()
              }), FloorType) : FloorType).RIGHT:
                this.cameraAngle = -90;
                break;
            }
          }

          let out = new Vec3(0, 0, 0);
          let angle = new Vec3(0, 0, 0);
          (_this$Camera = this.Camera) === null || _this$Camera === void 0 ? void 0 : _this$Camera.getWorldRotation().getEulerAngles(angle);
          console.log(angle);
          Vec3.lerp(out, angle, new Vec3(0, this.cameraAngle, 0), 0.1); // console.log(angle);

          (_this$Camera2 = this.Camera) === null || _this$Camera2 === void 0 ? void 0 : _this$Camera2.setRotationFromEuler(out.x, out.y, out.z);
          (_this$Player = this.Player) === null || _this$Player === void 0 ? void 0 : _this$Player.setRotationFromEuler(out.x, out.y, out.z);

          for (let i = 0; i < this.allFloors.length; i++) {
            const element = this.allFloors[i];
            element.node.setWorldPosition(element.node.worldPosition.x + this.moveSpeedx * this.movespeed * dt, 0, element.node.worldPosition.z + this.moveSpeedz * this.movespeed * dt);
          }
        }

        MoveFront() {
          this.moveSpeedx = 0;
          this.moveSpeedz = 1;
        }

        MoveBack() {
          this.moveSpeedx = 0;
          this.moveSpeedz = -1;
        }

        MoveLeft() {
          this.moveSpeedx = 1;
          this.moveSpeedz = 0;
        }

        MoveRight() {
          this.moveSpeedx = -1;
          this.moveSpeedz = 0;
        }

        MoveStop() {
          this.moveSpeedx = 0;
          this.moveSpeedz = 0;
        }

      }, _defineProperty(_class3, "I", void 0), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "floorPrefabs", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Camera", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Player", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL0dhbWUvRG9vci9GbG9vck1hbmFuZ2VyLnRzIl0sIm5hbWVzIjpbImluc3RhbnRpYXRlIiwiTm9kZSIsIlByZWZhYiIsIlZlYzMiLCJfZGVjb3JhdG9yIiwiTXlDb21wb25lbnQiLCJGbG9vciIsIkZsb29yVHlwZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkZsb29yTWFuYWdlciIsIkxldmVsMSIsImZsb29yRGF0YSIsImZsb29yRGlyZWN0aW9uRGF0YSIsImRvb3JEYXRhIiwib25Mb2FkIiwiSSIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJJbml0IiwiQ3JlYXRlRmxvb3JGb3JKc29uIiwiZGF0YSIsIkNyZWF0ZUZsb29yIiwiRmxvb3JJRCIsImkiLCJmbG9vclByZWZhYnMiLCJsZW5ndGgiLCJlbGVtZW50IiwiSUQiLCJmbG9vciIsImFsbEZsb29ycyIsInB1c2giLCJjb25zb2xlIiwiZXJyb3IiLCJqc29uIiwieCIsInoiLCJpZCIsIk51bWJlciIsImZsb29yTm9kZSIsInR5cGUiLCJTZXROZXdGbG9vclR5cGVEYXRhIiwic2V0V29ybGRQb3NpdGlvbiIsIlNldEZsb29yTm9kZVBvc2l0aW9uIiwiYWRkQ2hpbGQiLCJGUk9OVCIsIkJBQ0siLCJMRUZUIiwiUklHSFQiLCJmbG9vclR5cGUiLCJFcnJvciIsIlJlbW92ZUZsb29yIiwic3BsaWNlIiwib25VcERhdGUiLCJkdCIsIk1vdmVGbG9vciIsIm5vd0Zsb29ySW5kZXgiLCJJc05vd0Zsb29yIiwiZGlzdGFuY2UiLCJ3b3JsZFBvc2l0aW9uIiwiTW92ZUZyb250IiwiTW92ZUJhY2siLCJNb3ZlTGVmdCIsIk1vdmVSaWdodCIsIk1vdmVTdG9wIiwiY2FtZXJhQW5nbGUiLCJvdXQiLCJhbmdsZSIsIkNhbWVyYSIsImdldFdvcmxkUm90YXRpb24iLCJnZXRFdWxlckFuZ2xlcyIsImxvZyIsImxlcnAiLCJzZXRSb3RhdGlvbkZyb21FdWxlciIsInkiLCJQbGF5ZXIiLCJtb3ZlU3BlZWR4IiwibW92ZXNwZWVkIiwibW92ZVNwZWVkeiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0NBLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsTSxPQUFBQSxNO0FBQXVDQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsVSxPQUFBQSxVOztBQUV6RkMsTUFBQUEsVyw0QkFBQUEsVzs7QUFHQUMsTUFBQUEsSyxZQUFBQSxLOztBQUNBQyxNQUFBQSxTLGdCQUFBQSxTOzs7Ozs7O09BRUg7QUFBRUMsUUFBQUEsT0FBRjtBQUFXQyxRQUFBQTtBQUFYLE8sR0FBd0JMLFU7OzhCQUdqQk0sWSxXQURaRixPQUFPLENBQUMsY0FBRCxDLFVBSUhDLFFBQVEsQ0FBQ1AsTUFBRCxDLFVBRVJPLFFBQVEsQ0FBQ1IsSUFBRCxDLFVBRVJRLFFBQVEsQ0FBQ1IsSUFBRCxDLDhDQVJiLE1BQ2FTLFlBRGI7QUFBQTtBQUFBLHNDQUM4QztBQUFBO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEsNkNBU3JCLEVBVHFCOztBQUFBLHdDQVduQztBQUNIQyxZQUFBQSxNQUFNLEVBQUU7QUFDSkMsY0FBQUEsU0FBUyxFQUFFLDBCQURQO0FBRUpDLGNBQUFBLGtCQUFrQixFQUFFLDBCQUZoQjtBQUdKQyxjQUFBQSxRQUFRLEVBQUU7QUFITjtBQURMLFdBWG1DOztBQUFBLDZDQXFIdEIsQ0FySHNCOztBQUFBLDhDQXNIckIsQ0F0SHFCOztBQUFBLDhDQXVIckIsQ0F2SHFCOztBQUFBLGlEQXdIbEIsQ0F4SGtCOztBQUFBLCtDQXlIcEIsQ0F6SG9CO0FBQUE7O0FBbUIxQ0MsUUFBQUEsTUFBTSxHQUFHO0FBQ0xMLFVBQUFBLFlBQVksQ0FBQ00sQ0FBYixHQUFpQixLQUFLQyxJQUFMLENBQVVDLFlBQVYsQ0FBdUJS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QUFrQixDQUFsQjtBQUNBLGVBQUtFLFVBQUwsR0FBa0IsQ0FBbEI7QUFDSDs7QUFDRGpCLFFBQUFBLFFBQVEsR0FBRztBQUNQLGVBQUtlLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxlQUFLRSxVQUFMLEdBQWtCLENBQUMsQ0FBbkI7QUFDSDs7QUFDRGhCLFFBQUFBLFFBQVEsR0FBRztBQUNQLGVBQUtjLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxlQUFLRSxVQUFMLEdBQWtCLENBQWxCO0FBQ0g7O0FBQ0RmLFFBQUFBLFNBQVMsR0FBRztBQUNSLGVBQUthLFVBQUwsR0FBa0IsQ0FBQyxDQUFuQjtBQUNBLGVBQUtFLFVBQUwsR0FBa0IsQ0FBbEI7QUFDSDs7QUFDRGQsUUFBQUEsUUFBUSxHQUFHO0FBQ1AsZUFBS1ksVUFBTCxHQUFrQixDQUFsQjtBQUNBLGVBQUtFLFVBQUwsR0FBa0IsQ0FBbEI7QUFDSDs7QUEvTXlDLE87Ozs7O2lCQUlqQixFOzs7Ozs7O2lCQUVILEk7Ozs7Ozs7aUJBRUEsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENDQ2xhc3MsIGRpcmVjdG9yLCBFbnVtLCBpbnN0YW50aWF0ZSwgTm9kZSwgUHJlZmFiLCBRdWF0LCBTeXN0ZW0sIHN5c3RlbUV2ZW50LCB2MywgVmVjMywgX2RlY29yYXRvciB9IGZyb20gXCJjY1wiO1xuaW1wb3J0IHsgREVCVUcsIEVESVRPUiB9IGZyb20gXCJjY2UuZW52XCI7XG5pbXBvcnQgeyBNeUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi8uLi9Db21tb24vR2FtZS9NeUNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRG9vciB9IGZyb20gXCIuL0Rvb3JcIjtcbmltcG9ydCB7IERvb3JUeXBlIH0gZnJvbSBcIi4vRG9vclR5cGVcIjtcbmltcG9ydCB7IEZsb29yIH0gZnJvbSBcIi4vRmxvb3JcIjtcbmltcG9ydCB7IEZsb29yVHlwZSB9IGZyb20gXCIuL0Zsb29yVHlwZVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnRmxvb3JNYW5hZ2VyJylcbmV4cG9ydCBjbGFzcyBGbG9vck1hbmFnZXIgZXh0ZW5kcyBNeUNvbXBvbmVudCB7XG5cbiAgICBzdGF0aWMgSTogRmxvb3JNYW5hZ2VyO1xuICAgIEBwcm9wZXJ0eShQcmVmYWIpXG4gICAgZmxvb3JQcmVmYWJzOiBQcmVmYWJbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShOb2RlKVxuICAgIENhbWVyYTogTm9kZSB8IG51bGwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShOb2RlKVxuICAgIFBsYXllcjogTm9kZSB8IG51bGwgPSBudWxsO1xuICAgIGFsbEZsb29yczogRmxvb3JbXSA9IFtdO1xuXG4gICAgZGF0YSA9IHtcbiAgICAgICAgTGV2ZWwxOiB7XG4gICAgICAgICAgICBmbG9vckRhdGE6IFwiMTExMTExMTExMTExMTExMTExMTExMTExXCIsXG4gICAgICAgICAgICBmbG9vckRpcmVjdGlvbkRhdGE6IFwiMTExMzMzMjIyMzMzMTExMTExMTExNDQ0XCIsXG4gICAgICAgICAgICBkb29yRGF0YTogXCIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBGbG9vck1hbmFnZXIuSSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoRmxvb3JNYW5hZ2VyKSBhcyBGbG9vck1hbmFnZXI7XG4gICAgfVxuICAgIEluaXQoKSB7XG4gICAgICAgIC8vIGxldCBkb29yID0gdGhpcy5DcmVhdGVGbG9vcigxMDAwMSk7XG4gICAgICAgIC8vIGlmIChkb29yKSB7XG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoZG9vcik7XG4gICAgICAgIC8vICAgICBkb29yLnBvc2l0aW9uID0gbmV3IFZlYzMoMCwgMCwgMClcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLkNyZWF0ZUZsb29yRm9ySnNvbih0aGlzLmRhdGEpO1xuICAgIH1cblxuICAgIENyZWF0ZUZsb29yKEZsb29ySUQ6IG51bWJlcik6IE5vZGUgfCBudWxsIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZsb29yUHJlZmFicy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9ICh0aGlzLmZsb29yUHJlZmFic1tpXS5kYXRhIGFzIE5vZGUpLmdldENvbXBvbmVudChGbG9vcikgYXMgRmxvb3I7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5JRCA9PSBGbG9vcklEKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZsb29yID0gaW5zdGFudGlhdGUodGhpcy5mbG9vclByZWZhYnNbaV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxsRmxvb3JzLnB1c2goZmxvb3IuZ2V0Q29tcG9uZW50KEZsb29yKSBhcyBGbG9vcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZsb29yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLliJvlu7rlnLDmnb/lpLHotKUs5LiN5a2Y5ZyoSUTkuLo6XCIsIEZsb29ySUQsIFwi55qE5Zyw5p2/LOivt+ajgOafpeWQjumHjeivlSFcIik7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIENyZWF0ZUZsb29yRm9ySnNvbihqc29uOiBhbnkpIHtcbiAgICAgICAgLy8ganNvbiA9IHRoaXMuZGF0YTtcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLm5vZGU7XG4gICAgICAgIGxldCB4ID0gMDtcbiAgICAgICAgbGV0IHogPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGpzb24uTGV2ZWwxLmZsb29yRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGpzb24uTGV2ZWwxLmZsb29yRGF0YVtpXTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gTnVtYmVyKGVsZW1lbnQpICsgMTAwMDA7XG4gICAgICAgICAgICBsZXQgZmxvb3JOb2RlID0gdGhpcy5DcmVhdGVGbG9vcihpZCk7XG4gICAgICAgICAgICBpZiAoZmxvb3JOb2RlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHR5cGUgPSB0aGlzLlNldE5ld0Zsb29yVHlwZURhdGEoZmxvb3JOb2RlLCBqc29uLCBpKTtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZsb29yTm9kZS5zZXRXb3JsZFBvc2l0aW9uKDAsIDAsIDApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICh7IHosIHggfSA9IHRoaXMuU2V0Rmxvb3JOb2RlUG9zaXRpb24odHlwZSwgeiwgZmxvb3JOb2RlLCB4KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5vZGUuYWRkQ2hpbGQoZmxvb3JOb2RlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBTZXRGbG9vck5vZGVQb3NpdGlvbih0eXBlOiBGbG9vclR5cGUsIHo6IG51bWJlciwgZmxvb3JOb2RlOiBOb2RlLCB4OiBudW1iZXIpIHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEZsb29yVHlwZS5GUk9OVDpcbiAgICAgICAgICAgICAgICB6ID0geiAtIDM7XG4gICAgICAgICAgICAgICAgZmxvb3JOb2RlLnNldFdvcmxkUG9zaXRpb24oeCwgMCwgeik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEZsb29yVHlwZS5CQUNLOlxuICAgICAgICAgICAgICAgIHogPSB6ICsgMztcbiAgICAgICAgICAgICAgICBmbG9vck5vZGUuc2V0V29ybGRQb3NpdGlvbih4LCAwLCB6KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRmxvb3JUeXBlLkxFRlQ6XG4gICAgICAgICAgICAgICAgeCA9IHggLSAzO1xuICAgICAgICAgICAgICAgIGZsb29yTm9kZS5zZXRXb3JsZFBvc2l0aW9uKHgsIDAsIHopO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBGbG9vclR5cGUuUklHSFQ6XG4gICAgICAgICAgICAgICAgeCA9IHggKyAzO1xuICAgICAgICAgICAgICAgIGZsb29yTm9kZS5zZXRXb3JsZFBvc2l0aW9uKHgsIDAsIHopO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB6LCB4IH07XG4gICAgfVxuXG4gICAgLyoq5Yib5bu65pe25qC55o2uanNvbuaVsOaNruiuvue9ruaWsOWcsOadv+eahOaWueWQkeWxnuaApyAqL1xuICAgIHByaXZhdGUgU2V0TmV3Rmxvb3JUeXBlRGF0YShmbG9vck5vZGU6IE5vZGUsIGpzb246IGFueSwgaTogbnVtYmVyKTogRmxvb3JUeXBlIHtcbiAgICAgICAgbGV0IGZsb29yID0gZmxvb3JOb2RlLmdldENvbXBvbmVudChGbG9vcikgYXMgRmxvb3I7XG4gICAgICAgIGlmIChmbG9vcikge1xuICAgICAgICAgICAgc3dpdGNoIChqc29uLkxldmVsMS5mbG9vckRpcmVjdGlvbkRhdGFbaV0pIHtcbiAgICAgICAgICAgICAgICBjYXNlICcxJzpcbiAgICAgICAgICAgICAgICAgICAgZmxvb3IuZmxvb3JUeXBlID0gRmxvb3JUeXBlLkZST05UO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICcyJzpcbiAgICAgICAgICAgICAgICAgICAgZmxvb3IuZmxvb3JUeXBlID0gRmxvb3JUeXBlLkJBQ0s7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJzMnOlxuICAgICAgICAgICAgICAgICAgICBmbG9vci5mbG9vclR5cGUgPSBGbG9vclR5cGUuTEVGVDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnNCc6XG4gICAgICAgICAgICAgICAgICAgIGZsb29yLmZsb29yVHlwZSA9IEZsb29yVHlwZS5SSUdIVDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi5om+5LiN5Yiw57G75Z6LOlwiICsganNvbi5MZXZlbDEuZmxvb3JEaXJlY3Rpb25EYXRhW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZsb29yLmZsb29yVHlwZTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLmib7kuI3liLDnsbvlnos6XCIgKyBqc29uLkxldmVsMS5mbG9vckRpcmVjdGlvbkRhdGFbaV0pXG4gICAgfVxuXG4gICAgUmVtb3ZlRmxvb3IoKSB7XG4gICAgICAgIHRoaXMuZmxvb3JQcmVmYWJzLnNwbGljZSgwLCAxKTtcbiAgICB9XG4gICAgbW92ZXNwZWVkOiBudW1iZXIgPSAzO1xuICAgIG1vdmVTcGVlZHg6IG51bWJlciA9IDA7XG4gICAgbW92ZVNwZWVkejogbnVtYmVyID0gMDtcbiAgICBub3dGbG9vckluZGV4OiBudW1iZXIgPSAwO1xuICAgIGNhbWVyYUFuZ2xlOiBudW1iZXIgPSAwO1xuXG4gICAgb25VcERhdGUoZHQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLk1vdmVGbG9vcihkdCk7XG4gICAgfVxuXG5cblxuICAgIE1vdmVGbG9vcihkdDogbnVtYmVyKSB7XG4gICAgICAgIGlmICghdGhpcy5hbGxGbG9vcnNbdGhpcy5ub3dGbG9vckluZGV4XSkgcmV0dXJuO1xuICAgICAgICBpZiAoIXRoaXMuYWxsRmxvb3JzW3RoaXMubm93Rmxvb3JJbmRleF0uSXNOb3dGbG9vcigpKSB7XG4gICAgICAgICAgICB0aGlzLm5vd0Zsb29ySW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICAvL+iLpeS4i+S4que7k+eCueWtmOWcqCDlubbkuJTkuI7lvZPliY3nu5PngrnnmoTnsbvlnovkuI3lkIxcbiAgICAgICAgaWYgKHRoaXMubm93Rmxvb3JJbmRleCArIDEgPCB0aGlzLmFsbEZsb29ycy5sZW5ndGggJiYgdGhpcy5hbGxGbG9vcnNbdGhpcy5ub3dGbG9vckluZGV4ICsgMV0uZmxvb3JUeXBlICE9IHRoaXMuYWxsRmxvb3JzW3RoaXMubm93Rmxvb3JJbmRleF0uZmxvb3JUeXBlKSB7XG4gICAgICAgICAgICAvL+W6lOivpei9rOWQkVxuICAgICAgICAgICAgaWYgKFZlYzMuZGlzdGFuY2UodGhpcy5hbGxGbG9vcnNbdGhpcy5ub3dGbG9vckluZGV4XS5ub2RlLndvcmxkUG9zaXRpb24sIG5ldyBWZWMzKDAsIDAsIDApKSA8IDAuMSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5hbGxGbG9vcnNbdGhpcy5ub3dGbG9vckluZGV4ICsgMV0uZmxvb3JUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgRmxvb3JUeXBlLkZST05UOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Nb3ZlRnJvbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIEZsb29yVHlwZS5CQUNLOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Nb3ZlQmFjaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgRmxvb3JUeXBlLkxFRlQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLk1vdmVMZWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBGbG9vclR5cGUuUklHSFQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLk1vdmVSaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLk1vdmVTdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL+i9rOaRhOWDj+WktFxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmFsbEZsb29yc1t0aGlzLm5vd0Zsb29ySW5kZXggKyAxXS5mbG9vclR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIEZsb29yVHlwZS5GUk9OVDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW1lcmFBbmdsZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgRmxvb3JUeXBlLkJBQ0s6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhQW5nbGUgPSAxODA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgRmxvb3JUeXBlLkxFRlQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhQW5nbGUgPSA5MDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBGbG9vclR5cGUuUklHSFQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhQW5nbGUgPSAtOTA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG91dCA9IG5ldyBWZWMzKDAsIDAsIDApO1xuICAgICAgICBsZXQgYW5nbGUgPSBuZXcgVmVjMygwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5DYW1lcmE/LmdldFdvcmxkUm90YXRpb24oKS5nZXRFdWxlckFuZ2xlcyhhbmdsZSlcbiAgICAgICAgY29uc29sZS5sb2coYW5nbGUpO1xuICAgICAgICBWZWMzLmxlcnAob3V0LCBhbmdsZSwgbmV3IFZlYzMoMCwgdGhpcy5jYW1lcmFBbmdsZSwgMCksIDAuMSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFuZ2xlKTtcblxuICAgICAgICB0aGlzLkNhbWVyYT8uc2V0Um90YXRpb25Gcm9tRXVsZXIob3V0LngsIG91dC55LCBvdXQueik7XG4gICAgICAgIHRoaXMuUGxheWVyPy5zZXRSb3RhdGlvbkZyb21FdWxlcihvdXQueCwgb3V0LnksIG91dC56KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFsbEZsb29ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuYWxsRmxvb3JzW2ldO1xuICAgICAgICAgICAgZWxlbWVudC5ub2RlLnNldFdvcmxkUG9zaXRpb24oZWxlbWVudC5ub2RlLndvcmxkUG9zaXRpb24ueCArICh0aGlzLm1vdmVTcGVlZHggKiB0aGlzLm1vdmVzcGVlZCAqIGR0KSwgMCwgZWxlbWVudC5ub2RlLndvcmxkUG9zaXRpb24ueiArICh0aGlzLm1vdmVTcGVlZHogKiB0aGlzLm1vdmVzcGVlZCAqIGR0KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBNb3ZlRnJvbnQoKSB7XG4gICAgICAgIHRoaXMubW92ZVNwZWVkeCA9IDA7XG4gICAgICAgIHRoaXMubW92ZVNwZWVkeiA9IDE7XG4gICAgfVxuICAgIE1vdmVCYWNrKCkge1xuICAgICAgICB0aGlzLm1vdmVTcGVlZHggPSAwO1xuICAgICAgICB0aGlzLm1vdmVTcGVlZHogPSAtMTtcbiAgICB9XG4gICAgTW92ZUxlZnQoKSB7XG4gICAgICAgIHRoaXMubW92ZVNwZWVkeCA9IDE7XG4gICAgICAgIHRoaXMubW92ZVNwZWVkeiA9IDA7XG4gICAgfVxuICAgIE1vdmVSaWdodCgpIHtcbiAgICAgICAgdGhpcy5tb3ZlU3BlZWR4ID0gLTE7XG4gICAgICAgIHRoaXMubW92ZVNwZWVkeiA9IDA7XG4gICAgfVxuICAgIE1vdmVTdG9wKCkge1xuICAgICAgICB0aGlzLm1vdmVTcGVlZHggPSAwO1xuICAgICAgICB0aGlzLm1vdmVTcGVlZHogPSAwO1xuICAgIH1cbn0iXX0=